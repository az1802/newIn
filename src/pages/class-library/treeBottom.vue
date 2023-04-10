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
      top:"-6.768vw",
      right:"22.976vw"
    },
    2:{
      top:"2.86vw",
      right:"40.749vw"
    },3 :{
      top:"15.125vw",
      right:"60.048vw"
    },4 :{
      top:"46.406vw",
      right:"25.671vw"
    },5 :{
      top:"54.835vw",
      right:"40.73vw"
    },6 :{
      top:"70.213vw",
      right:"65.12vw"
    },7 :{
      top:"88.063vw",
      right:"17.043vw"
    },
    8 :{
      top:"92.58vw",
      right:"42.164vw"
    },9 :{
      top:"109.58vw",
      right:"69.164vw"
    },
  }

  let rankStyleMap={
    1 :{
      top:"23vw",
      right:"4vw"
    },
    2:{
      top:"23.8vw",
      right:"4vw"
    },3 :{
      top:"23.2vw",
      right:"5.5vw"
    },4 :{
      top:"23.4vw",
      right:"5vw"
    },5 :{
      top:"23.1vw",
      right:"4.8vw"
    },6 :{
      top:"23.6vw",
      right:"3.8vw"
    },7 :{
      top:"23vw",
      right:"5vw"
    },
    8 :{
      top:"23.4vw",
      right:"5vw"
    },9 :{
      top:"23.4vw",
      right:"5vw"
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
    <div class="user-item" v-for="userItem in list" :key='userItem.id' :style='userItem.style'>
        <memberInfo :info='userItem' />
        <div class='rank-num' :style='userItem.rankStyle'>{{userItem.ranking}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,165.7778vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree4.png") 0 0/100% 100% no-repeat;
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