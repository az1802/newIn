<script setup >
import {ref,unref,reactive} from "vue";
import { navigateTo ,showToast} from '@utils/wechat';


let pwdObj = reactive({
  curPwd:"",
  newPwd:"",
  newConfirmPwd:""
})

async function submit(){
  if(pwdObj.newPwd!=pwdObj.newConfirmPwd){
  showToast("新密码两次输入的密码不一样");
  return;
  }
  showToast("修改密码成功");

}


</script>

<template>
  <div class="page">
    <SignOutDialog  v-model:show='showSignOutDialog'></SignOutDialog>
    <NavBar title='修改密码' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="setting-wrapper">
      <div class="setting">
        <div class="input-wrapper">
          <input type="text" v-model='pwdObj.curPwd' class='input' placeholder='请输入当前密码' placeholder-style='font-size:15px;color:#ccc;font-family:HYCuYuanJ'>
        </div>

        <div class="input-group">
          <input type="text" v-model='pwdObj.newPwd' class='input'  placeholder='请输入新密码' placeholder-style='font-size:15px;color:#ccc;font-family:HYCuYuanJ'>
          <div class="divider" ></div>
          <input type="text" v-model='pwdObj.newConfirmPwd' class='input'  placeholder='请再次输入新密码' placeholder-style='font-size:15px;color:#ccc;font-family:HYCuYuanJ'>
        </div>


        <div class="tooltip-text">
          <div class="text">如果您忘记当前密码</div>
          <div class="text">请联系老师或客服人员</div>
        </div>

        <div class="submit" @click='submit'>提交</div>
      </div>
    </div>

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
    // box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 8vw 8vw 8vw 8vw;
    .setting{
      .box-size(100%,120vw,#FEFBD7);
      padding:8vw 2.667vw 0 2.667vw;
      border-radius:6.667vw;
      .input-wrapper{
        .box-size(100%,54px,white);
        padding:0 12px;
        .line-center(54px);
        border-radius:12px;
        // box-shadow: 0px 6px 0px 0px rgba(208,135.595,40.786,1);
        .input{
          .box-size(100%,54px);
          .line-center(54px);
          .bold-font(16px,black);
        }
      }
      .input-group{
        .box-size(100%,unset,white);
        padding:0 12px;
        border-radius:12px;
        // box-shadow: 0px 6px 0px 0px rgba(208,135.595,40.786,1);
        margin-top:22px;
        .input{
          .box-size(100%,54px);
          .line-center(54px);
          .bold-font(16px,black);
        }
        .divider{
          .box-size(100%,1px,#e8e5e5)
        }
      }
      .tooltip-text{
        line-height:1.5;
        margin-top:40px;
        .text{
          .normal-font(14px,black);
          text-align:center;
        }
      }



    }

    .submit{
      .box-size(220px,54px);
      line-height:48px;
      text-align: center;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/sign-out-btn.png") 0 0/100% 100% no-repeat;
      .bold-font(22px,white);
      margin:50px auto 0 auto;

    }
  }

}

</style>