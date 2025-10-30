<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br -mt-14">
    <!-- Smooth, Big Card -->
    <div
      class="w-full max-w-5xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white rounded-3xl shadow-2xl p-10 transform "
    >

      <!-- Header Section -->
      <!-- <div class="flex flex-col md:flex-row items-center justify-between mb-10 relative overflow-hidden"> -->
        <!-- Decorative background shapes -->
        <!-- <div class="absolute -top-8 -right-8 w-40 h-40 bg-gray-700 opacity-20 rounded-full blur-3xl"></div> -->

        <!-- Logo and Tagline -->
        <!-- <div class="flex items-center space-x-3 z-10">
          <div class="flex space-x-1">
            <div class="w-5 h-5 bg-white rounded-sm"></div>
            <div class="w-5 h-5 bg-gray-500 rounded-sm"></div>
            <div class="w-5 h-5 bg-gray-700 rounded-sm"></div>
          </div>
          <div class="ml-3">
            <h1 class="text-2xl font-semibold tracking-wider">BLOCK</h1>
            <p class="text-sm text-gray-400 uppercase">Tagline Here</p>
          </div>
        </div> -->

        <!-- Name + Role -->
        <!-- <div class="text-right mt-8 md:mt-0 z-10">
          <h2 class="text-3xl font-bold tracking-widest">JOHN SMITH</h2>
          <p class="text-base text-gray-400">GENERAL MANAGER</p>
        </div>
      </div> -->

      <!-- Contact Info -->
      <!-- <div class="grid md:grid-cols-2 gap-6 border-t border-gray-700 pt-6">
        <div class="space-y-2 text-gray-300">
          <p><span class="font-semibold text-white">Phone:</span> +0011 001 1234</p>
          <p><span class="font-semibold text-white">Email:</span> johnsmith@fir.com</p>
          <p><span class="font-semibold text-white">Address:</span> One St. CA, 1234</p>
        </div>
        <div class="flex justify-end items-end">
          <p class="text-sm text-gray-500 italic">Designed with ❤️ by Pany</p>
        </div>
      </div> -->

      <!-- Divider Line -->
      <!-- <div class="my-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div> -->

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
