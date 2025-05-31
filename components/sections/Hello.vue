<template>
  <section class="hero-section">
    <div class="page-transition-container">
      <!-- テキストコンテンツ - 常に表示される -->
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-name">Hijiri Sato</span>
        </h1>
      </div>
      <!-- 名前の位置から広がる黒背景アニメーション -->
      <div class="name-bg-expand" :class="{ 'is-loaded': isPageLoaded }"></div>
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
}

.hero-content {
  position: relative;
  z-index: 3;
}

/* 名前の位置から広がる黒背景 */
.name-bg-expand {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 140px;
  background-color: #000;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  z-index: 1;
  border-radius: 4px;
}

.name-bg-expand.is-loaded {
  animation: expandFromName 5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

@keyframes expandFromName {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  90% {
    transform: translate(-50%, -50%) scale(25);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(25);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(25);
    opacity: 0;
  }
}
</style>
