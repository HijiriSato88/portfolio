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
          v-bind="slideUpAnimation(100 + (index * 100))"
        >
          <div class="flex justify-center mb-3">
            <h3 class="text-xl font-bold text-center">{{ category.title }}</h3>
          </div>
          <ul class="space-y-2">
            <li v-for="item in category.items" :key="item.name" class="skill-item">
              <Icon :icon="item.icon" class="skill-icon" />
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
.skill-category {
  /* GPUアクセラレーションを有効化 */
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease;
  /* パフォーマンス最適化 */
  contain: layout;
}

.skill-item:hover {
  background-color: var(--bg-secondary);
  border-radius: 4px;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  /* アイコンの最適化 */
  will-change: auto;
}
</style>
