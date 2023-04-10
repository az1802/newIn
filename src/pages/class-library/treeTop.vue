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


  let rankStyleMap={
    1 :{
      top:"24vw",
      right:"5.4vw"
    },
    2:{
      top:"24.5vw",
      right:"5vw"
    },3 :{
      top:"24.2vw",
      right:"5vw"
    },4 :{
      top:"24vw",
      right:"5vw"
    },5 :{
      top:"23.1vw",
      right:"5.5vw"
    },6 :{
      top:"24vw",
      right:"5vw"
    },7 :{
      top:"24vw",
      right:"5vw"
    },
    8 :{
      top:"24vw",
      right:"5vw"
    },9 :{
      top:"24.5vw",
      right:"6vw"
    },
  }
  const list = computed(()=>{

    return props.users.map((item,index)=>{
      return {
        ...item,
        style:posMap[index+1],
        rankStyle:rankStyleMap[index+1]
      }
    })
  })


</script>

<template>
  <div class='tree-top-wrapper'>
    <div class="user-item" v-for="userItem in list" :key='userItem.student_id' :style='userItem.style'>
        <memberInfo :info='userItem' />
        <div class='rank-num' :style='userItem.rankStyle'>{{userItem.ranking}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,190.0444vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree1.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
    .rank-num{
      .btn-text(16px);
      .line-center(16px);
      position: absolute;
      display: inline-block;
    }
  }
</style>