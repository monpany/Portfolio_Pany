<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

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
    <div class="text-lime-500">
      <h6>Portfolio</h6>
    </div>
    <ul class="flex flex-row space-x-4 text-base sm:text-lg font-medium items-center mx-8">
      <li class="relative">
        <router-link to="/" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Home</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] bg-lime-500 w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/about" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">About</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] bg-lime-500 w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/projects" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Projects</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] bg-lime-500 w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <router-link to="/contact" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Contact</router-link>
        <span class="underline absolute bottom-0 left-0 h-[3px] bg-lime-500 w-full scale-x-0 origin-left"></span>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style scoped>
.underline {
  transition: none;
}
</style>