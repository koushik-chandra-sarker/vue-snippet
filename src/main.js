import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from "@/router/router";
import store from "@/store";

import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import './assets/styles/reset.css'
const app = createApp(App);

app.use(router);
app.use(store)
app.use(Toast)
app.mount('#app')
