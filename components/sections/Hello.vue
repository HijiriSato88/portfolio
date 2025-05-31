<template>
  <section class="hero-section">
    <div 
      class="hero-content"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <h1 
        class="hero-title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
      >
        Hello, I'm <span class="hero-name">Hijiri Sato</span>
      </h1>
    </div>
    <div 
      class="scroll-indicator"
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 800, ease: 'easeOut' } }"
    >
      ↓
    </div>
  </section>
</template>

<script setup>
// ここにHelloセクションのロジックを追加可能
</script>

<style scoped>
/* 必要に応じてセクション固有のスタイルを追加 */
</style>
