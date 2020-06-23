import Vue  from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

//*/ mutation-types
const ADDCOUNT     = "ADDLIST";

// 회원가입
const SIGNUP       = "SIGNUP";
const SIGNUPSUCESS = "SIGNUPSUCESS";

// 로그인
const LOGINRESULT    = "LOGINRESULT";
const LOGOUT         = "LOGOUT";
const USERINFORESET  = "USERINFORESET";
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
    
    [SIGNUPSUCESS] : function (state, payload) {
      state.signRes = Object.assign({}, state.signRes, {
        status : payload.res,
        message: payload.message
      })
    },

    [LOGOUT] : function (state) {
      return state.currentUser = {
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

    [LOGINRESULT] : function (state, payload) {
      const data = () => {
        switch(payload.status) {
          case "sucess" :
            return `${payload.message}님 환영합니다!`
          case "error":
            return "계정을 찾을 수 없습니다."
          default :
            return "알 수 없는 오류입니다."
        }
      }

      state.signRes = {
        status : payload.status,
        message: data()
      };
    }

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
          commit(SIGNUPSUCESS, data);
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
