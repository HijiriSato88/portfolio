<template>
  <section id="about">
    <p class="log-label rv"><span class="method">cat</span> about/README.md</p>
    <h2 class="sec-title rv">WHO <span class="ghost">AM I</span></h2>
    <div class="about-body rv">
      <p><strong>佐藤 聖璃 / Hijiri Sato </strong>東京電機大学 スマートICTソリューション研究室に所属しています。バックエンドを中心に、いくつかの企業でインターンとして開発に関わってきました。</p>
      <p>小学生の頃からテニスを続けてきました。高校は仙台育英学園で硬式テニス部に所属し、全国選抜やインターハイにも出場。学生時代の多くを、部活に打ち込んできました。</p>
      <div class="about-links">
        <a href="https://github.com/HijiriSato88" target="_blank" rel="noopener noreferrer">GitHub <span class="arrow">↗</span></a>
        <a href="https://x.com/dxeynzdxiy8" target="_blank" rel="noopener noreferrer">X <span class="arrow">↗</span></a>
      </div>
      <p class="back-line">
        <a @click.prevent="$emit('navigate', '')" href="/">$ cd ~ <span class="dim">— back to top</span></a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()
</script>

<style scoped lang="scss">
.about-body {
  p {
    color: var(--bone-dim);
    margin-bottom: 1.6em;
    max-width: 46em;

    strong { color: var(--bone); font-weight: 500; }
  }
}

.about-links {
  display: flex;
  gap: 28px;
  margin-top: 2.5em;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;

  a {
    color: var(--bone-dim);
    border-bottom: 1px solid var(--slate);
    padding-bottom: 3px;
    transition: color 0.3s, border-color 0.3s;

    .arrow {
      display: inline-block;
      transition: transform 0.3s var(--ease);
    }

    &:hover {
      color: var(--phos);
      border-color: var(--phos);

      .arrow { transform: translate(2px, -2px); }
    }
  }
}
</style>
