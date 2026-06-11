<template>
  <section id="stack">
    <p class="log-label rv"><span class="method">ls</span> -l stack/</p>
    <h2 class="sec-title rv"><span class="ghost">TECH</span> STACK</h2>
    <div class="stack-list">
      <div v-for="(item, i) in stack" :key="item.name" class="stack-row rv">
        <span class="idx">SYS.{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
    <p class="back-line rv">
      <a @click.prevent="$emit('navigate', '')" href="/">$ cd ~ <span class="dim">— back to top</span></a>
    </p>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()

const stack = [
  { name: 'Go' },
  { name: 'Ruby' },
  { name: 'Kotlin' },
  { name: 'MySQL' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'AWS' },
  { name: 'Claude' },
]
</script>

<style scoped lang="scss">
.stack-list {
  border-top: 1px solid var(--slate);
}

.stack-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: center;
  gap: 24px;
  padding: 26px 0;
  border-bottom: 1px solid var(--slate);
  position: relative;
  overflow: hidden;

  .idx {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bone-dim);
  }

  .name {
    font-family: var(--disp);
    font-size: clamp(30px, 5vw, 64px);
    text-transform: uppercase;
    line-height: 1;
    color: var(--bone);
    transition: transform 0.5s var(--ease), color 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--phos-dim);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s var(--ease);
    z-index: -1;
  }

  &:hover::after { transform: scaleY(1); }
  &:hover .name { transform: translateX(18px); color: var(--phos); }

  @media (max-width: 680px) {
    grid-template-columns: 50px 1fr;
  }
}
</style>
