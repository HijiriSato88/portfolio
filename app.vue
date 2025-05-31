<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { initializeDarkMode } = useDarkMode()

// クライアントサイドでダークモードを初期化
onMounted(() => {
  initializeDarkMode()
})
</script>
