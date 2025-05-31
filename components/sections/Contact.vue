<template>
  <section id="contact" class="contact-section">
    <div class="page-container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
          <div class="contact-item">
            <span class="contact-icon">✉</span>
            <span>your.email@example.com</span>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send a Message</h3>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Name</label>
              <input v-model="form.name" type="text" placeholder="Your name">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="form.email" type="email" placeholder="Your email">
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="Your message" rows="5"></textarea>
            </div>
            <button type="submit" class="button primary full-width">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = (): void => {
  // フォーム送信処理をここに追加
  console.log('Form submitted:', form.value)
  // 実際のアプリケーションでは、ここでAPIに送信したりします
}
</script>

<style scoped>
/* Contact固有のスタイルがあればここに追加 */
</style>
