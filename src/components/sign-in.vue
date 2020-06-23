<style lang="scss">
  .login {
    margin: 0 auto;
    max-width: 1080px;
    min-width: 800px;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @apply .flex .justify-between .flex-wrap .border .absolute .py-16 .px-10 .rounded-lg .shadow;
    
    .visual {

      .main-image {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

<template>
  <div class="login">
    <div class="visual flex-1 relative mr-2">
      <h1 class="absolute text-blue-primary text-large font-semibold z-10">로그인</h1>
      <img 
        class="w-full relative main-image" 
        src="../assets/signup.jpg" 
        alt=""
      />
    </div>

    <div class="flex-1 relative" @keyup.enter="login">
      <div>

      <sign-input
        cls="mail-adress"
        lb="email"
        content="계정"
        pls="계정"
        @change="val => account = val"
      >
      </sign-input>

      </div>
      <div>

        <sign-input
          cls="pwd"
          lb="password"
          content="비밀번호"
          pls="비밀번호"
          nType="password"
          @change="val => password = val"
        >
        </sign-input>

      </div>
      <button type="button" @click="login">로그인</button>
      <p>{{error}}</p>
    </div>
    
  </div>
</template>

<script>
  
  import { mapGetters, mapActions } from "vuex";
  import router from '../router/index';

  export default {

    data () {
      return {
        account  : "",
        password : "",
      }
    },

    created () {
      if(this.userInfo.type) router.push({path: '/'});
    },

    computed: {
      ...mapGetters({
        res : "getSignRes",
        userInfo : "getUserInfo"
      }),

      error () {
        if(this.res.status) {
          return "계정이나 비밀번호가 잘못되었습니다."
        } else {
          return ""
        }
      }
    },

    methods: {

      ...mapActions({
         loginAction : "loginAction"
      }),

      login () {
        this.loginAction({email : this.account, password : this.password});
        console.log(this.res)
        if(!this.res.status == "error") {
          router.push({path: '/'});
        }
      }
    },

  }
</script>