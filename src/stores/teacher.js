import { defineStore } from 'pinia'

export const useTeacherInfoStore = defineStore('teacherInfo', {
  state: () => {
    return {

    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions:{
    setTeacherInfo(info){
      for(let key in info){
        this[key] = info[key];
      }
    },
  }
})