<template>
  <div class="strip" aria-hidden="true">
    <canvas ref="stripEl" />
  </div>
</template>

<script setup lang="ts">
const stripEl = ref<HTMLCanvasElement>()

onMounted(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!stripEl.value) return
  const sc = stripEl.value
  const sx = sc.getContext('2d')!
  const DPR = devicePixelRatio

  let SW = 0, SH = 0, stripT = 0

  // rally state
  const RALLY = ['GET', '200', 'POST', '201', 'PUT', '204', 'GET', '304']
  const rally = { t: 0, dur: 95, dir: 1, idx: 0 } // dir 1 = client→server

  // pixel players: client (left) & server (right). 2 frames: ready / swing
  const CLIENT_READY = ['.##...', '.##...', '####..', '.##...', '.##.#.', '####..', '#..#..']
  const CLIENT_SWING = ['.##...', '.##...', '####..', '.##...', '.###..', '.##...', '#.#...']
  const SERVER_READY = ['...##.', '...##.', '..####', '...##.', '.#.##.', '..####', '..#..#']
  const SERVER_SWING = ['...##.', '...##.', '..####', '...##.', '..###.', '...##.', '...#.#']

  function stripResize() {
    if (sc.offsetWidth === 0) return
    SW = sc.width = sc.offsetWidth * DPR
    SH = sc.height = sc.offsetHeight * DPR
  }

  function drawSprite(frame: string[], x: number, y: number, px: number, color: string) {
    sx.fillStyle = color
    for (let r = 0; r < frame.length; r++)
      for (let c = 0; c < frame[r].length; c++)
        if (frame[r][c] === '#') sx.fillRect(x + c * px, y + r * px, px, px)
  }

  // racket: handle from the hand, oval head at the end. angle in radians.
  function drawRacket(hx: number, hy: number, angle: number, len: number, color: string) {
    const ex = hx + Math.cos(angle) * len, ey = hy + Math.sin(angle) * len // head center
    sx.strokeStyle = color
    sx.lineWidth = 1.6 * DPR
    sx.beginPath(); sx.moveTo(hx, hy); sx.lineTo(ex, ey); sx.stroke()
    const hr = 4.4 * DPR
    sx.beginPath()
    sx.ellipse(ex + Math.cos(angle) * hr * 0.7, ey + Math.sin(angle) * hr * 0.7, hr, hr * 0.7, angle, 0, 7)
    sx.stroke()
    sx.globalAlpha = 0.5
    sx.beginPath()
    sx.moveTo(ex, ey - hr * 0.5); sx.lineTo(ex + Math.cos(angle) * hr * 1.3, ey + Math.sin(angle) * hr * 1.3)
    sx.stroke()
    sx.globalAlpha = 1
  }

  function drawStrip() {
    if (SW === 0) { if (!reduce) requestAnimationFrame(drawStrip); return }
    stripT++
    sx.clearRect(0, 0, SW, SH)

    const px = 2.6 * DPR
    const gy = SH * 0.80                  // court baseline
    const cx = SW * 0.14, svx = SW * 0.86 // client x / server x
    const py = gy - 7 * px                // player top

    // court line
    sx.strokeStyle = 'rgba(58,65,79,.55)'
    sx.lineWidth = DPR
    sx.setLineDash([3 * DPR, 5 * DPR])
    sx.beginPath(); sx.moveTo(cx, gy + 2 * DPR); sx.lineTo(svx + 6 * px, gy + 2 * DPR); sx.stroke()
    sx.setLineDash([])
    // net in middle
    const netx = SW * 0.5
    sx.strokeStyle = 'rgba(58,65,79,.8)'
    sx.beginPath(); sx.moveTo(netx, gy + 2 * DPR); sx.lineTo(netx, gy - 6 * px); sx.stroke()

    // rally progress
    rally.t++
    let p = rally.t / rally.dur
    if (p >= 1) {
      rally.dir *= -1
      rally.idx = (rally.idx + 1) % RALLY.length
      rally.t = 0; p = 0
    }
    const hitting = p < 0.16 || p > 0.84  // swing window near contact
    const ax = cx + 6 * px, bx = svx
    const x0 = rally.dir > 0 ? ax : bx, x1 = rally.dir > 0 ? bx : ax
    const ballX = x0 + (x1 - x0) * p
    const bounceAt = 0.68
    const groundY = gy - 3 * px
    const maxH = SH * 0.5
    let arc: number, ballY: number
    if (p < bounceAt) {
      arc = Math.sin(p / bounceAt * Math.PI)
      ballY = groundY - arc * maxH
    } else {
      const q = (p - bounceAt) / (1 - bounceAt)
      arc = Math.sin(q * Math.PI) * 0.42
      ballY = groundY - arc * maxH
    }

    // players
    const clientSwing = (rally.dir > 0 && p < 0.18) || (rally.dir < 0 && p > 0.82)
    const serverSwing = (rally.dir < 0 && p < 0.18) || (rally.dir > 0 && p > 0.82)
    drawSprite(clientSwing ? CLIENT_SWING : CLIENT_READY, cx, py, px, '#e8e6df')
    drawSprite(serverSwing ? SERVER_SWING : SERVER_READY, svx, py, px, '#9aa0ab')

    // rackets
    const racketLen = 9 * DPR
    const chx = cx + 5 * px, chy = py + 2.5 * px
    const cAngle = clientSwing ? -0.5 : -1.9
    drawRacket(chx, chy, cAngle, racketLen, '#e8e6df')
    const shx = svx + 0.5 * px, shy = py + 2.5 * px
    const sAngle = serverSwing ? -Math.PI + 0.5 : -Math.PI + 1.9
    drawRacket(shx, shy, sAngle, racketLen, '#9aa0ab')

    // labels under each player
    sx.font = `${9 * DPR}px 'IBM Plex Mono',monospace`
    sx.textAlign = 'center'
    sx.fillStyle = 'rgba(154,160,171,.5)'
    sx.fillText('client', cx + 3 * px, gy + 10 * DPR)
    sx.fillText('server', svx + 3 * px, gy + 10 * DPR)

    // bounce dust
    const justBounced = p >= bounceAt && p < bounceAt + 0.07
    if (justBounced) {
      const bxAt = x0 + (x1 - x0) * bounceAt
      const fade = 1 - (p - bounceAt) / 0.07
      sx.strokeStyle = `rgba(255,180,84,${0.5 * fade})`
      sx.lineWidth = DPR
      sx.beginPath()
      sx.ellipse(bxAt, groundY + 3 * DPR, (5 + (1 - fade) * 6) * DPR, 2 * DPR, 0, 0, 7)
      sx.stroke()
    }

    // the ball = the message in flight
    sx.fillStyle = '#ffb454'
    sx.beginPath(); sx.arc(ballX, ballY, 4 * DPR, 0, 7); sx.fill()
    sx.strokeStyle = 'rgba(11,13,16,.8)'; sx.lineWidth = DPR
    sx.beginPath(); sx.arc(ballX - 1.3 * DPR, ballY, 4 * DPR, -0.9, 0.9); sx.stroke()

    // label travelling with the ball
    const label = RALLY[rally.idx]
    sx.font = `${10 * DPR}px 'IBM Plex Mono',monospace`
    sx.fillStyle = '#ffb454'
    sx.globalAlpha = 0.5 + arc * 0.5
    sx.fillText(label, ballX, ballY - 9 * DPR)
    sx.globalAlpha = 1

    // contact spark
    if (hitting) {
      const hx = p < 0.5 ? x0 : x1
      sx.strokeStyle = `rgba(255,180,84,${0.6 - Math.min(p, 1 - p) / 0.16 * 0.6})`
      sx.lineWidth = DPR
      for (let a = 0; a < 4; a++) {
        const ang = a / 4 * 6.28 + stripT
        sx.beginPath()
        sx.moveTo(hx, gy - 3 * px)
        sx.lineTo(hx + Math.cos(ang) * 5 * DPR, gy - 3 * px + Math.sin(ang) * 5 * DPR)
        sx.stroke()
      }
    }
    sx.textAlign = 'left'

    if (!reduce) requestAnimationFrame(drawStrip)
  }

  stripResize()
  window.addEventListener('resize', stripResize)
  if (reduce) { drawStrip() } else { requestAnimationFrame(drawStrip) }
})
</script>
