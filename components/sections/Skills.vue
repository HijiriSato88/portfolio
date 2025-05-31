<template>
  <section id="skills" class="skills-section">
    <div class="page-container">
      <h2 
        class="section-title"
        v-motion
        v-bind="sectionTitleAnimation"
      >
        Skills
      </h2>
      <div class="skills-grid grid md:grid-cols-3 gap-8">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.title" 
          class="skill-category"
          v-motion
          v-bind="slideUpAnimation(200 + (index * 150))"
        >
          <div class="flex justify-center mb-3">
            <h3 class="text-xl font-bold text-center">{{ category.title }}</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="item in category.items" :key="item.name" class="flex items-center gap-3 py-2 border-b border-gray-200">
              <Icon :icon="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAnimations } from '~/composables/useAnimations'

// アニメーション設定を取得
const { sectionTitleAnimation, slideUpAnimation } = useAnimations()

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Ruby', icon: 'simple-icons:ruby' },
      { name: 'Kotlin', icon: 'simple-icons:kotlin' },
      { name: 'Go', icon: 'simple-icons:go' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' }
    ]
  },
  {
    title: 'Frameworks / Libraries',
    items: [
      { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
      { name: 'Spring Boot', icon: 'simple-icons:springboot' },
      { name: 'Unity', icon: 'simple-icons:unity' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' }
    ]
  },
  {
    title: 'Database / Tools',
    items: [
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'Firebase', icon: 'simple-icons:firebase' },
      { name: 'Docker', icon: 'simple-icons:docker' }
    ]
  }
]
</script>

<style scoped>
/* Skills固有のスタイルは styles.scss で管理 */
</style>
