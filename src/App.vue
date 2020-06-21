<style lang="scss">
  @import "css/tailwind.css";
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  body { 
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
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
      <gnb></gnb>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import Nav from './components/nav';

  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'App',

    computed: {
      ...mapGetters(['getItem'])
    },

    methods: {
      ...mapMutations(["ADDLIST"])
    },

    components: {
      "gnb" : Nav
    }

  }

</script>


