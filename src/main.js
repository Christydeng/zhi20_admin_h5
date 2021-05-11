import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'vant/lib/index.css';
import '/src/assets/styles/reset.css';
import '/src/assets/js/fontSize.js';
const app = createApp(App);
app.use(router);
app.mount('#app');

