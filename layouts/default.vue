<template>
  <div>
    <header class="site-header">
      <div class="page-container">
        <nav class="site-nav">
          <a href="/" class="nav-logo">hijiri.dev</a>
          <div class="nav-links">
            <a href="/">Home</a>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="page-container">
        &copy; {{ new Date().getFullYear() }} hijiri.dev - All rights reserved
      </div>
    </footer>
  </div>
</template> 