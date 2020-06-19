<style lang="scss">
  @import "css/tailwind.css";

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


