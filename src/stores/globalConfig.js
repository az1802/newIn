import { defineStore } from 'pinia'

export const useGlobalConfigStore = defineStore('globalConfig', {
  state: () => {
    return {
      tabActive:"share",//mine,classLibrary
    }
  },
  actions:{
    setTabActive(val){
      this.tabActive = val
    }
  }
})