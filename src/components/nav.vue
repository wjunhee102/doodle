<style lang="scss">
  .gnb {
    margin: 0 auto;
    text-align: center;
    a {
      width: 100px;
      margin-right: 10px;
      font-size: 30px;
    }
  }
</style>

<template>
  <div class="gnb">
    <router-link to="/">홈</router-link>
    <router-link to="/signUp">회원가입</router-link>
    <router-link to="/signIn">로그인</router-link>
  </div>
</template>

<script>

  export default {

  }

</script>

