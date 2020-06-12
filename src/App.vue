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
      {{getItem}}
      <button @click="ADDLIST(4)">추가</button>
    </div>
    <home>
    </home>
  </div>
</template>

<script>

  import { mapGetters, mapMutations } from 'vuex';

  import home from './components/home.vue'

  export default {
    name: 'App',

    computed: {
      ...mapGetters(['getItem'])
    },

    methods: {
      ...mapMutations(["ADDLIST"])
    },

    components: {
      "home": home 
    }
  }

</script>


