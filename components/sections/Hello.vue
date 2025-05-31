<template>
  <section class="hero-section">
    <div class="page-transition-container">
      <div 
        class="hero-content"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 1800, delay: 2500, ease: 'easeOutQuart' } }"
      >
        <h1 class="hero-title">
          <span class="hero-name">Hijiri Sato</span>
        </h1>
      </div>
      <!-- アニメーション用の要素 -->
      <div class="expand-bg" :class="{ 'is-loaded': isPageLoaded }"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isPageLoaded = ref(false);

onMounted(() => {
  // ページロード時にアニメーションを開始
  setTimeout(() => {
    isPageLoaded.value = true;
  }, 500);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.page-transition-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

/* 拡大する黒背景 */
.expand-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 10;
  transform-origin: center;
  transform: scale(0);
}

.expand-bg.is-loaded {
  animation: expandBg 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

@keyframes expandBg {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
