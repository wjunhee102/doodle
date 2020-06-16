<style scoped>

</style>

<template>
  <div class="hello">
    <div class="top">
      <h1>계정 만들기</h1>
    </div>

    <div>
      <input type="text" placeholder="성" v-model="name.last" />
      <input type="text" placeholder="이름" v-model="name.first" />
    </div>

    <div>
      <input type="text" value="@gmail.com" v-model="email" />
    </div>

    <p>문자, 숫자, 마침표를 사용할 수 있습니다</p>
    <a href="#">대신 현재 이메일 주소 사용</a>

    <div>
      <input type="password" placeholder="비밀번호" v-model="password" />
      <input type="password" placeholder="확인" v-model="checkPw" />
      <input type="text" v-bind:value="secret" />
    </div>
    <p>문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요</p>

    <div>
      <a href="#">{{check}}</a>
      <button type="button" @click="signUp">다음</button>
    </div>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'HelloWorld',
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

        check : "",

        secret: ""

      }
    },

    watch: {
     email : function () {
       this.check = this.email
     },
     password : function () {
       const data = [];
       for(let i = 0; i < this.password.length; i++) {
         data[i] = "*";
       }
       return this.secret = data.reduce((acc, cur)=> {
         return acc + cur
       })
     }
    },

    computed: {

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
        pushAccountData : 'SIGNUP'
      }),
      
      addCount(count) {
        return this.ddd += count
      },

      signUp () {
        // const {name, email, password, checkPw} = this.data 
        const detail = {
          email    : this.email,
          name     : this.name,
          password : this.password,
          checkPw  : this.checkPw
        }
        console.log(detail)
        this.pushAccountData(detail);
      }

      // insert (val, type, def="null") {
      //   if(val === type) {

      //   }
      // }
    }

  }

</script>


