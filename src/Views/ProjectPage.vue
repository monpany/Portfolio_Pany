<template>
  <div class="py-10 px-4  min-h-screen">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      
      <!-- Project Card 1 -->
      <div
        class="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 group hover:shadow-2xl transition-all duration-500"
      >
        <!-- Image -->
        <div
          class="relative h-56 bg-center bg-cover"
          :style="{ backgroundImage: `url(${projectImage})` }"
        >
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <h2 class="text-2xl font-bold uppercase tracking-wider">
              Built Beauty Store
            </h2>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-3">
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <i class="fas fa-user-cog text-red-500"></i>
            <span><strong>Role:</strong> Backend Developer & QA Manager</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <i class="fas fa-calendar-alt text-red-500"></i>
            <span><strong>Duration:</strong> 10 Mar – 28 Apr 2025</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            Contributed to backend operations using PHP & MySQL — handling order
            processing, payment integration, and stock management with secure and
            efficient logic.
          </p>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div
        class="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 group hover:shadow-2xl transition-all duration-500"
      >
        <!-- Image -->
        <div
          class="relative h-56 bg-center bg-cover"
          :style="{ backgroundImage: `url(${projectwebDesign})` }"
        >
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <h2 class="text-2xl font-bold uppercase tracking-wider">
              Food Website
            </h2>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-3">
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <i class="fas fa-user-cog text-red-500"></i>
            <span><strong>Role:</strong> Developer & Designer</span>
          </div>
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <i class="fas fa-calendar-alt text-red-500"></i>
            <span><strong>Duration:</strong> 21 Oct – 3 Nov 2024</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            Designed and developed a responsive Food Website using HTML, CSS, and
            SASS. Oversaw QA tasks including testing, debugging, and ensuring a
            smooth, visually appealing user experience.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import projectImage from '@/assets/image/Image/vc1.png'
import projectwebDesign from '@/assets/image/Image/web-design.png'
</script>
