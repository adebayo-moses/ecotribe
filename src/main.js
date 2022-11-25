import { Vue } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '../src/assets/index.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
