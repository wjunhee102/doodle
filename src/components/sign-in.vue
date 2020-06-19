<style lang="scss">
  
</style>

<template>
  <div>
    <div>
      <label for="id">아이디: </label>
      <input type="text" v-model="account" />
    </div>
    <div>
      <label for="pw">비밀번호:</label>
      <input type="password" v-model="password" />
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