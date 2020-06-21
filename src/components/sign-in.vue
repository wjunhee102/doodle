<style lang="scss">
  .login {
    width: 1080px;
    margin: 0 auto;
  }
</style>

<template>
  <div class="login">
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
    <button type="button" @click="sign">로그인</button>
    <p>{{sucess? "성공" : "실패"}}</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {

    data () {
      return {
        account  : "",
        password : "",
        sucess : false
      }
    },

    computed: {
      ...mapGetters({
        getLogin : "getLogin"
      })
    },

    methods: {
      sign () {
        return this.sucess = this.getLogin({email : this.account, password : this.password})
      }
    }

  }
</script>