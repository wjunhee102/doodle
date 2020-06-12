<style scoped>

</style>

<template>
  <div class="hello">
    <div class="top">
      <h1>계정 만들기</h1>
    </div>

    <form action="">
      <div>
        <input type="text" placeholder="성" />
        <input type="text" placeholder="이름" />
      </div>

      <div>
        <input type="text" value="@gmail.com" />
      </div>

      <p>문자, 숫자, 마침표를 사용할 수 있습니다</p>
      <a href="#">대신 현재 이메일 주소 사용</a>

      <div>
        <input type="text" placeholder="비밀번호" />
        <input type="text" placeholder="확인" />
      </div>
      <p>문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요</p>

      <div>
        <a href="#">대신 로그인하기</a>
        <button>다음</button>
      </div>

    </form>
  </div>
</template>

<script>

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
        checkPw : "" 

      }
    },

    watch: {
      // testValue: function (newVal) {
      //   this.reverseValue = newVal.split('').reverse().join('');
      //   // this.items.map((a,b)=>{
      //   //   a
      //   // }, newVal)
      // }
    },

    computed: {
     
    },  

    methods: {
      addCount(count) {
        return this.ddd += count
      }
    }

  }

</script>


