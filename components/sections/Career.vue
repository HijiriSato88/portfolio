<template>
  <section id="career" class="career-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        Experience
      </h2>
      <div class="timeline">
        <div 
          v-for="(job, index) in careerHistory" 
          :key="job.id" 
          class="timeline-item"
          v-motion
          v-bind="alternateSlideAnimation(index)"
        >
          <div class="timeline-date">{{ job.period }}</div>
          <div class="timeline-content">
            <h3>{{ job.title }}</h3>
            <p class="company">{{ job.company }}</p>
            <p class="description">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnimations } from '~/composables/useAnimations'

const { sectionTitleAnimation, alternateSlideAnimation } = useAnimations()

interface CareerItem {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
}

const careerHistory: CareerItem[] = [
  {
    id: 1,
    period: '2022 -',
    title: 'student',
    company: '東京電機大学',
    description: `スマートICTソリューション研究室所属`
  },
  {
    id: 2,
    period: '2024 / 08 - 2024 / 09 (2weeks)',
    title: 'internship',
    company: 'アスクル株式会社',
    description: `ASKULにおけるバックエンド開発業務を経験`
  },
  {
    id: 3,
    period: '2024 / 10 - 2024 / 12 (2months)',
    title: 'internship',
    company: '株式会社ヴァル研究所',
    description: `『駅すぱあと』搭載用の運賃データ・ダイヤデータ作成、妥当性チェックツールの開発`
  },
  {
    id: 4,
    period: '2025 / 01 -',
    title: 'internship',
    company: '株式会社ラブグラフ',
    description: `運用システムの新機能開発および既存機能の改修`
  },
  {
    id: 5,
    period: '2025 / 02 - 2025 / 03 (2months)',
    title: 'internship',
    company: '株式会社サイバーエージェント',
    description: `Go College. Goの基本文法から実践的なバックエンド開発までを体系的に学習`
  },
  {
    id: 6,
    period: '2025 / 09 (3days)',
    title: 'internship',
    company: '株式会社サイバーエージェント',
    description: `Universe. メディア事業のテーマに沿ったチーム開発. 最優秀賞受賞`
  },
    {
    id: 7,
    period: '2025 / 08 - 2025 / 10 (2months)',
    title: 'internship',
    company: 'LINEヤフー株式会社',
    description: `LINEスキマニのサーバーサイド開発`
  },
]
</script>
