<template>
  <section id="archive">
    <p class="log-label rv"><span class="method">ls</span> -l archive/</p>
    <h2 class="sec-title rv">ARCHIVE </h2>

    <div v-for="item in archive" :key="item.no" class="arc-item rv">
      <span class="yr">{{ item.year }}</span>
      <span class="org">{{ item.org }}</span>
      <span class="tag" :class="{ award: item.award }">{{ item.tag }}</span>
      <p class="desc">{{ item.desc }}</p>
    </div>

    <p class="back-line rv">
      <a @click.prevent="$emit('navigate', '')" href="/">$ cd ~ <span class="dim">— back to top</span></a>
    </p>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()

const archive = [
  {
    no: 8, year: '2026.04',
    org: '株式会社サイバーエージェント — CA Tech JOB',
    tag: 'Internship', award: false,
    desc: '株式会社AbemaTV GrowthBackend team',
  },
  {
    no: 7, year: '2025.08 — 10',
    org: 'LINEヤフー株式会社',
    tag: 'Internship', award: false,
    desc: '「LINEスキマニ」のサーバーサイド開発。',
  },
  {
    no: 6, year: '2025.09',
    org: '株式会社サイバーエージェント — Universe',
    tag: '★ Best Award', award: true,
    desc: 'メディア事業のテーマに沿った短期集中のチーム開発。3日間のハッカソン形式で最優秀賞を受賞。',
  },
  {
    no: 5, year: '2025.02 — 03',
    org: '株式会社サイバーエージェント — Go College',
    tag: 'Internship', award: false,
    desc: 'Goの基本文法から実践的なバックエンド開発までを体系的に学習。',
  },
  {
    no: 4, year: '2025.01 — now',
    org: '株式会社ラブグラフ',
    tag: 'Internship', award: false,
    desc: '運用システムの新機能開発と既存機能の改修。',
  },
  {
    no: 3, year: '2024.10 — 12',
    org: '株式会社ヴァル研究所',
    tag: 'Internship', award: false,
    desc: '『駅すぱあと』搭載用の運賃データ・ダイヤデータ作成、および妥当性チェックツールの開発。',
  },
  {
    no: 2, year: '2024.08 — 09',
    org: 'アスクル株式会社',
    tag: 'Internship', award: false,
    desc: 'ASKULにおけるバックエンド開発業務。',
  },
  {
    no: 1, year: '2022 — now',
    org: '東京電機大学',
    tag: 'Student', award: false,
    desc: 'スマートICTソリューション研究室所属。',
  },
]
</script>

<style scoped lang="scss">
.arc-item {
  display: grid;
  grid-template-columns: 130px 1fr auto;
  gap: 28px;
  align-items: baseline;
  padding: 34px 0;
  border-bottom: 1px solid var(--slate);
  position: relative;
  cursor: default;

  &:first-of-type { border-top: 1px solid var(--slate); }

  .yr { font-family: var(--mono); font-size: 12px; color: var(--bone-dim); }

  .org {
    font-family: var(--jp);
    font-weight: 700;
    font-size: clamp(17px, 2.2vw, 24px);
    letter-spacing: 0.04em;
    transition: color 0.4s, transform 0.5s var(--ease);
  }

  .tag {
    font-family: var(--mono);
    font-size: 10.5px;
    letter-spacing: 0.1em;
    color: var(--bone-dim);
    text-transform: uppercase;
    border: 1px solid var(--slate);
    padding: 4px 12px;
    border-radius: 999px;
    white-space: nowrap;

    &.award { color: var(--phos); border-color: var(--phos); }
  }

  .desc {
    grid-column: 2 / 4;
    color: var(--bone-dim);
    font-size: 13.5px;
    line-height: 1.9;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.7s var(--ease), opacity 0.6s, margin 0.6s var(--ease);
  }

  &:hover .org { color: var(--phos); transform: translateX(14px); }
  &:hover .desc { max-height: 120px; opacity: 1; margin-top: 10px; }

  @media (max-width: 780px) {
    grid-template-columns: 1fr auto;
    gap: 14px;

    .yr { grid-column: 1; grid-row: 2; font-size: 11px; }
    .org { grid-column: 1; grid-row: 1; }
    .desc { grid-column: 1 / 3; max-height: none; opacity: 1; margin-top: 8px; }
  }
}
</style>
