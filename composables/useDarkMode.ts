import { ref, computed, watch, readonly, onMounted } from 'vue'

export const useDarkMode = () => {
  // リアクティブな状態管理
  const isDark = ref(false)
  
  // 初期化フラグ
  const isInitialized = ref(false)

  // ダークモードの初期化
  const initializeDarkMode = () => {
    if (process.client) {
      // ローカルストレージから設定を読み込み
      const savedTheme = localStorage.getItem('theme')
      
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        // システムの設定を確認
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isDark.value = prefersDark
        // 設定を保存
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      }
      
      isInitialized.value = true
      applyTheme()
    }
  }

  // テーマの適用
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

  // ダークモードの切り替え
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      applyTheme()
    }
  }

  // 現在のテーマ名を計算
  const currentTheme = computed(() => isDark.value ? 'dark' : 'light')

  // ダークモードの変更を監視
  watch(isDark, () => {
    if (isInitialized.value) {
      applyTheme()
    }
  })

  // システムのカラースキーム変更を監視
  if (process.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    mediaQuery.addEventListener('change', (e) => {
      // ローカルストレージに設定がない場合のみシステム設定に追従
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