import { createStore } from 'vuex'
import { getInfo } from "@/api/manager";
import { removeToken } from "@/composables/auth";

const store = createStore({
  state () {
    return {
      //用户信息
      user:{}
    }
  },
  mutations: {
    SET_USERINFO(state,user){
      state.user=user
    }
  },
  actions:{
    getinfo({commit}){
      return new Promise((resolve, reject)=>{
        getInfo().then(res=>{
          commit("SET_USERINFO",res)
          resolve(res)
        }).catch(err=>reject(err))
      })
    },
    logout(state){
      //清除cookies里的token
      removeToken()
      //清除当前用户状态vuex
      state.commit("SET_USERINFO",{})
    }
  }
})
export default store