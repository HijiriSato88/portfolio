<template>
  <header id="hero">
    <canvas ref="canvasEl" aria-hidden="true" />
    <h1 class="hero-name" :class="{ 'is-ready': nameVisible }" aria-label="Hijiri Sato">
      <span class="line"><span>HIJIRI</span></span>
      <span class="line"><span class="hollow">SATO</span></span>
    </h1>
    <div class="hero-meta">
      <div class="stat"><span class="pulse" />SERVER RUNNING — TOKYO, JP</div>
      <div class="stat">BACKEND ENGINEER / STUDENT</div>
    </div>
  </header>
</template>

<script setup lang="ts">
const canvasEl = ref<HTMLCanvasElement>()
const nameVisible = ref(false)

onMounted(() => {
  const checkReady = () => {
    if (document.body.classList.contains('ready')) {
      nameVisible.value = true
    } else {
      requestAnimationFrame(checkReady)
    }
  }
  requestAnimationFrame(checkReady)
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!canvasEl.value) return
  const cv = canvasEl.value
  const ctx = cv.getContext('2d')!

  let W = 0, H = 0
  type Node = { x: number; y: number; r: number; links: number[] }
  let nodes: Node[] = []

  function resize() {
    if (!cv.offsetWidth) return
    W = cv.width = cv.offsetWidth * devicePixelRatio
    H = cv.height = cv.offsetHeight * devicePixelRatio
    buildNet()
  }

  function buildNet() {
    nodes = []
    const cols = Math.max(5, Math.floor(cv.offsetWidth / 180))
    const rows = Math.max(4, Math.floor(cv.offsetHeight / 170))
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: (c + 0.5) / cols * W + (Math.random() - 0.5) * W / cols * 0.7,
          y: (r + 0.5) / rows * H + (Math.random() - 0.5) * H / rows * 0.7,
          r: Math.random() * 1.5 + 0.8,
          links: [],
        })
      }
    }
    nodes.forEach(n => {
      n.links = nodes
        .map((m, i) => ({ i, d: (n.x - m.x) ** 2 + (n.y - m.y) ** 2 }))
        .sort((a, b) => a.d - b.d)
        .slice(1, 4)
        .map(o => o.i)
    })
  }

  let mx = -9999, my = -9999
  window.addEventListener('mousemove', e => {
    const r = cv.getBoundingClientRect()
    mx = (e.clientX - r.left) * devicePixelRatio
    my = (e.clientY - r.top) * devicePixelRatio
  })

  function draw() {
    ctx.clearRect(0, 0, W, H)
    nodes.forEach((n, i) => {
      n.links.forEach(li => {
        if (li < i) return
        const m = nodes[li]
        const midx = (n.x + m.x) / 2, midy = (n.y + m.y) / 2
        const dist = Math.hypot(midx - mx, midy - my)
        const glow = Math.max(0, 1 - dist / (260 * devicePixelRatio))
        ctx.strokeStyle = `rgba(58,65,79,${0.10 + glow * 0.5})`
        ctx.lineWidth = devicePixelRatio * (0.5 + glow)
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke()
      })
    })
    nodes.forEach(n => {
      const dist = Math.hypot(n.x - mx, n.y - my)
      const glow = Math.max(0, 1 - dist / (220 * devicePixelRatio))
      ctx.fillStyle = `rgba(154,160,171,${0.18 + glow * 0.6})`
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r * devicePixelRatio * (1 + glow), 0, Math.PI * 2)
      ctx.fill()
    })
    if (!reduced) requestAnimationFrame(draw)
  }

  resize()
  window.addEventListener('resize', resize)
  if (reduced) { draw() } else { requestAnimationFrame(draw) }
})
</script>

<style scoped lang="scss">
#hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 5vw 9vh;
  overflow: hidden;

  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.hero-jp {
  font-family: var(--jp-serif);
  font-weight: 500;
  font-size: clamp(15px, 2vw, 21px);
  letter-spacing: 0.3em;
  color: var(--bone-dim);
  margin-bottom: 2.5vh;
  writing-mode: vertical-rl;
  position: absolute;
  top: 14vh;
  right: 6vw;
  height: 60vh;

  em {
    font-style: normal;
    color: var(--phos);
  }

  @media (max-width: 680px) { display: none; }
}

.hero-name {
  font-family: var(--disp);
  font-size: clamp(64px, 15.5vw, 260px);
  line-height: 0.92;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: var(--bone);
  position: relative;
  z-index: 2;

  .line {
    display: block;
    overflow: hidden;

    span {
      display: inline-block;
      transform: translateY(110%);
      transition: transform 1.2s var(--ease);
    }

    &:nth-child(2) span { transition-delay: 0.12s; }
  }

  .hollow {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--bone);
  }

  &.is-ready .line span { transform: translateY(0); }
}

.hero-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4vh;
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--bone-dim);
  letter-spacing: 0.1em;
  z-index: 2;
  position: relative;
  flex-wrap: wrap;
  gap: 12px;

  .stat {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pulse {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--live);
    animation: pulse-dot 1.8s infinite;
  }
}

@keyframes pulse-dot {
  0% { box-shadow: 0 0 0 0 rgba(255, 92, 77, 0.6); }
  70% { box-shadow: 0 0 0 9px rgba(255, 92, 77, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 92, 77, 0); }
}

.scroll-cue {
  position: absolute;
  bottom: 9vh;
  right: 5vw;
  z-index: 2;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--bone-dim);
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: '';
    width: 1px;
    height: 48px;
    background: linear-gradient(var(--phos), transparent);
    animation: drop 2s var(--ease) infinite;
  }

  @media (max-width: 680px) { display: none; }
}

@keyframes drop {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
</style>
