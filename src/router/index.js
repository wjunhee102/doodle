import Vue       from "vue";
import VueRouter from "vue-router";
import signUp    from "../components/sign-up.vue";
import signIn    from "../components/sign-in.vue";

Vue.use(VueRouter);

const routes = [
  {path: '/signUp', component : signUp },
  {path: '/signIn', component : signIn }
]

const router = new VueRouter({
  routes
})

export default router;