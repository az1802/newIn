<script setup >
import {ref,unref} from "vue";
import {showToast,navigateTo,getUserInfo} from "@utils/wechat"
import { useUserInfoStore } from '@/stores/user';
import {bindUser} from "@/api/user";

const userInfoStore = useUserInfoStore();


const identity = ref("student");
const userName = ref("");
const userPwd = ref("");


async function bindIndetity(){
  if(!unref(userName).trim()){
    showToast("用户名不能为空");
    return ;
  }
  if(!unref(userPwd).trim()){
    showToast("密码不能为空");
    return ;
  }
  let params = {
    userName:unref(userName),
    userPwd:unref(userPwd),
    identity:unref(identity),
    wxuser_id:userInfoStore.wxuser_id
  }
  let bindRes = await bindUser({
    params
  });

  console.log('bindRes: ', bindRes);
  if(!bindRes){
    return
  }

  //根据身份跳转到不同页面
  if(unref(identity)=="student"){
    navigateTo("/pages/home/home")
  }else{
    navigateTo("/package-teacher/home/home")
  }

}


</script>

<template>
  <div class='page'>
    <div class="login-wrapper">
      <div class="identity-sel">
        <div class="label">用户身份:</div>
        <div class='val'  @click='identity="student"'>
          <CustomRadio :checked='identity=="student"'/>
          <div class="text">学生</div>

        </div>
        <div class='val'  @click='identity="teacher"'>
          <CustomRadio :checked='identity=="teacher"'/>
          <div class="text">教师</div>
        </div>
      </div>
      <input class='name-input' v-model='userName' type='text' placeholder='请输入用户名' placeholder-style='font-size:15px;color:#7F7D7D;font-family:HYCuYuanJ'/>
      <input class='password-input'  v-model='userPwd'  placeholder='请输入密码' placeholder-style='font-size:15px;color:#7F7D7D;font-family:HYCuYuanJ'/>
      <div class="submit-btn" @click='bindIndetity'></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/login-page-background.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .login-wrapper{
    .box-size(311px,350px);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/login-bind.png") 0 0/100% 100% no-repeat;
    margin: 0 auto 0 auto;
    .pos-absolute(20.8vw,0,unset,0);
    .identity-sel{
      .pos-absolute(94px,unset,unset,36px);
      .flex-simple(flex-start,center);
      .label{
        .normal-font(15px,#7F7D7D);
        margin-right:9px;
      }
      .val{
        margin-right:32px;
        .flex-simple(flex-start,center);
        .text{
          margin-left:7px;
          .normal-font(15px,#7F7D7D);
        }
      }
    }
    .name-input,.password-input{
      .box-size(251px,38px,transparent);
      padding-left:25px;
    }
    .name-input{
      .pos-absolute(133px,0,unset,30px);
    }
    .password-input{
      .pos-absolute(192px,0,unset,30px);
    }
    .submit-btn{
      .box-size(251px,46px);
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/login-submit-btn.png") 0 0/100% 100% no-repeat;
      .pos-absolute(unset,30px,48px,30px);
    }
  }
}
</style>