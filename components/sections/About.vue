<template>
  <section id="about" class="about-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        About
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
            sizes="(max-width: 480px) 140px, (max-width: 767px) 160px, 200px"
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
            佐藤 聖璃 / Hijiri Sato
          </p>
          <p>
            川越在住の大学生エンジニア<br>
            普段は大学生活を送りながら、インターンバイトで開発経験を積んでいます
          </p>
          <p>
            趣味はテニスとプログラミング
          </p>
          <p>
            どこにいてもオープンキャンパスに参加できるようなシステムを作っており、  
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
.profile-image {
  /* レイアウト */
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 0 auto;
  display: block;
  
  /* 外観 */
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(25, 26, 26, 0.18);
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 24px 48px rgba(17, 17, 17, 0.16);
  
  /* アニメーション */
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.03);
  border-color: rgba(182, 138, 90, 0.35);
  box-shadow: 0 28px 56px rgba(17, 17, 17, 0.22);
}

@media (max-width: 767px) {
  .profile-image {
    max-width: 160px;
  }
}

@media (max-width: 480px) {
  .profile-image {
    max-width: 140px;
  }
}
</style>
