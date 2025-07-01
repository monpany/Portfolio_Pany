<template>
  <div class="flex flex-col md:flex-row items-center max-w-5xl w-full gap-10 justify-around mx-auto px-4 py-8">
    <!-- Left Section -->
    <div class="text-center md:text-left max-w-xl">
      <h1 class="text-3xl sm:text-4xl font-bold text-black">
        Hi!, <span class="text-black">I am</span>
        <span class="stroke-text">Pany Mon</span>
      </h1>

      <h2 class="text-xl sm:text-2xl font-semibold mt-2 h-8">
        {{ currentText }}<span class="animate-pulse">|</span>
      </h2>

      <div class="w-36 border-b border-gray-300 my-3 mx-auto md:mx-0"></div>

      <p class="font-bold text-gray-700 text-base sm:text-lg leading-relaxed">
        Hi there! Thanks for visiting my portfolio. <br />
        Feel free to explore my background, skills, and what I’ve been working on.
      </p>

      <!-- Button -->
      <a href="your-cv.pdf" download aria-label="Download my CV">
        <button class="mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-full shadow">
          Download CV
        </button>
      </a>
    </div>

    <!-- Profile Image -->
    <div>
      <img src="../assets/image/image copy.png" alt="Pany Mon" class="w-72 h-72 rounded-full object-cover shadow-lg" />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const roles = ["Web Developer", "Frontend Engineer", "UI Designer", "Software Builder"];
const currentText = ref("");
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (typing) {
    currentText.value = currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      typing = false;
      setTimeout(typeRole, 1000);
    } else {
      setTimeout(typeRole, 100);
    }
  } else {
    currentText.value = currentRole.slice(0, --charIndex);
    if (charIndex === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 300);
    } else {
      setTimeout(typeRole, 50);
    }
  }
}

onMounted(() => {
  typeRole();
});
</script>
<style scoped>
.stroke-text {
  -webkit-text-stroke: 1px black;
  color: transparent;
}
</style>
