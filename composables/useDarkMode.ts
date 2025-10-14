import { ref, computed, watch, readonly, onMounted } from 'vue'

export const useDarkMode = () => {
  const isDark = ref(false)
  const isInitialized = ref(false)

  const initializeDarkMode = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isDark.value = prefersDark
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      }
      
      isInitialized.value = true
      applyTheme()
    }
  }

  const applyTheme = () => {
    if (process.client) {
      const html = document.documentElement
      
      if (isDark.value) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      applyTheme()
    }
  }

  const currentTheme = computed(() => isDark.value ? 'dark' : 'light')

  watch(isDark, () => {
    if (isInitialized.value) {
      applyTheme()
    }
  })

  if (process.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        applyTheme()
      }
    })
  }

  return {
    isDark: readonly(isDark),
    currentTheme,
    isInitialized: readonly(isInitialized),
    initializeDarkMode,
    toggleDarkMode
  }
} 
