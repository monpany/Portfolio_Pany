<template>
  <div
    class="flex flex-row items-center max-w-5xl w-full gap-8 justify-around mx-auto px-4 py-6"
  >
    <!-- Left Section -->
    <div class="w-1/2  text-left">
      <!-- Main Heading -->
      <h1
        class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-snug"
      >
        Hi!, <span class="text-black">I am</span>
        <span class="stroke-text">Pany Mon</span>
      </h1>

      <!-- Sub Heading -->
      <h2
        class="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mt-2 h-auto"
      >
        {{ currentText }}<span class="animate-pulse">|</span>
      </h2>

      <!-- Divider -->
      <div
        class="w-24 sm:w-28 md:w-36 border-b border-gray-300 my-2 sm:my-3"
      ></div>

      <!-- Paragraph -->
      <p
       class="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed"
      >
        Hi there! Thanks for visiting my portfolio. <br />
        Feel free to explore my background, skills, and what I’ve been working
        on.
      </p>

      <!-- Button -->
      <a href="your-cv.pdf" download aria-label="Download my CV">
        <button
          class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow text-sm sm:text-base md:text-lg"
        >
          Download CV
        </button>
      </a>
    </div>

    <!-- Profile Image -->
    <div class="flex justify-center -mt-8 sm:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
      <div
        class="rounded-full border-4 lime-glow p-1 shadow-lg bg-white flex items-center justify-center w-34 h-34 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
      >
        <img
          src="../assets/image/image.png"
          alt="Pany Mon"
          class="rounded-full object-cover w-full h-full"
        />
      </div>
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
.lime-glow {
  border-color: rgb(0, 230, 230);
  box-shadow: 0 0 0 0 rgb(0, 230, 230), 0 0 4px 1px rgb(0, 230, 230);
  animation: blink-glow 1.2s infinite alternate;
}

@keyframes blink-glow {
  0% {
    box-shadow: 0 0 0 0 rgb(0, 230, 230), 0 0 4px 1px rgb(0, 230, 230);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(0, 230, 230), 0 0 8px 2px rgb(0, 230, 230);
  }
}
button {
  box-shadow: 0 0 8px 2px rgb(0, 230, 230);
  transition: box-shadow 0.3s;
}

button:hover {
  box-shadow: 0 0 16px 4px rgb(0, 230, 230);
}
.stroke-text {
  border-radius: 4px;           /* Fill color */
  -webkit-text-stroke: 1px rgb(0, 230, 230);  /* Dark green border */
  font-weight: bold;
}
</style>
