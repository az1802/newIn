<script setup>
import { navigateTo ,wechatSignUp,getUserInfo,showToast,getWechatUserId} from '@/utils/wechat';
import { useUserInfoStore } from '@/stores/user'
import {onBeforeMount} from "vue";
import API from "@/api/index";

const userInfoStore = useUserInfoStore();
let isLogining = false;


// 检测是否是学生,或者是老师
onBeforeMount(async ()=>{
  isLogining = true;
  let userInfo = await getWechatUserId();
  isLogining = false
  console.log('静默登录获取用户信息: ', userInfo);
  if(userInfo){
    userInfoStore.setUserInfo(userInfo);
    let {usertype} = userInfo
    console.log('usertype: ', usertype);
    if(usertype==0){
      navigateTo("/pages/login/login")
    }else if(usertype==1){
      navigateTo("/pages/home/home")
    }else if(usertype==2){
      navigateTo("/package-teacher/home/home")
    }
  }
})


async function loginSystem(){
  if(isLogining){
    return ;
  }
  isLogining = true;
  let wechatUserInfo = await getUserInfo();
  let codeMsg = await uni.login();

  if (!wechatUserInfo || typeof wechatUserInfo === "object" &&wechatUserInfo.errMsg !== "getUserProfile:ok") {
        await showToast("获取用户信息失败,请重新授权");
        isLogining = false;
        return;
      }
  const {userInfo } = wechatUserInfo || {};
  // 绑定用户信息
  let res = await wechatSignUp({
    code:codeMsg.code,
    nickname:userInfo.nickName,
    avataurl:userInfo.avatarUrl
  });

  if(res){
    userInfoStore.setUserInfo(userInfo);
    navigateTo("/pages/login/login");
  }

  isLogining = false;


}

</script>
<template>
  <div class='page'>
    <div class="login-btn" @click='loginSystem'>登录系统</div>
  </div>
</template>



<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_welcome.jpg") center/cover no-repeat;
  position:relative;

  .login-btn{
    .box-size(61.8vw,10.1vw);
    .line-center(10.1vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/login-system-btn%20.png") 0 0/100% 100% no-repeat;
    text-align:center;
    .bold-font(5.87vw,white);
    .pos-fixed(unset,19.1vw,45px,19.1vw);
  }
}

</style>
