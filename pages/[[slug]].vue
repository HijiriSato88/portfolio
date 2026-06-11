<template>
  <div>
    <!-- cursor -->
    <div class="cursor" ref="cursorEl" />

    <!-- loader -->
    <div id="loader" ref="loaderEl" :class="{ done: loaderDone }" aria-hidden="true">
      <div class="boot" ref="bootEl" />
      <div class="pct" ref="pctEl">0%</div>
    </div>

    <!-- nav -->
    <nav :class="{ 'menu-open': menuOpen }">
      <a class="logo" href="/" @click.prevent="navigate('')">
        HIJIRI SATO<span class="dot">_</span>
      </a>
      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        aria-label="メニュー"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
      <ul :class="{ open: menuOpen }">
        <li><a href="/about" @click.prevent="navigate('about')">About</a></li>
        <li><a href="/stack" @click.prevent="navigate('stack')">Stack</a></li>
        <li><a href="/archive" @click.prevent="navigate('archive')">Archive</a></li>
        <li><a href="/writing" @click.prevent="navigate('writing')">Writing</a></li>
        <li><a href="/contact" @click.prevent="navigate('contact')">Contact</a></li>
      </ul>
    </nav>

    <!-- wipe transition -->
    <div class="wipe" ref="wipeEl" aria-hidden="true">
      <span class="cmd" ref="wipeCmdEl" />
    </div>

    <!-- top page -->
    <div class="page" :class="{ active: currentPage === '' }">
      <SectionsHero />
      <SectionsStrip />
      <SectionsTerminalNav :current-page="currentPage" @navigate="navigate" />
    </div>

    <!-- about page -->
    <div class="page page-sub" :class="{ active: currentPage === 'about' }">
      <SectionsAbout @navigate="navigate" />
    </div>

    <!-- stack page -->
    <div class="page page-sub" :class="{ active: currentPage === 'stack' }">
      <SectionsSkills @navigate="navigate" />
    </div>

    <!-- archive page -->
    <div class="page page-sub" :class="{ active: currentPage === 'archive' }">
      <SectionsCareer @navigate="navigate" />
    </div>

    <!-- writing page -->
    <div class="page page-sub" :class="{ active: currentPage === 'writing' }">
      <SectionsWriting @navigate="navigate" />
    </div>

    <!-- contact page -->
    <div class="page page-sub" :class="{ active: currentPage === 'contact' }">
      <SectionsContact @navigate="navigate" />
    </div>

    <footer>
      <span>© 2026 HIJIRI SATO — BUILT WITH THE UNSEEN</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
// constant key → the page instance is reused across /, /about, … (no remount,
// so the loader/cursor/terminal persist and transitions are driven by us)
definePageMeta({ layout: false, key: 'app' })

type PageKey = '' | 'about' | 'stack' | 'archive' | 'writing' | 'contact'

// path segment → page (with a couple of aliases)
const ROUTE_MAP: Record<string, PageKey> = {
  '': '', about: 'about', stack: 'stack',
  archive: 'archive', career: 'archive',
  writing: 'writing', blog: 'writing',
  contact: 'contact',
}

const route = useRoute()
const router = useRouter()

function pathToPage(path: string): PageKey {
  const seg = path.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase()
  return ROUTE_MAP.hasOwnProperty(seg) ? ROUTE_MAP[seg] : ''
}

const currentPage = ref<PageKey>(pathToPage(route.path))
const transitioning = ref(false)
const loaderDone = ref(false)
const menuOpen = ref(false)

const cursorEl = ref<HTMLDivElement>()
const loaderEl = ref<HTMLDivElement>()
const bootEl = ref<HTMLDivElement>()
const pctEl = ref<HTMLDivElement>()
const wipeEl = ref<HTMLDivElement>()
const wipeCmdEl = ref<HTMLSpanElement>()

let reduced = false
let internalNav = false
let rvObserver: IntersectionObserver | null = null

function activate(page: PageKey) {
  currentPage.value = page
  window.scrollTo(0, 0)
  nextTick(() => {
    document.querySelectorAll('.rv:not(.in)').forEach(el => rvObserver?.observe(el))
  })
}

function navigate(page: string) {
  const p = page as PageKey
  menuOpen.value = false
  if (p === currentPage.value || transitioning.value) return
  const target = p ? '/' + p : '/'

  if (reduced) {
    activate(p)
    internalNav = true
    router.push(target)
    return
  }

  transitioning.value = true
  if (wipeCmdEl.value) wipeCmdEl.value.textContent = `guest@hijiri88.dev:~$ cd ${p ? '~/' + p : '~'}`
  if (wipeEl.value) {
    wipeEl.value.classList.add('run')
    wipeEl.value.style.transform = 'translateY(0)'
  }
  setTimeout(() => {
    activate(p)
    internalNav = true
    router.push(target)
    if (wipeEl.value) {
      wipeEl.value.style.transform = 'translateY(-101%)'
      setTimeout(() => {
        if (wipeEl.value) {
          wipeEl.value.classList.remove('run')
          wipeEl.value.style.transform = 'translateY(101%)'
        }
        transitioning.value = false
      }, 600)
    }
  }, 600)
}

// browser back/forward (or any external route change) → animate to it
watch(() => route.path, (path) => {
  if (internalNav) { internalNav = false; return }
  const p = pathToPage(path)
  if (p !== currentPage.value) navigate(p)
})

onMounted(() => {
  reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

  // scroll reveal observer
  rvObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        rvObserver!.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.rv').forEach(el => rvObserver!.observe(el))

  // cursor
  const cur = cursorEl.value
  if (cur) {
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY })
    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
      requestAnimationFrame(loop)
    }
    loop()
    document.addEventListener('mouseover', e => {
      const el = (e.target as Element).closest('a,button,.stack-row,.arc-item')
      cur.classList.toggle('is-hover', !!el)
    })
  }

  // loader boot sequence
  const bootLines: [string, number][] = [
    ['$ boot hijiri-sato --portfolio', 0],
    ['<span class="ok">[ OK ]</span> loading runtime ........... go, ruby, kotlin', 300],
    ['<span class="ok">[ OK ]</span> mounting database .......... mysql', 550],
    ['<span class="ok">[ OK ]</span> containers up .............. docker / aws', 800],
    ['<span class="ok">[ OK ]</span> mission .................... deliver education to everyone', 1050],
    ['$ server listening on :2026', 1350],
  ]

  const finishLoad = () => {
    loaderDone.value = true
    document.body.classList.add('ready')
    setTimeout(() => loaderEl.value?.remove(), 1100)
  }

  if (reduced) {
    finishLoad()
  } else {
    bootLines.forEach(([html, t]) => {
      setTimeout(() => {
        if (bootEl.value) {
          const d = document.createElement('div')
          d.innerHTML = html
          bootEl.value.appendChild(d)
        }
      }, t)
    })
    let p = 0
    const iv = setInterval(() => {
      p = Math.min(100, p + Math.ceil(Math.random() * 9))
      if (pctEl.value) pctEl.value.textContent = p + '%'
      if (p >= 100) { clearInterval(iv); setTimeout(finishLoad, 350) }
    }, 70)
  }
})
</script>
