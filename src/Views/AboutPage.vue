<style scoped>
@keyframes scrollLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* You can keep this if you want auto-scroll for desktop only */
.carousel-track {
  animation: scrollLoop 25s linear infinite;
}

/* Optional scrollbar styling */
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 4px;
}
</style>

<template>
  <div class="min-h-screen to-indigo-50 px-4 py-12 sm:px-6 space-y-12 max-w-6xl mx-auto">
    
    <!-- Technologies Section -->
    <section>
      <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">💻 Technologies I Use</h2>
      
      <!-- Use grid for small screen -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        <div
          v-for="(tech, index) in technologies"
          :key="index"
          class="flex-shrink-0 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-3 sm:p-4 border border-gray-300 hover:scale-105 transition-transform duration-300"
        >
          <img
            :src="tech.img"
            :alt="tech.name"
            class="w-10 sm:w-12 md:w-12 lg:w-14 h-10 sm:h-12 md:h-12 lg:h-14 mb-1 sm:mb-2 object-contain"
          />
          <span class="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-gray-700">{{ tech.name }}</span>
        </div>
      </div>
    </section>

    <!-- About Me -->
    <section class="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">👋 About Me</h2>
      <p class="text-gray-600 leading-relaxed text-center text-sm sm:text-base md:text-lg">
        I'm <strong class="text-gray-900">pany</strong>, a developer who thrives on crafting interactive, responsive, and visually polished web experiences. I love turning ideas into delightful interfaces using Vue.js, Tailwind CSS, and GSAP. Whether it's debugging animations, refining UI details, or building dashboards that bounce and glow — I’m all in. Every pixel matters, and every interaction should feel alive.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: "PanyProfile",
  data() {
    return {
      technologies: [
        { name: "HTML", img: "src/assets/image/Image/html.png" },
        { name: "CSS", img: "src/assets/image/Image/css.png" },
        { name: "Postman", img: "src/assets/image/Image/postman.png" },
        { name: "JavaScript", img: "src/assets/image/Image/javascript.png" },
        { name: "Figma", img: "src/assets/image/Image/figma.png" },
        { name: "Vue.js", img: "src/assets/image/Image/vue.png" },
        { name: "Laravel", img: "src/assets/image/Image/laravel.png" },
        { name: "Tailwind CSS", img: "src/assets/image/Image/tailwindcss.png" },
        { name: "MySQL", img: "src/assets/image/Image/mysql.png" },
        { name: "ChatGPT", img: "src/assets/image/Image/chatgpt.png" },
        { name: "Node.js", img: "src/assets/image/Image/node.png" },
        { name: "TypeScript", img: "src/assets/image/Image/typescript.png" },
        { name: "GSAP", img: "src/assets/image/Image/gsap.png" },
        { name: "Python", img: "src/assets/image/Image/python.png" },
        { name: "OOP", img: "src/assets/image/Image/oop.png" }
      ]
    };
  }
};
</script>
