<script setup>

import {ref,computed,unref} from "vue";
import {navigateTo} from "@utils/wechat";

const props = defineProps({
  info:{
    type:Object,
    default:()=>{
       return {
        name:"",
        rank:"",
        avatarUrl:"",
        backgroundUrl:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number.png",
        tagUrl:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_tag01.png"
       }
    }
  }
})


function goToUserLibaray(item){
  let userInfo = uni.getStorageSync("userInfo");
  if(item.student_id==userInfo.student_id){
    navigateTo("/pages/user-library/my-library",{
      xingming:item.xingming,
      school_id:userInfo.school_id,
      student_id:item.student_id,
    })
  }else{
    navigateTo("/pages/user-library/user-library",{
      xingming:item.xingming,
      school_id:userInfo.school_id,
      student_id:item.student_id,
    })
  }

  }
</script>

<template>
  <div class='info-wrapper' @click='goToUserLibaray(props.info)'>
    <div class="name">{{props.info.xingming}}</div>
    <div class="avatar-wrapper">
      <img :src="props.info.backgroundUrl" alt="" class='bg' />
      <img :src="props.info.tagUrl" alt="" class='tag'>
      <img :src="props.info.photo" alt="" class='avatar-img'>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.info-wrapper{
  display: inline-block;
  .name{
    .bold-font(14px,#FFFDF9);
    text-align: center;
    .line-center(14px);
  }
  .avatar-wrapper{
    .box-size(56px,63px);
    margin-top:2px;
    position: relative;
    .bg{
      .box-size(100%,100%);
      .pos-absolute(0,0,0,0);
      z-index: 100;
    }
    .tag{
      .box-size(24px,24px);
      .pos-absolute(0px,-6px,unset,unset);
      z-index: 900;
    }
    .avatar-img{
      .box-size(52px,52px,#ccc);
      border-radius: 50%;
      margin:2px;
      z-index: 100;
    }
  }
}
</style>
