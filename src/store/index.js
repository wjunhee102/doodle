import Vue  from 'vue';
import Vuex from 'vuex';

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
      const  {cEmail, cPw} = type
      if(email === cEmail && password === cPw) {
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
      state = payload
    } 
    

  },

  actions: {

  }

})

export default store;
