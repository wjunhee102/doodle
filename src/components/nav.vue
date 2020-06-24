<style lang="scss">
  .gnb {
    text-align: center;
    a {
      width: 100px;
      margin-right: 10px;
      @apply text-large font-semibold leading-loose;
    }
  }
</style>

<template>
  <div class="gnb flex justify-between flex-auto">

    <div class="gnb flex justify-between flex-auto">
      <router-link to="/">홈</router-link>
      <router-link to="/signUp">회원가입</router-link>
      <router-link to="/signIn">로그인</router-link>
    </div>

    <div>
      <div class="userInfo flex justify-between">
        <div 
          v-if="userInfo.type"
          class="user text-center text-large font-semibold"
        >
          {{userInfo.name.first}}
        </div>
        <button class="border-grey-dim text-large font-semibold" v-if="userInfo.type" @click="logout">Logout</button>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },

    methods: {
      ...mapMutations({
          logout : "LOGOUT"
      })
    },
  }

</script>

