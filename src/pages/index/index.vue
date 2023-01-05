<script setup>
import { navigateTo ,wechatSignUp} from '@/utils/wechat';
import { useUserInfoStore } from '@/stores/user'

import API from "@/api";
const userInfoStore = useUserInfoStore();

async function loginSystem(){
  // 静态获取usertId,查询是否为本地用户
  let userId = await wechatSignUp();
  let userInfo = await API.User.getUserInfo();
  userInfoStore.setUserInfo({
    ...userInfo
  })
  if(userInfoStore.identity!=='other'){
    console.log('userInfoStore.identity: ', userInfoStore.identity);
  }else{
    navigateTo("/pages/login/login")
  }
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
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_welcome.jpg") 0 0/100% 100% no-repeat;
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
