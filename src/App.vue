<style>

  body { 
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100vh;
  }

</style>

<template>
  <div id="app">
    <div>
      <h1>안녕하세요 아이디를 입력해주세요~~</h1>
      <router-link to="/signUp">회원가입</router-link>
      <router-link to="/signIn">로그인</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'App',

    computed: {
      ...mapGetters(['getItem'])
    },

    methods: {
      ...mapMutations(["ADDLIST"])
    },

  }

</script>


