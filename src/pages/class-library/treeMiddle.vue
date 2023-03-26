<script setup >
  import memberInfo from './memberInfo.vue';
  import {ref,unref,computed} from "vue";

  const props = defineProps({
    users:{
      type:Array,
      default:()=>{
        return []
      }
    }
  })
  let posMap = {
    1 :{
      top:"-0.768vw",
      right:"27.976vw"
    },
    2:{
      top:"6.86vw",
      right:"43.749vw"
    },3 :{
      top:"18.725vw",
      right:"64.348vw"
    },4 :{
      top:"50.406vw",
      right:"27.671vw"
    },5 :{
      top:"64.535vw",
      right:"46.73vw"
    },6 :{
      top:"69.213vw",
      right:"63.12vw"
    },7 :{
      top:"75.406vw",
      right:"15.971vw"
    },
    8 :{
      top:"96.535vw",
      right:"36.03vw"
    },9 :{
      top:"107.213vw",
      right:"56.12vw"
    },
    10 :{
      top:"141.063vw",
      right:"13.043vw"
    },
    11 :{
      top:"141.58vw",
      right:"33.164vw"
    },12 :{
      top:"152.174vw",
      right:"59.386vw"
    },
  }

  const list = computed(()=>{

    return props.users.map((item,index)=>{
      return {
        ...item,
        style:posMap[index+1]
      }
    })
  })
</script>

<template>
  <div class='tree-top-wrapper'>
    <div class="user-item" v-for="userItem in list" :key='userItem.id' :style='userItem.style'>
        <memberInfo :info='userItem' />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,178.0444vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree3.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
  }
</style>