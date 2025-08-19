<template>
  <section id="career" class="career-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        Career
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

// アニメーション設定を取得
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
    description: `スマートICTソリューション研究室に在籍し、
                  どこからでも参加できるオープンキャンパス向けWebシステムの開発に取り組んでいる。
                  また、課外活動として硬式庭球部にも所属し、文武両道を大切にしている。`
  },
  {
    id: 2,
    period: '2024 / 8 - 2024 / 9',
    title: 'engineer intern',
    company: 'アスクル株式会社',
    description: `国内最大級のBtoB向けECサイト『ASKUL／SOLOEL』におけるバックエンド開発業務を経験。
                  実務での開発体験を通じて、大規模サービスの仕組みを学んだ。`
  },
  {
    id: 3,
    period: '2024 / 10 - 2024 / 12',
    title: 'engineer intern',
    company: '株式会社ヴァル研究所',
    description: `『駅すぱあと』搭載用の運賃データ・ダイヤデータ作成や、
                  それらの妥当性チェックツールの開発・改修を担当。
                  正確性と効率性を意識したツール開発に注力した。`
  },
  {
    id: 4,
    period: '2025 / 1 -',
    title: 'engineer intern',
    company: '株式会社ラブグラフ',
    description: `運用システムの新機能開発および既存機能の改修を担当。
                  バックエンドを主軸に、フロントエンドのタスクも積極的に対応し、
                  フルスタックに近い立ち回りでプロダクト開発に貢献している。`
  },
  {
    id: 5,
    period: '2025 / 2 - 2025 / 3',
    title: 'engineer intern',
    company: '株式会社サイバーエージェント',
    description: `短期インターンである Go College に参加。
                  Goの基本文法から実践的なバックエンド開発までを体系的に学習。
                  発展課題としてクリーンアーキテクチャへのリファクタリング、Redisを用いたパフォーマンス改善、ミドルウェアを活用したログ収集を実装`
  },
]
</script>

