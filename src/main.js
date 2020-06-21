import Vue    from "vue";
import App    from "./App.vue";
import store  from "./store";
import router from "./router";

import signInput from './core/sign-input.vue';

Vue.component("sign-input", signInput);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
