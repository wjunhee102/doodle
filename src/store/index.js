import Vue  from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

const ADDCOUNT     = "ADDLIST";
const SIGNUP       = "SIGNUP";
const SIGNUPSUCESS = "SIGNUPSUCESS"; 
// const DELETECOUNT = "DELETECOUNT";

const store = new Vuex.Store({

  state: {
    count: 0,
    account : {
      email: "",
      name : {
        first : "",
        last  : ""
      },
      password: "",
      checkPw : ""
    },

    signUpRes : {
      status : null,
      message: null 
    }
    
  },

  getters: {

    getItem: state => {
      return state.count
    },
    
    getAddress: state => {
      return state.account.email
    },

    getLogin: state => type => {
      const  {email, password} = state.account;
      console.log(state, type)
      if(email === type.email && password === type.password) {
        return true
      } else {
        return false
      }
    },

    getSignUpRes: state => {
      return state.signUpRes
    }


  },

  mutations: {

    [ADDCOUNT]: function (state, payload) {
      state.count += payload
    },

    [SIGNUP]  : function (state, payload) {
      state.account = payload
    },
    
    [SIGNUPSUCESS] : function (state, payload) {
      const data = () => {
        switch(payload.message) {
          case "sucess" :
            return "성공적으로 생성되었습니다!"
          case "overlap":
            return "중복된 계정입니다."
          default :
            return "알 수 없는 오류입니다."
        }
      }
      return state.signUpRes = Object.assign({}, state.signUpRes, {
        status : payload.res,
        message: data()
      })
    }
    

  },

  actions: {
    async accountSave ({commit, state}, payload) {
      await commit(SIGNUP, payload);
      try {
        const data = await fetch("http://localhost:8085/sign-up", {
          method: 'POST',
          mode: "cors",
          body: JSON.stringify(state.account),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json());
        
        console.log(data);

        if(!data) {
          commit(SIGNUPSUCESS, {
            status : "error",
            message : "aa"
          })
        } else {
          commit(SIGNUPSUCESS, data);
        }
        
      } catch (err) {
        console.log(err);
      } 
    }
  }

})

export default store;
