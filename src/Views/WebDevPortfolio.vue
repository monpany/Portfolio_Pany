<!-- WebDevPortfolio.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br text-white py-8 px-4 sm:py-12 lg:py-16">
    <div class="max-w-7xl mx-auto">

      <!-- CENTERED GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start justify-center">

        <!-- ==================== JOURNEY CARD (bg-gray-400) ==================== -->
        <div class="lg:col-span-2 flex justify-center">
          <div
            class="w-full max-w-full lg:max-w-4xl 
                   bg-gray-400 text-gray-900 rounded-2xl sm:rounded-3xl 
                   shadow-xl sm:shadow-2xl 
                   p-5 sm:p-7 lg:p-10 
                   transform transition-all duration-500 
                   hover:shadow-3xl card-3d"
          >
            <div class="bg-white/70 backdrop-blur-sm p-5 sm:p-7 rounded-xl sm:rounded-2xl 
                        shadow-inner hover:bg-white/80 
                        transition-all duration-500">
              <h2 class="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900 tracking-tight">
                My Web Development Journey
              </h2>
              <p class="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                During my studies, I’ve developed a strong foundation across a wide range of web development technologies.
                I’ve mastered <strong>HTML</strong> and <strong>CSS</strong> for responsive layouts, expanded into
                <strong>Sass</strong> for efficient styling, and embraced <strong>JavaScript</strong> for dynamic behavior.

                <br class="hidden sm:block"><br class="hidden sm:block">

                My backend skills include <strong>PHP</strong> and <strong>Laravel</strong>, with
                <strong>MySQL</strong> for database management. I’ve explored <strong>Vue.js</strong> for reactive interfaces
                and used <strong>Node.js</strong> for server-side scripting. <strong>Python</strong> adds versatility to my toolkit.

                <br class="hidden sm:block"><br class="hidden sm:block">

                Each technology helps me build polished, functional, and visually engaging web applications.
              </p>
            </div>
          </div>
        </div>

        <!-- ==================== SKILLS CARD (bg-gray-400) ==================== -->
        <div class="flex justify-center lg:justify-start">
          <div
            ref="cardRef"
            class="w-full max-w-sm sm:max-w-md 
                   bg-gray-400 text-gray-900 rounded-xl p-4 sm:p-6 border border-gray-500 opacity-0 translate-y-6 
                   transition-all duration-300 cursor-pointer 
                   hover:shadow-[0_0_20px_rgb(0,230,230)] hover:border-[rgb(0,230,230)]"
            @mouseenter="bounceCard"
          >
            <h2 class="text-base sm:text-lg font-semibold text-gray-800">Skill Statistics</h2>
            <div class="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
              {{ average }}% <span class="text-xs sm:text-sm text-gray-700">Average</span>
            </div>
            <p class="text-xs text-gray-700 mb-4">
              Based on {{ skills.length }} technologies learned
            </p>

            <div class="overflow-x-auto scrollbar-hide">
              <table class="min-w-full text-xs text-gray-800">
                <thead>
                  <tr class="border-b border-gray-500">
                    <th class="text-left py-1">Technology</th>
                    <th class="text-right py-1">Level (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="skill in skills" :key="skill.name">
                    <td class="py-1 w-6">{{ skill.name }}</td>
                    <td class="py-1">
                      <div class="flex items-center gap-2">
                        <div class="relative w-full sm:w-40 h-2 bg-gray-300 rounded overflow-hidden shadow-inner">
                          <div
                            class="absolute top-0 left-0 h-full bg-[rgb(0,230,230)] rounded shadow-md"
                            :ref="el => barRefs.push(el)"
                          ></div>
                        </div>
                        <span class="text-gray-800 text-xs w-12 text-right">{{ skill.level }}%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'

const skills = ref([
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "Sass", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "Laravel", level: 60 },
  { name: "Vue", level: 80 },
  { name: "MySQL", level: 50 },
  { name: "PHP", level: 60 },
  { name: "Node.js", level: 60 },
  { name: "Python", level: 55 },
])

const barRefs = ref([])
const cardRef = ref(null)

const average = computed(() => {
  const total = skills.value.reduce((acc, s) => acc + s.level, 0)
  return Math.round(total / skills.value.length)
})

onMounted(() => {
  gsap.to(cardRef.value, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
  skills.value.forEach((skill, i) => {
    const bar = barRefs.value[i]
    if (!bar) return
    gsap.set(bar, { width: "0%", opacity: 0 })
    gsap.to(bar, {
      width: skill.level + "%",
      opacity: 1,
      duration: 1.2,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })
})

const bounceCard = () => {
  gsap.fromTo(cardRef.value, { y: 0 }, { y: -10, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 })
}
</script>

<style scoped>
/* 3D Hover for Journey Card */
.card-3d {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.card-3d:hover {
  transform: translateY(-10px) rotateX(3deg) rotateY(3deg) scale(1.01);
  box-shadow: 
    0 30px 60px rgba(0, 230, 230, 0.15),
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 0 30px rgba(0, 230, 230, 0.1);
}

@media (max-width: 767px) {
  .card-3d:hover {
    transform: translateY(-6px) scale(1.01);
  }
}

/* Scrollbar Hide */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.shadow-inner { box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05); }
.shadow-md { box-shadow: 0 0 6px rgba(0, 230, 230, 0.4); }
</style>