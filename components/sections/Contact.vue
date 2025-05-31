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
          v-bind="slideFromSideAnimation('left', 300)"
        >
          <h3>Get in Touch</h3>
          
          <div class="contact-items">
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(400)"
            >
              <Icon icon="material-symbols:mail" class="contact-icon" />
              <span>satohiji0808@outlook.com</span>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(500)"
            >
              <Icon icon="simple-icons:github" class="contact-icon" />
              <a href="https://github.com/HijiriSato88" target="_blank" rel="noopener noreferrer">
                @HijiriSato88
              </a>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(600)"
            >
              <Icon icon="simple-icons:x" class="contact-icon" />
              <a href="https://x.com/dxeynzdxiy8" target="_blank" rel="noopener noreferrer">
                @dxeynzdxiy8
              </a>
            </div>
            
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(700)"
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
            v-bind="slideFromSideAnimation('bottom', 800)"
          >
            <a href="https://github.com/HijiriSato88" target="_blank" rel="noopener noreferrer" class="social-link">
              <Icon icon="simple-icons:github" class="w-5 h-5" />
              GitHub
            </a>
            <a href="https://x.com/dxeynzdxiy8" target="_blank" rel="noopener noreferrer" class="social-link">
              <Icon icon="simple-icons:x" class="w-5 h-5" />
              X
            </a>
            <a href="https://zenn.dev/hijiri_88" target="_blank" rel="noopener noreferrer" class="social-link">
              <Icon icon="simple-icons:zenn" class="w-5 h-5" />
              Zenn
            </a>
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
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--gray-900, #111111);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  
  p {
    color: var(--gray-700, #2d2d2d);
    margin-bottom: 3rem;
    line-height: 1.7;
    font-size: 1.1rem;
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
  background-color: var(--gray-100, #f5f5f5);
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--gray-200, #e5e5e5);
    transform: translateY(-2px);
  }
  
  .contact-icon {
    font-size: 1.5rem;
    color: var(--black, #000000);
  }
  
  span, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--gray-700, #2d2d2d);
    text-decoration: none;
    
    &:hover {
      color: var(--black, #000000);
    }
  }
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  color: var(--gray-700, #2d2d2d);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--gray-300, #d4d4d4);
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  &:hover {
    background-color: var(--black, #000000);
    color: var(--white, #ffffff);
    border-color: var(--black, #000000);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
