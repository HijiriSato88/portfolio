<template>
  <section id="skills" class="skills-section">
    <div class="page-container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skillCategories" :key="skill.title" class="skill-category">
          <div class="skill-header">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.title }}</h3>
          </div>
          <ul>
            <li v-for="item in skill.items" :key="item.name" class="skill-item">
              <span class="item-icon">{{ item.icon }}</span>
              <span class="item-name">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    items: [
      { name: 'Ruby', icon: '💎' },
      { name: 'Kotlin', icon: '🔶' },
      { name: 'Go', icon: '🐹' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '🔷' }
    ]
  },
  {
    title: 'Frameworks / Libraries',
    icon: '🏗️',
    items: [
      { name: 'Ruby on Rails', icon: '🚃' },
      { name: 'Spring Boot', icon: '🌱' },
      { name: 'Unity', icon: '🎮' },
      { name: 'React', icon: '⚛️' },
      { name: 'Nuxt', icon: '🎯' },
    ]
  },
  {
    title: 'Database / Tools',
    icon: '🛠️',
    items: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Docker', icon: '🐳' }
    ]
  }
]
</script>

<style scoped>
/* Skills固有のスタイルは styles.scss で管理 */
</style>
