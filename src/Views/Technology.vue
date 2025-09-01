<template>
  <div class="w-90 max-w-sm sm:max-w-md mx-auto mt-6 px-4 md:w-96 sm:w-94">
    <div
      ref="cardRef"
      class="bg-black rounded-xl p-4 sm:p-6 border border-gray-500 opacity-0 translate-y-6 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgb(0,230,230)] hover:border-[rgb(0,230,230)]"
      @mouseenter="bounceCard"
    >
      <!-- Title -->
      <h2 class="text-base sm:text-lg font-semibold text-gray-100">Skill Statistics</h2>

      <!-- Average -->
      <div class="text-2xl sm:text-3xl font-bold text-gray-50 mt-2">
        {{ average }}% <span class="text-xs sm:text-sm text-gray-100">Average</span>
      </div>

      <!-- Description -->
      <p class="text-xs text-gray-100 mb-4">
        Based on {{ skills.length }} technologies learned
      </p>

      <!-- Summary Table -->
      <div class="overflow-x-auto scrollbar-hide">
        <table class="min-w-full text-xs text-gray-100 mb-2">
          <thead>
            <tr class="border-b border-gray-700">
              <th class="text-left py-1">Technology</th>
              <th class="text-right py-1">Level (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="skill in skills" :key="skill.name">
              <!-- Technology Name -->
              <td class="py-1  w-6">
                {{ skill.name }}
              </td>

              <!-- Level (%) with Progress Bar -->
              <td class="py-1">
                <div class="flex items-center gap-2">
                  <div class="relative w-full sm:w-40 h-2 bg-gray-800 rounded overflow-hidden shadow-inner">
                    <div
                      class="absolute top-0 left-0 h-full bg-[rgb(0,230,230)] rounded shadow-md"
                      :ref="el => barRefs.push(el)"
                    ></div>
                  </div>
                  <span class="text-gray-100 text-xs w-12 text-right">{{ skill.level }}%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "DashboardCard",
  data() {
    return {
      skills: [
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
      ],
      barRefs: [],
    };
  },
  computed: {
    average() {
      const total = this.skills.reduce((acc, s) => acc + s.level, 0);
      return Math.round(total / this.skills.length);
    },
  },
  mounted() {
    // Animate card entrance
    gsap.to(this.$refs.cardRef, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Animate progress bars with fade-in and width expansion
    this.skills.forEach((skill, i) => {
      const bar = this.barRefs[i];
      gsap.set(bar, { width: "0%", opacity: 0 });
      gsap.to(bar, {
        width: skill.level + "%",
        opacity: 1,
        duration: 1.2,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });
  },
  methods: {
    bounceCard() {
      gsap.fromTo(
        this.$refs.cardRef,
        { y: 0 },
        {
          y: -10,
          duration: 0.2,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        }
      );
    },
  },
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.shadow-inner {
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
}
.shadow-md {
  box-shadow: 0 0 6px rgba(0, 230, 230, 0.4);
}
</style>