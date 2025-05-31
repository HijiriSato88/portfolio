<template>
  <section class="hero-section">
    <div class="page-transition-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-name" :class="{ 'binary-mode': isBinaryMode, 'transitioning': isTransitioning, 'scale-up': shouldScaleUp }">{{ displayText }}</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

const isPageLoaded = ref<boolean>(false);
const displayText = ref<string>('');
const isTransitioning = ref<boolean>(false);
const shouldScaleUp = ref<boolean>(false);

// "Hijiri Sato"を二進数に変換
const targetText = 'HIJIRI SATO';
const binaryText = targetText.split('').map(char => {
  return char.charCodeAt(0).toString(2).padStart(8, '0');
}).join(' ');

// 二進数モードかどうかを判定
const isBinaryMode = computed(() => {
  return displayText.value === binaryText || displayText.value.includes('0') || displayText.value.includes('1');
});

// 二進数から英語への変化アニメーション
const animateTextTransition = (): void => {
  const binaryChars = binaryText.split('');
  const targetChars = targetText.split('');
  let currentText = binaryText;
  
  // 各文字の変化タイミングを計算
  const totalDuration = 6000; // 6秒に延長
  const charCount = targetChars.length;
  const intervalTime = 80; // 80msごとに更新（よりゆっくり）
  
  let progress = 0;
  const maxProgress = totalDuration / intervalTime;
  
  const interval = setInterval(() => {
    progress++;
    let newText = '';
    
    for (let i = 0; i < targetChars.length; i++) {
      const charProgress = (progress - (i * 8)) / (maxProgress / charCount); // より段階的に
      
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
        if (Math.random() < charProgress * 0.7) { // より慎重な変化
          newText += targetChars[i];
        } else {
          newText += Math.random() < 0.5 ? '0' : '1';
        }
      }
    }
    
    displayText.value = newText;
    
    if (progress >= maxProgress) {
      displayText.value = targetText;
      // 変換完了時にトランジションを有効にする
      isTransitioning.value = true;
      
      // 変換完了から1.5秒後にゆっくりと通常サイズまで拡大
      setTimeout(() => {
        shouldScaleUp.value = true;
      }, 1500);
      
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
.page-transition-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

/* 英語文字への変化時のトランジション - サイズ変更を除外 */
.hero-name.transitioning {
  transition: color 2s ease, border-color 2s ease, background-color 2s ease, font-family 3s ease, font-weight 2s ease, text-transform 2s ease, letter-spacing 2s ease;
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
  color: var(--accent) !important;
  padding: 0.5em 1em !important;
  border: 1px solid var(--accent) !important;
  border-radius: 8px !important;
  /* 初期表示時はトランジション無し */
  transition: none !important;
  white-space: pre-wrap !important;
  overflow-wrap: break-word !important;
  max-width: 90vw !important;
  
  /* スマホ対応 */
  @media (max-width: 767px) {
    font-size: 0.6rem !important;
    letter-spacing: 1px !important;
    word-spacing: 4px !important;
    padding: 0.3em 0.6em !important;
    line-height: 1.2 !important;
    max-width: 85vw !important;
  }
  
  /* 非常に小さい画面対応 */
  @media (max-width: 480px) {
    font-size: 0.5rem !important;
    letter-spacing: 0.5px !important;
    word-spacing: 2px !important;
    padding: 0.2em 0.4em !important;
    max-width: 80vw !important;
  }
}

/* 英語文字時のスタイル - 変換直後は小さなサイズを維持 */
.hero-name:not(.binary-mode) {
  background-color: transparent;
  color: var(--accent);
  border: none;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  /* 変換直後は二進数と同じ小さなサイズを維持 */
  font-size: 0.8rem;
  
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
}

/* ゆっくりと通常サイズまで拡大するアニメーション */
.hero-name.scale-up {
  font-size: 4rem !important;
  letter-spacing: 0.1em;
  transition: font-size 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), letter-spacing 3s ease;
  
  @media (min-width: 768px) {
    font-size: 5.5rem !important;
  }
  
  @media (max-width: 767px) {
    font-size: 2.5rem !important;
  }
}
</style>
