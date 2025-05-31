<template>
  <section id="about" class="about-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        About Me
      </h2>
      <div class="about-content">
        <div 
          class="about-image"
          v-motion
          v-bind="slideFromSideAnimation('left', 300)"
        >
          <NuxtImg 
            src="/images/icon.png" 
            alt="Hijiri Sato Profile Picture" 
            class="profile-image"
            sizes="(max-width: 480px) 180px, (max-width: 767px) 200px, 250px"
            loading="lazy"
            format="webp"
          />
        </div>
        <div 
          class="about-text"
          v-motion
          v-bind="slideFromSideAnimation('right', 600)"
        >
          <p>
            川越在住の大学生エンジニア<br>
            普段は大学生活を送りながら、インターンバイトで開発経験を積んでいます
          </p>
          <p>
            趣味はテニスとプログラミング
          </p>
          <p>
            最近は、どこにいてもオープンキャンパスに参加できるようなシステムを作っており、  
            教育の機会をより多くの人に届けることを目指しています
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnimations } from '~/composables/useAnimations'

// アニメーション設定を取得
const { sectionTitleAnimation, slideFromSideAnimation } = useAnimations()
</script>

<style scoped>
:root {
  --profile-image-size-desktop: 250px;
  --profile-image-size-tablet: 200px;
  --profile-image-size-mobile: 180px;
  --profile-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --profile-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.profile-image {
  /* レイアウト */
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: var(--profile-image-size-desktop);
  height: auto;
  margin: 0 auto;
  display: block;
  
  /* 外観 */
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--profile-shadow);
  
  /* アニメーション */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: var(--profile-shadow-hover);
}

@media (max-width: 767px) {
  .profile-image {
    max-width: var(--profile-image-size-tablet);
  }
}

@media (max-width: 480px) {
  .profile-image {
    max-width: var(--profile-image-size-mobile);
  }
}
</style>

