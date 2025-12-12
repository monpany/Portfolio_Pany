<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import AboutPage from './Views/AboutPage.vue'
import Technology from './Views/event.vue'
import LanguageSkills from './Views/LanguageSkills.vue'
import HomePage from './Views/HomePage.vue'
import ContactPage from './Views/ContactPage.vue'
import PortfolioProjects from './Views/ProjectPage.vue'
import ProjectPage from './Views/ProjectPage.vue'
import event from './Views/event.vue'
import WebDevPortfolio from './Views/WebDevPortfolio.vue'
import Footer from './Views/footer.vue'


// GSAP hover underline animations
const handleMouseEnter = (event) => {
  const underline = event.target.nextElementSibling
  gsap.to(underline, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
}

const handleMouseLeave = (event) => {
  const underline = event.target.nextElementSibling
  gsap.to(underline, { scaleX: 0, duration: 0.3, ease: 'power2.in' })
}

onMounted(() => {})
onUnmounted(() => {
  gsap.killTweensOf('.underline')
})
</script>

<template>
  <!-- Navbar -->
  <nav class="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md p-4 flex items-center justify-between z-50">
    <div class="portfolio-title">
      <h6>Portfolio</h6>
    </div>
    <ul class="flex flex-row space-x-4 text-base sm:text-lg font-medium items-center mx-8">
      <li class="relative">
        <a href="#home" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Home</a>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <a href="#webdevportfolio" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">About</a>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <a href="#projects" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Projects</a>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
      <li class="relative">
        <a href="#contact" class="text-xs sm:text-base" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">Contact</a>
        <span class="underline absolute bottom-0 left-0 h-[3px] custom-lime w-full scale-x-0 origin-left"></span>
      </li>
    </ul>
  </nav>

  <!-- Sections -->
  <section id="home" class="flex items-center justify-center bg-gray-200 -mt-30 sm:-mt-30 md:-mt-20 lg:-mt-20 xl:-mt-20 2xl:mt-0">
    <h1 class="text-4xl font-bold mt-40">
      <HomePage />
    </h1>
  </section>

  <section id = "webdevportfolio">
    <WebDevPortfolio />
  </section>

  <section id="about" class="flex items-center justify-center bg-gray-300">
    <AboutPage />
    
  </section>
  <section>
    <event />
  </section>

  <section id="projects" class="flex flex-col md:flex-row items-start justify-center bg-gray-300 p-4">
    <div class="flex-1 p-4">
      <ProjectPage />
    </div>
  </section>

  <section id="contact" class="flex items-center justify-center bg-gray-300">
    <!-- <ContactPage /> -->
  </section>
   
  <Footer />
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

html {
  scroll-behavior: smooth;
}
</style>