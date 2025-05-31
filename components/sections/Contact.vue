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
    color: #111111;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e5e5e5;
    transform: translateY(-2px);
  }
  
  .contact-icon {
    font-size: 1.5rem;
    color: #000000;
  }
  
  span, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #2d2d2d;
    text-decoration: none;
    
    &:hover {
      color: #000000;
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
  color: #2d2d2d;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid #d4d4d4;
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
    background-color: #000000;
    color: #ffffff;
    border-color: #000000;
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
