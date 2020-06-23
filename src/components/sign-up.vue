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
  <div class="sign-up">

    <div class="visual flex-1 relative mr-2">
      <h1 class="absolute text-blue-primary text-large font-semibold z-10">회원 가입</h1>
      <img 
        class="w-full relative main-image" 
        src="../assets/signup.jpg" 
        alt=""
      />
    </div>
    
    <div class="sign flex-1" @keyup.enter="signUp">
     
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
          @change="val => checkPw = val"
        >
        </sign-input>

        <!-- <input 
          class="focus:outline-none focus:shadow-outline border-grey-300" 
          type="text" 
          placeholder="test"
          v-bind:value="secret" 
        /> -->

      </div>
      

      <div>
        <button 
          class="bg-blue-primary text-white py-1 px-4 rounded-lg shadow-md" 
          type="button" 
          @click="signUp"
        >
          확인
        </button>

        <div>{{secret}}</div>
        <div>{{check}}</div>
        <div class="result mt-2" v-if="res.status">
          <p>{{res.status}}</p>
        </div>
      </div>

    </div>

  </div>
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

        secret: ""

      }
    },

    created () {
      this.backHome();
    },

    watch: {
     email : function () {
       this.check = this.email
     },
     password : function () {
       if(!this.password) return this.secret = ""
       const data = [];
       for(let i = 0; i < this.password.length; i++) {
         data[i] = "*";
       }
       return this.secret = data.reduce((acc, cur)=> {
         return acc + cur
       })
     },

     res : function () {
       if(this.res.status == "error") return 
       router.push({path: '/signIn'});
     }
    },

    computed: {

      ...mapGetters({
        res : "getSignRes",
        userInfo : "getUserInfo"
      }),

      checking () {
        const data = {
          email : this.email,
          password : this.password
        }
        if(this.getLogin(data)) {
          return "성공"
        } else {
          return "실패"
        }
     }
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
      }

    },

  }

</script>


