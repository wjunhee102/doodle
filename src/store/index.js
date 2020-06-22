import Vue  from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const ADDCOUNT    = "ADDLIST";
const SIGNUP      = "SIGNUP";
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


  },

  mutations: {

    [ADDCOUNT]: function (state, payload) {
      state.count += payload
    },

    [SIGNUP]  : function (state, payload) {
      state.account = payload
    } 
    

  },

  actions: {
    async accountSave ({commit, state}, payload) {
      await commit(SIGNUP, payload);
      // console.log( "데이터" ,data, JSON.stringify(state.account))
      const aaa = await axios("http://172.23.1.62:8085/users")
      console.log(aaa);
      return localStorage.setItem("user", JSON.stringify(state.account))
      ;
      // return fetch("http://localhost:8085/sign-up", {
      //   method: 'POST',
      //   body: JSON.stringify(state.account),
      //   headers: {
      //     'Content-Type' : 'application/json'
      //   }
      // }).then(res=> res)
      // .then(response => console.log(JSON.stringify(response)))
      // .catch(error => console.log('Error:', error)) ;
    }
  }

})

export default store;
