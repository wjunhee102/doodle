import Vue  from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

//*/ mutation-types
const ADDCOUNT     = "ADDLIST";

// 회원가입
const SIGNUP       = "SIGNUP";
const SIGNRESADD   = "SIGNRESADD";

// 로그인
const LOGOUT          = "LOGOUT";
const USERINFORESET   = "USERINFORESET";
const CURRENTUSERSAVE = "CURRENTUSERSAVE";

// 회원가입, 로그인 결과값 초기화
const RESRESET     = "RESRESET";

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

    signRes : {
      status : null,
      message: null 
    },

    currentUser : {
      type : false,
      email: "",
      name : {
        first : "",
        last  : ""
      } 
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

    getSignRes: state => {
      return state.signRes
    },

    getUserInfo: state => {
      return state.currentUser
    }

  },

  mutations: {

    [ADDCOUNT]: function (state, payload) {
      state.count += payload
    },

    [SIGNUP]  : function (state, payload) {
      state.account = payload
    },
    
    [SIGNRESADD] : function (state, payload) {
      state.signRes = payload
    },

    [LOGOUT] : function (state) {
      state.currentUser = {
        type : false,
        email: "",
        name : {
          first : "",
          last  : ""
        } 
      }
    },

    [RESRESET] : function (state) {
      state.signRes = Object.assign({},state.signRes,{
        status : null,
        message: null 
      });
    },
    
    [USERINFORESET] : function (state) {
      state.currentUser = {
        type : false,
        email: "",
        name : ""
      }
    },

    [CURRENTUSERSAVE] : function (state, payload) {
      state.currentUser = {
        type : true,
        email: payload.email,
        name : payload.name
      }
    },

  },

  actions: {
    
    async accountSave ({commit}, payload) {
      try {
        const data = await fetch("http://localhost:8085/sign-up", {
          method: 'POST',
          mode: "cors",
          body: JSON.stringify(payload),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json());

        console.log(data);

        commit(SIGNRESADD, data);
        
      } catch (err) {
        commit(SIGNRESADD, {
          status : "error",
          message : "aa"
        })
        console.log(err);
      } 
    },

    async loginAction ({commit}, payload) {
      try {
        const data = await fetch("http://localhost:8085/sign-in", {
          method: 'POST',
          mode: "cors",
          body: JSON.stringify(payload),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json());

        console.log(data);

        if(!data.email) {
          commit(USERINFORESET);
          commit(SIGNRESADD, data);
        } else {
          commit(RESRESET);
          commit(CURRENTUSERSAVE, data);
        }
        
      } catch (err) {
        console.log(err);
      } 
    }
  }

})

export default store;
