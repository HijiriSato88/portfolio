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
              <span>satohiji0808@outlook.com</span>
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
  }
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
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
  }
  
  span, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--text-primary);
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
