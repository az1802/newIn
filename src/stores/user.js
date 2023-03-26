import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => {
    return {
      xingming: "",
      school:"",
      identity:"student",//student teacher other
      bindUserList:[],
      categorylist:[],
      new_message_num:0,
      photo:"",
      categoryNumMap:{},
      school_id:"306",
      categorylist:[],
      student_id:"500392",



    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions:{
    setUserInfo(info){
    uni.setStorageSync("userInfo",info)
      for(let key in info){
        this[key] = info[key];
      }
    },
    setName(name) {
      this.name = name
    },
  }
})