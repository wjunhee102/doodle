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

    background-image: url("./assets/main_bg_wide.jpg");
    background-position: center;

    .inner {
      max-width: 1080px;
      margin: 0 auto;
    }

    button {
      outline: none;
    }

    .header {
      background-color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid #ccc;
      @apply w-full shadow-sm;

      .userInfo {
        min-width: 50px;
        @apply w-1/6 relative;

        .user {
          line-height: inherit;
          @apply ;
        }
      }
    }
  }

</style>

<template>
  <div id="app">
    <div>
      <div class="header">

        <div class="inner">
          
          <gnb></gnb>

        </div>
       
      </div>
      
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import Nav from './components/nav';

  export default {
    name: 'App',

    components: {
      "gnb" : Nav
    }

  }

</script>


