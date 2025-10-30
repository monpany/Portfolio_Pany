import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/Views/HomePage.vue'
import AboutPage from '@/Views/AboutPage.vue'
import ProjectPage from '@/Views/ProjectPage.vue'
import ContactPage from '@/Views/ContactPage.vue'

// const routes = [
//   { path: '/', name: 'Home', component: HomePage },
//   { path: '/about', name: 'About', component: HomePage },
//   { path: '/projects', name: 'Projects', component: ProjectPage },
//   { path: '/contact', name: 'Contact', component: ContactPage }, // Fixed here
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// export default router


// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '@/Views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/#about', name: 'About', component: HomePage },
  { path: '/#projects', name: 'Projects', component: HomePage },
  { path: '/#contact', name: 'Contact', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
