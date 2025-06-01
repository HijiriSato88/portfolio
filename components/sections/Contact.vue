<template>
  <section id="contact" class="contact-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        Contact
      </h2>
      <div class="contact-content-center">
        <div 
          class="contact-info"
          v-motion
          v-bind="slideFromSideAnimation('left', 200)"
        >
          <h3>Get in Touch</h3>
          
          <div class="contact-items">
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(250)"
            >
              <Icon icon="material-symbols:mail" class="contact-icon" />
              <span class="email-address">satohiji0808@outlook.com</span>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(300)"
            >
              <Icon icon="simple-icons:github" class="contact-icon" />
              <a href="https://github.com/HijiriSato88" target="_blank" rel="noopener noreferrer">
                @HijiriSato88
              </a>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(350)"
            >
              <Icon icon="simple-icons:x" class="contact-icon" />
              <a href="https://x.com/dxeynzdxiy8" target="_blank" rel="noopener noreferrer">
                @dxeynzdxiy8
              </a>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(400)"
            >
              <Icon icon="simple-icons:zenn" class="contact-icon" />
              <a href="https://zenn.dev/hijiri_88" target="_blank" rel="noopener noreferrer">
                @hijiri_88
              </a>
            </div>
          </div>
          
          <div 
            class="social-links"
            v-motion
            v-bind="slideFromSideAnimation('bottom', 450)"
          >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAnimations } from '~/composables/useAnimations'

// アニメーション設定を取得
const { sectionTitleAnimation, slideFromSideAnimation, slideUpAnimation } = useAnimations()
</script>

<style scoped>
.contact-content-center {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  /* 小さな画面での余白調整 */
  padding: 0 1rem;
}

.contact-info {
  /* GPUアクセラレーション */
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    transition: color 0.3s ease;
    
    /* 小さな画面でのフォントサイズ調整 */
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  /* 小さな画面でのギャップ調整 */
  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  
  /* パフォーマンス最適化 */
  will-change: transform, background-color;
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout;
  
  /* 軽量化されたトランジション */
  transition: transform 0.15s ease, background-color 0.15s ease;
  
  /* レスポンシブ対応 */
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.75rem;
    /* 小さな画面では横並びから縦並びに変更 */
    flex-direction: column;
    text-align: center;
  }
  
  /* iPhone SE以下の非常に小さな画面 */
  @media (max-width: 375px) {
    padding: 0.5rem;
    margin: 0 0.5rem;
  }
  
  &:hover {
    background-color: var(--bg-tertiary);
    transform: translateY(-1px) translateZ(0);
  }
  
  .contact-icon {
    font-size: 1.5rem;
    color: var(--accent);
    transition: color 0.2s ease;
    /* アイコン最適化 */
    will-change: auto;
    flex-shrink: 0;
    
    /* 小さな画面でのアイコンサイズ調整 */
    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  
  span, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    /* テキストの折り返しを許可 */
    word-break: break-all;
    overflow-wrap: break-word;
    hyphens: auto;
    
    /* 小さな画面でのフォントサイズ調整 */
    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }
    
    /* iPhone SE以下での更なる調整 */
    @media (max-width: 375px) {
      font-size: 0.85rem;
    }
    
    &:hover {
      color: var(--text-primary);
    }
    
    /* メールアドレス専用スタイル */
    &.email-address {
      /* メールアドレスは特に長いので積極的に改行 */
      word-break: break-all;
      overflow-wrap: anywhere;
      white-space: normal;
      max-width: 100%;
      
      @media (max-width: 480px) {
        font-size: 0.85rem;
        line-height: 1.3;
        /* 縦並び時の最大幅制限 */
        max-width: 250px;
        margin: 0 auto;
      }
      
      @media (max-width: 375px) {
        font-size: 0.8rem;
        max-width: 220px;
      }
      
      /* iPhone SE第1世代など極小画面 */
      @media (max-width: 320px) {
        font-size: 0.75rem;
        max-width: 200px;
      }
    }
  }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  /* GPUアクセラレーション */
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.social-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background-color: var(--bg-tertiary);
  
  /* パフォーマンス最適化 */
  will-change: transform, background-color;
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout;
  
  /* 軽量化されたトランジション */
  transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  
  &:hover {
    background-color: var(--accent);
    color: var(--bg-primary);
    border-color: var(--accent);
    transform: translateY(-1px) translateZ(0);
  }
}

@media (max-width: 768px) {
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}
</style>
