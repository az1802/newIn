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
      top:"-4.768vw",
      right:"22.976vw"
    },
    2:{
      top:"6.86vw",
      right:"40.749vw"
    },3 :{
      top:"20.125vw",
      right:"64.048vw"
    },4 :{
      top:"57.406vw",
      right:"26.671vw"
    },5 :{
      top:"66.835vw",
      right:"40.73vw"
    },6 :{
      top:"84.213vw",
      right:"65.12vw"
    },7 :{
      top:"104.063vw",
      right:"17.043vw"
    },
    8 :{
      top:"110.58vw",
      right:"42.164vw"
    },9 :{
      top:"129.58vw",
      right:"69.164vw"
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
    .box-size(100vw,165.7778vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree4.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
  }
</style>