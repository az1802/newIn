import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => {
    return {
       name: "张恒",
       school:"大鹏中心小学",
       identity:"student",//student teacher other
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions:{
    setUserInfo(info){
      for(let key in info){
        this[key] = infp[key];
      }
    },
    setName(name) {
      this.name = name
    },
  }
})