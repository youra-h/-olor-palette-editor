import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import store from './store/index.js';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(store)
.mount('#app')
