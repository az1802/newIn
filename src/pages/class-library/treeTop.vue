<script setup >
  import memberInfo from './memberInfo.vue';
  import {navigateTo} from "@utils/wechat";
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
      top:"36.232vw",
      right:"14.976vw"
    },
    2:{
      top:"46.86vw",
      right:"35.749vw"
    },3 :{
      top:"50.725vw",
      right:"54.348vw"
    },4 :{
      top:"88.406vw",
      right:"23.671vw"
    },5 :{
      top:"96.135vw",
      right:"39.13vw"
    },6 :{
      top:"108.213vw",
      right:"59.42vw"
    },7 :{
      top:"141.063vw",
      right:"13.043vw"
    },
    8 :{
      top:"140.58vw",
      right:"38.164vw"
    },9 :{
      top:"152.174vw",
      right:"60.386vw"
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
    <div class="user-item" v-for="userItem in list" :key='userItem.student_id' :style='userItem.style'>
        <memberInfo :info='userItem' />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,190vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree1.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
  }
</style>