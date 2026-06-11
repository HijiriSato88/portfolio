<template>
  <section id="contact">
    <p class="log-label rv"><span class="method">cat</span> contact/*.txt</p>
    <a href="mailto:satohiji0808@outlook.com" class="rv" style="display:inline-block">
      <span class="contact-big">LET'S<br>TALK?</span>
    </a>
    <div class="contact-links rv">
      <a href="mailto:satohiji0808@outlook.com">Email</a>
    </div>
    <p class="back-line rv">
      <a @click.prevent="$emit('navigate', '')" href="/">$ cd ~ <span class="dim">— back to top</span></a>
    </p>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [page: string] }>()
</script>

<style scoped lang="scss">
.contact-big {
  font-family: var(--disp);
  text-transform: uppercase;
  font-size: clamp(52px, 12.5vw, 200px);
  line-height: 0.95;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--bone);
  display: inline-block;
  transition: color 0.5s var(--ease);

  a:hover & {
    color: var(--phos);
    -webkit-text-stroke-color: var(--phos);
  }
}

.contact-links {
  display: flex;
  gap: 36px;
  margin-top: 7vh;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.06em;

  a {
    position: relative;
    color: var(--bone-dim);
    transition: color 0.3s;
    padding: 4px 0;

    &::before { content: '[ '; color: var(--slate); }
    &::after { content: ' ]'; color: var(--slate); }
    &:hover { color: var(--phos); }
  }
}
</style>
