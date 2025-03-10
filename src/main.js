import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/adminRoute'



const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')