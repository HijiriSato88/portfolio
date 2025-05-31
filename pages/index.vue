<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Hello, I'm <span class="hero-name">hijiri</span>
        </h1>
        <p class="hero-description">
          A passionate developer focused on creating clean, user-friendly experiences
        </p>
      </div>
      <div class="scroll-indicator">
        ↓
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="about-section">
      <div class="page-container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-image">
            <div class="profile-placeholder">Profile Image</div>
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

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <div class="page-container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend Development</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Design</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Responsive Design</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>Git</li>
              <li>GitHub Actions</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Vercel</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Other</h3>
            <ul>
              <li>TypeScript</li>
              <li>GraphQL</li>
              <li>Testing</li>
              <li>SEO</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Section -->
    <section id="career" class="career-section">
      <div class="page-container">
        <h2 class="section-title">Career</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2021 - Present</div>
            <div class="timeline-content">
              <h3>Senior Frontend Developer</h3>
              <p class="company">Tech Company Inc.</p>
              <p class="description">
                Leading the frontend development team, implementing new features, and improving 
                performance across the platform. Mentoring junior developers and contributing 
                to the company's design system.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2018 - 2021</div>
            <div class="timeline-content">
              <h3>Frontend Developer</h3>
              <p class="company">Digital Agency Co.</p>
              <p class="description">
                Developed responsive websites and web applications for various clients. 
                Collaborated with designers and backend developers to deliver high-quality 
                products on time and within budget.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2016 - 2018</div>
            <div class="timeline-content">
              <h3>Junior Web Developer</h3>
              <p class="company">Startup Studio</p>
              <p class="description">
                Assisted in the development of web applications, fixed bugs, and implemented 
                new features. Gained experience in modern web development practices and tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
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
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your email">
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Your message" rows="5"></textarea>
              </div>
              <button type="submit" class="button primary full-width">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 