<template>
  <div>
    <header class="site-header">
      <div class="page-container">
        <nav class="site-nav">
          <a href="/" class="nav-logo">Portfolio</a>

          <!-- モバイルメニュートグル -->
          <button
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ active: isMobileMenuOpen }"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- ナビゲーションリンク -->
          <div class="nav-links" :class="{ active: isMobileMenuOpen }">
            <a href="#about" @click="closeMobileMenu">About</a>
            <a href="#skills" @click="closeMobileMenu">Tech Stack</a>
            <a href="#career" @click="closeMobileMenu">Experience</a>
            <a href="#contact" @click="closeMobileMenu">Contact</a>

            <!-- ダークモード切り替えボタン -->
            <button
              class="theme-toggle"
              @click="toggleDarkMode"
              :title="isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
            >
              <Icon :icon="isDark ? 'lucide:sun-medium' : 'lucide:moon-star'" class="theme-icon w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="page-container">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} Hijiri Sato</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useDarkMode } from '~/composables/useDarkMode'

const isMobileMenuOpen = ref(false)
const { isDark, toggleDarkMode, initializeDarkMode } = useDarkMode()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const updateViewportHeight = () => {
  if (process.client) {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
}

onMounted(() => {
  initializeDarkMode()
  
  updateViewportHeight()
  
  window.addEventListener('resize', updateViewportHeight)
  window.addEventListener('orientationchange', updateViewportHeight)
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateViewportHeight)
    window.removeEventListener('orientationchange', updateViewportHeight)
  }
})
</script>
