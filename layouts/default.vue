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
            <a href="#skills" @click="closeMobileMenu">Skills</a>
            <a href="#career" @click="closeMobileMenu">Career</a>
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
          <p>&copy; {{ new Date().getFullYear() }} hijiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useDarkMode } from '~/composables/useDarkMode' // カスタムComposableとして定義している場合

const isMobileMenuOpen = ref(false)
const { isDark, toggleDarkMode, initializeDarkMode } = useDarkMode()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// コンポーネントのマウント時にダークモード初期化を確実に実行
onMounted(() => {
  initializeDarkMode()
})
</script>
