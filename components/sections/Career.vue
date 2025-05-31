<template>
  <section id="career" class="career-section">
    <div class="page-container">
      <h2 class="section-title">Career</h2>
      <div class="timeline">
        <div v-for="job in careerHistory" :key="job.id" class="timeline-item">
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

<script setup>
const careerHistory = [
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
]

</script>

<style scoped>
/* Career固有のスタイルがあればここに追加 */
</style>
