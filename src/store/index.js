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
    async accountSave (context) {
      const data = await context.commit(SIGNUP) 
      return localStorage("data",JSON.stringify(data)) ;
    }
  }

})

export default store;
