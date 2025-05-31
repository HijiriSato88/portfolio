<template>
  <section class="hero-section" :class="{ 'black-bg': isPageLoaded }">
    <div class="page-transition-container">
      <!-- テキストコンテンツ - 常に表示される -->
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-name" :class="{ 'binary-mode': isBinaryMode }">{{ displayText }}</span>
        </h1>
      </div>
      <!-- 名前の位置から広がる黒背景アニメーション -->
      <div class="name-bg-expand" :class="{ 'is-loaded': isPageLoaded }"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const isPageLoaded = ref(false);
const displayText = ref('');

// "Hijiri Sato"を二進数に変換
const targetText = 'Hijiri Sato';
const binaryText = targetText.split('').map(char => {
  return char.charCodeAt(0).toString(2).padStart(8, '0');
}).join(' ');

// 二進数モードかどうかを判定
const isBinaryMode = computed(() => {
  return displayText.value === binaryText || displayText.value.includes('0') || displayText.value.includes('1');
});

// 二進数から英語への変化アニメーション
const animateTextTransition = () => {
  const binaryChars = binaryText.split('');
  const targetChars = targetText.split('');
  let currentText = binaryText;
  
  // 各文字の変化タイミングを計算
  const totalDuration = 3000; // 3秒
  const charCount = targetChars.length;
  const intervalTime = 50; // 50msごとに更新
  
  let progress = 0;
  const maxProgress = totalDuration / intervalTime;
  
  const interval = setInterval(() => {
    progress++;
    let newText = '';
    
    for (let i = 0; i < targetChars.length; i++) {
      const charProgress = (progress - (i * 5)) / (maxProgress / charCount);
      
      if (charProgress <= 0) {
        // まだ二進数のまま
        const binaryStart = i * 9; // 8文字 + スペース
        const binaryEnd = binaryStart + 8;
        newText += binaryText.slice(binaryStart, binaryEnd) + ' ';
      } else if (charProgress >= 1) {
        // 完全に英語文字
        newText += targetChars[i];
      } else {
        // 変化中（ランダムな0と1から徐々に正しい文字へ）
        if (Math.random() < charProgress) {
          newText += targetChars[i];
        } else {
          newText += Math.random() < 0.5 ? '0' : '1';
        }
      }
    }
    
    displayText.value = newText;
    
    if (progress >= maxProgress) {
      displayText.value = targetText;
      clearInterval(interval);
    }
  }, intervalTime);
};

onMounted(() => {
  // 最初は二進数で表示
  displayText.value = binaryText;
  
  // ページロード時にアニメーションを開始
  setTimeout(() => {
    isPageLoaded.value = true;
  }, 500);
  
  // 黒背景拡大後にテキスト変化開始
  setTimeout(() => {
    animateTextTransition();
  }, 5000);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease 4.2s;
}

.hero-section.black-bg {
  background-color: #000;
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

.hero-title {
  transition: color 0.3s ease 4.2s;
  text-align: center;
}

.hero-name {
  transition: all 0.3s ease 4.2s;
  display: inline-block;
  white-space: nowrap;
}

/* 二進数モード時のスタイル */
.hero-name.binary-mode {
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  line-height: 1.4;
  word-spacing: 8px;
  text-align: center;
  background-color: transparent;
  color: #333;
  padding: 0.5em 1em;
  border: 1px solid #666;
  border-radius: 8px;
}

.hero-section.black-bg .hero-title {
  color: #fff;
}

.hero-section.black-bg .hero-name:not(.binary-mode) {
  background-color: transparent;
  color: #fff;
}

.hero-section.black-bg .hero-name.binary-mode {
  color: #00ff00;
  border-color: #00ff00;
  background-color: rgba(0, 0, 0, 0.8);
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
    opacity: 0;
  }
}
</style>
