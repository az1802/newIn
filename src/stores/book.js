import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => {
    return {
      categorylist:{},//mine,classLibrary
    }
  },
  actions:{
    setCategoryList(val={}){
      this.categorylist = val
    }
  }
})