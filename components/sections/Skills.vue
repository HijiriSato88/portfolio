<template>
  <section id="skills" class="skills-section">
    <div class="page-container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skillCategories" :key="skill.title" class="skill-category">
          <h3>{{ skill.title }}</h3>
          <ul>
            <li v-for="item in skill.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Frontend Development',
    items: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Nuxt.js', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
  },
  {
    title: 'Design',
    items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Accessibility']
  },
  {
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Vercel']
  },
  {
    title: 'Other',
    items: ['TypeScript', 'GraphQL', 'Testing', 'SEO', 'Performance Optimization']
  }
]
</script>

<style scoped>
/* Skills固有のスタイルがあればここに追加 */
</style>
