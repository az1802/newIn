<script setup >
import {ref,unref} from "vue";
import { navigateTo ,showToast} from '@utils/wechat';
import SignOutDialog from "./SignOutDialog.vue";
import AddParentConfirmPwd from './AddParentConfirmPwd.vue';

 const showSignOutDialog = ref(false);

async function signOut(){
  showSignOutDialog.value = true;
}


let addPwdDialog = ref(false),index=0
function handleParentConfirmPwd(){
  index++;
  if(index%2==0){
    addPwdDialog.value = true;
  }else{
    navigateTo("/pages/change-pwd/change-pwd")
  }

}



</script>

<template>
  <div class="page">
    <SignOutDialog  v-model:show='showSignOutDialog'></SignOutDialog>
    <NavBar title='设置' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="setting-wrapper">
      <div class="setting">
        <div class="switch-user" @click='navigateTo("/pages/my-settings/switch-user")'>
          <div class="text">切换账号</div>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-qt.png" alt="" class='img'>
        </div>
        <div class="user-info" @click='navigateTo("/pages/my-settings/user-info")'>
          <div class="text">个人信息</div>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-qt.png" alt="" class='img'>
        </div>
        <!-- <div class="parent-confirm" @click='handleParentConfirmPwd'>
          <div class="text">家长确认</div>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-qt.png" alt="" class='img'>
        </div> -->
        <div class="sign-out" @click='signOut'>退出登录</div>
      </div>
    </div>


    <AddParentConfirmPwd v-model:show='addPwdDialog' />


  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-user-info-activity.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .setting-wrapper{
    .box-size(95.467vw,127.467vw,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:2.667vw 1.867vw 4.8vw 1.867vw;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 8vw 8vw 8vw 8vw;
    .setting{
      .box-size(100%,120vw,#FEFBD7);
      padding:8vw 2.667vw 0 2.667vw;
      border-radius:6.667vw;
    }
    .switch-user,.user-info,.parent-confirm{
      .box-size(100%,80px,white);
      .flex-simple(space-between,center);
      padding:0 15px;
      box-shadow: 2px 3px 5px 3px rgba(219,214.708,163.175,1);
      border-radius: 15px;
      margin-bottom:15px;
      .text{
        .normal-font(17px,#3F3F3F);
      }
      .img{
        .box-size(13px,22px);
      }

    }
    .sign-out{
      .box-size(220px,54px);
      line-height:48px;
      text-align: center;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/sign-out-btn.png") 0 0/100% 100% no-repeat;
      .bold-font(22px,white);
      margin:60px auto 0 auto;

    }
  }

}

</style>