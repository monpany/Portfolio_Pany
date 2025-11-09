<script setup>
import { ref, computed } from 'vue';

// SVG icon for the speaker/person next to the name
const SpeakerIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-400">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
`;

const scheduleData = ref([
  // --- Original Conference Items ---
  {
    type: 'Keynote',
    time: '9:00 AM - 9:45 AM',
    title: "Opening Keynote: Cambodia's Digital Vision 2030",
    description: "H.E. Chea Vandeth, Minister of Post and Telecommunications, presents Cambodia's comprehensive digital transformation strategy and the role of internet governance in achieving national development goals.",
    speakers: [{ name: 'H.E. Chea Vandeth', title: 'Minister of Post and Telecommunications' }],
    headerClass: 'bg-pink-100 text-pink-700',
    tagClass: 'bg-pink-500',
  },
  {
    type: 'Panel',
    time: '10:00 AM - 11:30 AM',
    title: 'AI Governance: Balancing Innovation and Ethics',
    description: "Exploring regulatory frameworks for AI development, ethical considerations, and Cambodia's approach to responsible AI innovation in government and private sector.",
    speakers: [
      { name: 'Dr. Sarah Chen', title: 'AI Ethics Researcher' },
      { name: 'Mr. Sophak Tun', title: 'Tech Industry Leader' },
    ],
    headerClass: 'bg-indigo-100 text-indigo-700',
    tagClass: 'bg-indigo-500',
  },
  {
    type: 'Panel',
    time: '2:00 PM - 3:30 PM',
    title: 'Cybersecurity: Building National Digital Resilience',
    description: "Discussing Cambodia's cybersecurity strategy, threat landscape, public-private partnerships, and capacity building initiatives for a secure digital ecosystem.",
    speakers: [
      { name: 'Col. Pisach Khem', title: 'National Cybersecurity' },
      { name: 'Ms. Linda Park', title: 'Cybersecurity Expert' },
    ],
    headerClass: 'bg-red-100 text-red-700',
    tagClass: 'bg-red-500',
  },
  {
    type: 'Workshop',
    time: '4:00 PM - 5:30 PM',
    title: 'Digital Policy Making: Multi-stakeholder Approach',
    description: "Interactive workshop on inclusive policy development processes, stakeholder engagement strategies, and collaborative governance models for internet governance.",
    speakers: [],
    note: {
        text: 'Limited Seats',
        detail: 'Interactive session with hands-on activities'
    },
    headerClass: 'bg-green-100 text-green-700',
    tagClass: 'bg-green-500',
  },
  
  // --- CV Content: Project Experience ---
  {
    type: 'Project', // Changed type for projects
    time: 'Mar 10 - Apr 28, 2025',
    title: 'Built Beauty Store Website (VCI) Project',
    description: "Served as **Backend Developer & QA Manager**. Helped build and test a coffee shop sales system using **PHP and MySQL** for handling orders, payments, and stock data.",
    speakers: [{ name: 'Pany Mon (You)', title: 'Backend Developer & QA Manager' }],
    headerClass: 'bg-yellow-100 text-yellow-800', // New style for Projects
    tagClass: 'bg-yellow-600',
  },
  {
    type: 'Project',
    time: 'Jan 13 - Jan 27, 2025',
    title: 'E-Commerce Website Project',
    description: "Built an E-Commerce website using **PHP (MVC), HTML, CSS, JavaScript, and Bootstrap 5**. Responsibilities included coding, testing, bug fixing, and ensuring responsive design.",
    speakers: [{ name: 'Pany Mon (You)', title: 'Team Member & QA Manager' }],
    headerClass: 'bg-yellow-100 text-yellow-800',
    tagClass: 'bg-yellow-600',
  },
  {
    type: 'Course', // Changed type for courses
    time: '3-Week Course',
    title: 'Basic Networking (LAN & WAN)',
    description: "Gained understanding of computer networks, learned functions of networking devices (**Router, Switch, Access Point**), and practiced basic network commands (**ping, ipconfig**).",
    speakers: [],
    headerClass: 'bg-blue-100 text-blue-700', // New style for Courses
    tagClass: 'bg-blue-500',
  },
  
  // --- CV Content: Workshops ---
  {
    type: 'Workshop',
    time: 'Jan 18 & 25, 2025',
    title: 'Product Owner Workshops',
    description: "Introduction to the **Product Owner role**, covering responsibilities, tasks, and project impact. Includes hands-on practice in gathering requirements, writing user stories, and using **Jira**.",
    speakers: [{ name: 'Felix Leuker', title: 'Senior Digital Project Manager (Facilitator)' }],
    headerClass: 'bg-green-100 text-green-700',
    tagClass: 'bg-green-500',
  },
  {
    type: 'Workshop',
    time: 'Feb 8, 2025',
    title: 'Project Management Workshop',
    description: "Understand key roles like **Product Owner, Scrum Master, and Development Team**. Learn how these roles collaborate using tools like **Jira, Git, and GitHub**, and explore essential concepts such as user stories and agile workflows.",
    speakers: [{ name: 'Felix Leuker', title: 'Senior Digital Project Manager (Facilitator)' }],
    headerClass: 'bg-green-100 text-green-700',
    tagClass: 'bg-green-500',
  },
  {
    type: 'Workshop',
    time: 'Feb 7 & Mar 14, 2025',
    title: 'UX/UI Design Workshops',
    description: "Learn to translate project requirements into **prototypes, mockups, or wireframes**. Apply **design logic** with hands-on experience in a mini project.",
    speakers: [{ name: 'PJ', title: 'UX/UI Designer, Sourcemax Asia Co., Ltd (Facilitator)' }],
    headerClass: 'bg-green-100 text-green-700',
    tagClass: 'bg-green-500',
  },
  {
    type: 'Workshop',
    time: 'Mar 19, 2025',
    title: 'Data Analytics Workshop',
    description: "Focus on data preparation and visualization using **Python and Power BI**, transforming raw data into meaningful insights.",
    speakers: [
      { name: 'Felix Leuker', title: 'Facilitator' }, 
      { name: 'Solution BI Staff', title: 'Facilitator' }
    ],
    headerClass: 'bg-green-100 text-green-700',
    tagClass: 'bg-green-500',
  },
]);

// Helper function to return classes for special notes
const getNoteClasses = (noteText) => {
    if (noteText.includes('Limited Seats')) {
        return 'text-red-700 bg-red-50 border border-red-200';
    }
    return 'text-gray-600 bg-gray-50';
};
</script>

<template>
  <!-- Load Inter font and apply modern default styling -->
  <div class="min-h-screen bg-gray-50 p-4 sm:p-8 font-[Inter] antialiased">
    <div class="max-w-4xl mx-auto space-y-8">
      
      <!-- Schedule Item Loop -->
      <div v-for="(item, index) in scheduleData" :key="index" 
           class="bg-white rounded-xl shadow-lg transition duration-300">
        
        <!-- Header Section (Colored Bar) -->
        <div :class="[item.headerClass, 'p-4 rounded-t-xl flex items-center justify-between']">
          
          <!-- Event Type Tag -->
          <span :class="[item.tagClass, 'text-xs font-semibold px-3 py-1 rounded-full text-white tracking-wider']">
            {{ item.type }}
          </span>
          
          <!-- Time -->
          <span :class="['text-sm font-medium', item.headerClass.replace('bg-', 'text-').replace('-100', '-700')]">
            {{ item.time }}
          </span>
        </div>
        
        <!-- Content Section -->
        <div class="p-6 space-y-4">
          
          <!-- Title & Description -->
          <h2 class="text-xl font-bold text-gray-800 leading-snug">
            {{ item.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed text-sm">
            {{ item.description }}
          </p>
          
          <!-- Speakers Section -->
          <div v-if="item.speakers.length > 0" class="pt-4 border-t border-gray-100 mt-6">
            <div class="space-y-3">
              <div v-for="(speaker, sIndex) in item.speakers" :key="sIndex" class="flex items-start space-x-3">
                <!-- Use v-html to render the raw SVG string as an icon -->
                <div v-html="SpeakerIcon"></div>
                <div>
                  <div class="text-sm font-semibold text-gray-700">{{ speaker.name }}</div>
                  <div class="text-xs text-gray-500">{{ speaker.title }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Special Note/Limited Seats Section -->
          <div v-if="item.note" class="pt-4 border-t border-gray-100 mt-6">
            <div :class="[getNoteClasses(item.note.text), 'p-3 rounded-lg flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4']">
                <div class="text-xs font-semibold whitespace-nowrap">{{ item.note.text }}</div>
                <div class="text-xs text-gray-600 dark:text-gray-700">{{ item.note.detail }}</div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
/* Since this is a single component file, we assume Tailwind is available.
  Adding base styles for the Inter font if it wasn't pre-loaded.
*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Apply font globally */
.font-\[Inter\] {
    font-family: 'Inter', sans-serif;
}
</style>
