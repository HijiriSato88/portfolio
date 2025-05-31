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
    period: '2021 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Company Inc.',
    description: 'Leading the frontend development team, implementing new features, and improving performance across the platform. Mentoring junior developers and contributing to the company\'s design system.'
  },
  {
    id: 2,
    period: '2018 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products on time and within budget.'
  },
  {
    id: 3,
    period: '2016 - 2018',
    title: 'Junior Web Developer',
    company: 'Startup Studio',
    description: 'Assisted in the development of web applications, fixed bugs, and implemented new features. Gained experience in modern web development practices and tools.'
  }
]
</script>

<style scoped>
/* Career固有のスタイルがあればここに追加 */
</style>
