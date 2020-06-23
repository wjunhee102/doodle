import Vue       from "vue";
import VueRouter from "vue-router";

import Home      from "../components/home.vue";
import SignUp    from "../components/sign-up.vue";
import SignIn    from "../components/sign-in.vue";

Vue.use(VueRouter);

const routes = [
  //홈
  {path: "/", component : Home},

  //회원가입 
  {path: "/signUp", component : SignUp },

  //로그인
  {path: "/signIn", component : SignIn }
]

const router = new VueRouter({
  routes
})

export default router;