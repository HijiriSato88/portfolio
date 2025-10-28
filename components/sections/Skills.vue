<template>
  <section id="skills" class="skills-section">
    <div class="page-container">
      <h2 
        class="section-title"
      >
        Tech Stack
      </h2>
      <div class="skill-list">
        <span
          v-for="skill in skills"
          :key="skill"
          class="skill-chip"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Ruby',
  'Kotlin',
  'Golang',
  'MySQL',
  'Docker',
  'Google Cloud'
]
</script>
