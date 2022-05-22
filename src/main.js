import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import index from "@/router";
import store from "@/store";

import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import './assets/styles/reset.css'
const app = createApp(App);

app.use(index);
app.use(store)
app.use(Toast)
app.mount('#app')
