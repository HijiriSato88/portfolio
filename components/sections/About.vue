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
            width="250"
            height="250"
            sizes="xs:200px sm:250px"
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
.profile-image {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 250px;
  height: auto;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

@media (max-width: 767px) {
  .profile-image {
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .profile-image {
    max-width: 180px;
  }
}
</style>

