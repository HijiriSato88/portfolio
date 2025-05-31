<template>
  <section id="about" class="about-section">
    <div class="page-container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-image">
          <NuxtImg 
            src="/images/icon.png" 
            alt="Hijiri Sato Profile Picture" 
            class="profile-image"
            width="250"
            height="250"
            sizes="xs:200px sm:250px"
            loading="lazy"
            format="webp"
          />
        </div>
        <div class="about-text">
          <p>
            I'm a passionate developer with a keen eye for design and a commitment to 
            creating intuitive, user-friendly experiences. With a background in both 
            design and development, I bring a unique perspective to every project.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving, 
            allowing me to build solutions that are not only functional but also 
            aesthetically pleasing and enjoyable to use.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or seeking inspiration in art and nature.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aboutセクションのロジックをここに追加可能
</script>

<style scoped>
.profile-image {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
</style>

