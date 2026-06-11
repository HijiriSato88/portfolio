<template>
  <section id="writing">
    <p class="log-label rv"><span class="method">cat</span> writing/*.md</p>
    <h2 class="sec-title rv">WRIT<span class="ghost">ING</span></h2>

    <div class="writing-list">
      <a
        v-for="post in posts"
        :key="post.url"
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="wr-item rv"
      >
        <span class="date">{{ post.date }}</span>
        <span class="title">{{ post.title }}</span>
        <span class="source">{{ post.source }} <span class="arrow">↗</span></span>
      </a>
    </div>

    <a
      href="https://zenn.dev/hijiri_88"
      target="_blank"
      rel="noopener noreferrer"
      class="writing-more rv"
    >
      More on Zenn ↗
    </a>

    <p class="back-line rv">
      <a @click.prevent="$emit('navigate', '')" href="/">$ cd ~ <span class="dim">— back to top</span></a>
    </p>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()

const posts = [
  {
    date: '2026.06',
    title: 'ABEMAの多層キャッシュ機構をリアーキテクチャした話',
    source: 'CyberAgent Developers Blog',
    url: 'https://developers.cyberagent.co.jp/blog/archives/64293/',
  },
  {
    date: '2025.10',
    title: 'Kafka×Decatonで80並列化した通知基盤（インターンレポート）',
    source: 'LINEヤフー Tech Blog',
    url: 'https://techblog.lycorp.co.jp/ja/20251028b',
  },
]
</script>

<style scoped lang="scss">
.writing-list {
  border-top: 1px solid var(--slate);
}

.writing-more {
  display: inline-block;
  margin-top: 3vh;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--bone-dim);
  border-bottom: 1px solid var(--slate);
  padding-bottom: 3px;
  transition: color 0.3s, border-color 0.3s;

  &:hover {
    color: var(--phos);
    border-color: var(--phos);
  }
}

.wr-item {
  display: grid;
  grid-template-columns: 130px 1fr auto;
  gap: 28px;
  align-items: baseline;
  padding: 34px 0;
  border-bottom: 1px solid var(--slate);
  position: relative;

  .date {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bone-dim);
  }

  .title {
    font-family: var(--jp);
    font-weight: 700;
    font-size: clamp(17px, 2.2vw, 24px);
    letter-spacing: 0.04em;
    line-height: 1.5;
    transition: color 0.4s, transform 0.5s var(--ease);
  }

  .source {
    font-family: var(--mono);
    font-size: 10.5px;
    letter-spacing: 0.08em;
    color: var(--bone-dim);
    white-space: nowrap;
    transition: color 0.4s;

    .arrow {
      display: inline-block;
      margin-left: 4px;
      transition: transform 0.4s var(--ease);
    }
  }

  &:hover .title { color: var(--phos); transform: translateX(14px); }
  &:hover .source { color: var(--phos); }
  &:hover .arrow { transform: translate(3px, -3px); }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 10px;

    .source { white-space: normal; }
  }
}
</style>
