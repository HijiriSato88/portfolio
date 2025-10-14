<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { initializeDarkMode } = useDarkMode()

onMounted(() => {
  initializeDarkMode()
})
</script>
