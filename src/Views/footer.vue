<!-- Footer.vue -->
<template>
  <footer class="py-8 px-4 bg-gray-900 text-gray-300 border-t border-gray-700">
    <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">

      <!-- Contact Info -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-cyan-400">Get in Touch</h3>
        
        <!-- Phone -->
        <div class="flex items-center justify-center gap-3">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+85581767202" class="hover:text-cyan-400 transition-colors">+855 81 767 202</a>
        </div>
        
        <!-- Email -->
        <div class="flex items-center justify-center gap-3">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:panyisme35@gmail.com" class="hover:text-cyan-400 transition-colors">panyisme35@gmail.com</a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="flex space-x-8">
        <!-- Facebook -->
        <a href="https://www.facebook.com/share/17gs1LPKyg/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.076c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H13.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        
        <!-- GitHub -->
        <a href="https://github.com/monpany" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Mon Pany. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// No script needed — pure presentation
</script>

<style scoped>
/* Optional: Add hover scale for icons */
a svg {
  transition: transform 0.3s ease, color 0.3s ease;
}
a:hover svg {
  transform: scale(1.1);
}
</style>