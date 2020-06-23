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
      <div class="flex justify-between">
        <gnb></gnb>
        <div v-if="userInfo.type">
          {{userInfo.name.first}}
        </div>
        <button v-if="userInfo.type" @click="logout">logout</button>
      </div>
      
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
      ...mapGetters({
        getItem: 'getItem',
        userInfo: 'getUserInfo'
      })
    },

    methods: {
      ...mapMutations({
          logout : "LOGOUT"
      })
    },

    components: {
      "gnb" : Nav
    }

  }

</script>


