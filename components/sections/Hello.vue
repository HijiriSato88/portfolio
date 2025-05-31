<template>
  <section class="hero-section">
    <div 
      class="hero-content"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 1200, ease: 'easeOutQuart' } }"
    >
      <h1 
        class="hero-title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1200, delay: 400, ease: 'easeOutQuart' } }"
      >
        Hello, I'm <span class="hero-name">Hijiri Sato</span>
      </h1>
    </div>
    <div 
      class="scroll-indicator"
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 1200, ease: 'easeOutBack' } }"
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
