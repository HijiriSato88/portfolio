<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const title = 'HIJIRI SATO'
const description =
  '佐藤 聖璃 / Hijiri Sato のポートフォリオ'
const url = 'https://hijiri88.dev'
const image = `${url}/images/icon.png`

useHead({
  htmlAttrs: { lang: 'ja' },
  title,
  meta: [{ name: 'theme-color', content: '#0b0d10' }],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
})

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: url,
  ogSiteName: 'hijiri88.dev',
  ogImage: image,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
})
</script>
