<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import router from './router';
import AboutPage from './Views/AboutPage.vue';
import Technology from './Views/Technology.vue';
import LanguageSkills from './Views/LanguageSkills.vue';

// Function to handle mouse enter
const handleMouseEnter = (event) => {
  const underline = event.target.nextElementSibling;
  gsap.to(underline, {
    scaleX: 1,
    duration: 0.3,
    ease: 'power2.out',
  });
};

// Function to handle mouse leave
const handleMouseLeave = (event) => {
  const underline = event.target.nextElementSibling;
  gsap.to(underline, {
    scaleX: 0,
    duration: 0.3,
    ease: 'power2.in',
  });
};

onMounted(() => {
  // GSAP is now imported via npm, no additional checks needed
});

onUnmounted(() => {
  // Kill all GSAP animations to prevent memory leaks
  gsap.killTweensOf('.underline');
});
</script>

<template>
  <nav class="bg-gray-900 text-white shadow-md p-4 flex items-center justify-between">
    <div class="portfolio-title">
      <h6>Portfolio</h6>
    </div>
    <ul class="flex flex-row space-x-4 text-base sm:text-lg font-medium items-center mx-8">
      <li class="relative">
        <router-link to="/" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Home</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/about" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">About</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/projects" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Projects</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/contact" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Contact</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
    </ul>
  </nav>
  <router-view />
  <div class="flex flex-col md:flex-row  ">
    <div class="flex-1 p-4">
      <Technology />
    </div>
    <div class="flex-1 p-4">
      <LanguageSkills />
    </div>
  </div>
  <AboutPage />
</template>

<style scoped>
.portfolio-title {
  color: rgb(0, 230, 230);
}

.custom-lime {
  background-color: rgb(0, 230, 230);
}

.underline {
  transition: none;
}
</style>