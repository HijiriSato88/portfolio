<template>
  <div>
    <header class="site-header">
      <div class="page-container">
        <nav class="site-nav">
          <a href="/" class="nav-logo">Portfolio</a>
          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
            <button class="theme-toggle">☀</button>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="page-container">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} hijiri. All rights reserved.</p>
          <button class="scroll-to-top">↑</button>
        </div>
      </div>
    </footer>
  </div>
</template> 