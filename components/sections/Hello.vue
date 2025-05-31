<template>
  <section class="hero-section">
    <div class="page-transition-container">
      <!-- テキストコンテンツ - 常に表示される -->
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-name" :class="{ 'binary-mode': isBinaryMode }">{{ displayText }}</span>
        </h1>
      </div>
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
  
  // 2秒後にテキスト変化開始
  setTimeout(() => {
    animateTextTransition();
  }, 2000);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
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
  color: #fff;
  text-align: center;
}

.hero-name {
  display: inline-block;
  white-space: nowrap;
  color: #fff;
  transition: color 0.3s ease;
}

/* 二進数モード時のスタイル - 最初から適用 */
.hero-name.binary-mode {
  font-size: 0.8rem !important;
  font-family: 'Courier New', monospace !important;
  letter-spacing: 2px !important;
  line-height: 1.4 !important;
  word-spacing: 8px !important;
  text-align: center !important;
  background-color: transparent !important;
  color: #00ff00 !important;
  padding: 0.5em 1em !important;
  border: 1px solid #00ff00 !important;
  border-radius: 8px !important;
  transition: none !important;
}

/* 英語文字時のスタイル */
.hero-name:not(.binary-mode) {
  background-color: transparent;
  color: #fff;
}
</style>
