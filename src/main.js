import { createApp } from 'vue'
import './assets/base.css' // Adjust the path as necessary
import App from './App.vue'
import router from './router' // Adjust the path as necessary

const app = createApp(App)

app.use(router)

app.mount('#app')
