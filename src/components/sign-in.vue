<style>

</style>

<template>
  <div>
    <div>
      <label for="id">아이디: </label>
      <input type="text" v-model="account" />
    </div>
    <div>
      <label for="pw">비밀번호:</label>
      <input type="text" v-model="password" />
    </div>
    <button type="button">로그인</button>
    <p>{{getLogin({ email:account, password })? "성공" : "실패"}}</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {

    data () {
      return {
        account  : "",
        password : ""
      }
    },

    computed: {
      ...mapGetters({
        getLogin : "getLogin"
      })
    },

  }
</script>