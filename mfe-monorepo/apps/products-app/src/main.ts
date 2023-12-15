import './styles.css'
import router from './router';

import { createApp } from 'vue';
import App from './app/ProductsApp.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');
