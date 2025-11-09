<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br -mt-14">
    <!-- Smooth, Big Card -->
    <div
      class="w-full max-w-5xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white rounded-3xl shadow-2xl p-10 transform "
    >

      <!-- Journey Section -->
      <div class="bg-gray-800/70 p-8 rounded-2xl shadow-inner backdrop-blur-sm hover:bg-gray-800/90 transition duration-500">
        <h2 class="text-2xl font-semibold mb-4 text-white">My Web Development Journey</h2>
        <p class="text-gray-300 text-base leading-relaxed">
          During my studies, I’ve developed a strong foundation across a wide range of web development technologies.
          I’ve mastered HTML and CSS for responsive layouts, expanded into Sass for efficient styling, and embraced
          JavaScript for dynamic behavior. My backend skills include PHP and Laravel, with MySQL for database management.
          I’ve explored Vue.js for reactive interfaces and used Node.js for server-side scripting. Python adds versatility
          to my toolkit. Each technology helps me build polished, functional, and visually engaging web applications.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WebDevIntroCard'
}
</script>

<style scoped>
/* Smooth 3D hover effect for entire card */
</style>
