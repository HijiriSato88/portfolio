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
          
          <div class="contact-items">
            <div 
              class="contact-item"
              v-motion
              v-bind="slideUpAnimation(250)"
            >
              <Icon icon="material-symbols:mail" class="contact-icon" />
              <a href="mailto:satohiji0808@outlook.com" class="email-address">
                satohiji0808@outlook.com
              </a>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAnimations } from '~/composables/useAnimations'

const { sectionTitleAnimation, slideFromSideAnimation, slideUpAnimation } = useAnimations()
</script>

<style scoped>
.contact-section {
  padding: 5rem 2rem 2.5rem;

  @media (min-width: 768px) {
    padding: 7rem 4rem 3rem;
  }
}

.contact-content-center {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-info {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  background-color: var(--surface-card);
  border-radius: 18px;
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(8px);
  box-shadow: 0 18px 36px rgba(17, 17, 17, 0.1);

  will-change: transform, background-color;
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout;

  transition: transform 0.25s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.85rem;
    gap: 0.75rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 375px) {
    padding: 0.6rem;
    margin: 0 0.5rem;
  }
  
  &:hover {
    background-color: var(--accent);
    border-color: transparent;
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 16px 32px rgba(182, 138, 90, 0.25);
  }
  
  .contact-icon {
    font-size: 1.5rem;
    color: var(--accent);
    transition: color 0.2s ease;
    will-change: auto;
    flex-shrink: 0;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  
  &:hover .contact-icon {
    color: #fdfbf7;
  }
  
  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;

    word-break: break-all;
    overflow-wrap: break-word;
    hyphens: auto;

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    @media (max-width: 375px) {
      font-size: 0.85rem;
    }
    
    &:hover {
      color: var(--accent);
    }

    &.email-address {
      word-break: break-all;
      overflow-wrap: anywhere;
      white-space: normal;
      max-width: 100%;

      @media (max-width: 480px) {
        font-size: 0.85rem;
        line-height: 1.3;
        max-width: 250px;
        margin: 0 auto;
      }

      @media (max-width: 375px) {
        font-size: 0.8rem;
        max-width: 220px;
      }

      @media (max-width: 320px) {
        font-size: 0.75rem;
        max-width: 200px;
      }
    }
  }
}

.contact-item:hover a {
  color: #fdfbf7;
}
</style>
