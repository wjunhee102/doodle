<style lang="scss">
  .sign-up {
    max-width: 1080px;
    min-width: 800px;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @apply .flex .justify-between .flex-wrap .border .absolute .py-16 .px-10 .rounded-lg .shadow;
    
    .visual {

      .main-image {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

  }
</style>

<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="sign-up">

      <div class="visual flex-1 relative mr-2">
        <h1 class="absolute text-blue-primary text-large font-semibold z-10">회원 가입</h1>
        <img 
          class="w-full relative main-image" 
          src="../assets/signup.jpg" 
          alt=""
        />
      </div>
      
      <div class="sign flex-1" @keyup.enter="signUp" @keyup.esc="backHome2">
      
        <h2 class="mb-6 text-large font-semibold">
          본인의 정보를 작성해주세요
        </h2>

        <div class="mb-4 flex justify-between">
          <sign-input
            cls="last-name flex-1 mr-2"
            lb="last_name"
            content="성"
            pls="성"
            :err="inputErr"
            @change="val => name.last = val"
          >
          </sign-input>

          <sign-input
            cls="first-name flex-1"
            lb="first_name"
            content="이름"
            pls="이름"
            :err="inputErr"
            @change="val => name.first = val"
          >
          </sign-input>
      
        </div>

        <div class="mb-4">

          <sign-input
            cls="mail-adress"
            lb="email"
            content="계정"
            pls="example@gmail.com"
            :err="inputErr"
            :deepErr="emailErr"
            @change="val => email = val"
          >
          </sign-input>

        </div>

        <div class="mb-4">
          <sign-input
            cls="pwd"
            lb="password"
            content="비밀번호"
            pls="비밀번호"
            nType="password"
            :err="inputErr"
            :deepErr="pwErr"
            @change="val => password = val"
          >
          </sign-input>

          <p class="text-grey-primary mb-4">문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요</p>

          <sign-input
            cls="check"
            lb="checkedPwd"
            content="비밀번호 확인"
            pls="비밀번호 확인"
            nType="password"
            :err="inputErr"
            :deepErr="pwErr"
            @change="val => checkPw = val"
          >
          </sign-input>

        </div>
        

        <div>

          <div class="flex justify-center">

            <button 
              class="bg-blue-primary hover:bg-transparent font-semibold text-white hover:text-blue-primary py-1 px-4 border hover:border-blue-primary shadow-md hover:shadow-none rounded-lg mr-6" 
              type="button" 
              @click="signUp"
            >
              확인
            </button>

            <router-link
              class="bg-red-primary hover:bg-transparent font-semibold text-white hover:text-red-primary py-1 px-4 border hover:border-red-primary rounded-lg shadow-md hover:shadow-none" 
              type="button" 
              to="/"
            >
              취소
            </router-link>
          
          </div>

          <div class="result mt-2" v-if="error">
            <p>{{errorMessage}}</p>
          </div>
        </div>

      </div>

    </div>
  </form>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import router from '../router/index';

  export default {
    name: 'sign-up',
    props: {

    },

    data () {
      return {
      
        name: {
          first : "",
          last  : "",
        },
        email   : "",
        password: "",
        checkPw : "",

        inputErr: false,

        check : "",

        secret: "",

        error: false,

        pwErr   : false,
        emailErr: false

      }
    },

    created () {
      this.backHome();
    },

    watch: {
     res : function () {
       if(this.res.status == "error") {
         this.typeErrorCheck();
         return this.error = true 
       } 
       router.push({path: '/signIn'});
     },

      password: function () {
        console.log(this.password);
        this.pwErr = false;
      },

      email: function () {
        console.log(this.email);
        this.emailErr = false;
      }

    },

    computed: {

      ...mapGetters({
        res : "getSignRes",
        userInfo : "getUserInfo"
      }),

      errorMessage () {
        switch (this.res.message) {
          case "overlap" :
            return "동일한 계정이 존재합니다."
          case "pwTypeError" :
            return "영문, 숫자, 특수문자를 포함한 8 ~ 16자리를 작성해주세요."
          case "emailTypeError" :
            return "이메일 형식에 맞지 않습니다."
          default : 
            return "알 수 없는 오류입니다."
        }
      },

    },  

    methods: {
      
      ...mapMutations({
        pushAccountData : "SIGNUP"
      }),

      ...mapActions({
        accountSave : 'accountSave'
      }),
      
      addCount(count) {
        return this.ddd += count
      },

      signUp () {

        if(!this.email || !this.name || !this.password || !this.checkPw) {
          this.inputErr = true
          return console.log("값이 없음")
        }

        if(this.password !== this.checkPw) return console.log("오류");

        const detail = {
          email    : this.email,
          name     : this.name,
          password : this.password,
          checkPw  : this.checkPw
        }
        this.inputErr = false
        
        this.accountSave(detail);
      },

      backHome () {
         if(this.userInfo.type) router.push({path: '/'});
      },

      backHome2 () {
        router.push({path: '/'});
      },

      typeErrorCheck () {
        switch (this.res.message) {
          case "pwTypeError" :
            this.pwErr = true;
            break;
          case "emailTypeError" :
            this.emailErr = true;
            break;
          case "overlap" :
            this.emailErr = true;
            break;
        }
      },

    },

  }

</script>


