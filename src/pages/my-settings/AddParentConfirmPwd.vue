<script setup >
import {noop,navigateTo,showToast} from "@utils/wechat";
import {ref,unref} from "vue";
const props = defineProps({
    show:{
      type:Boolean,
      default:false
    }
  })
  const emit = defineEmits(["update:show"]);



   let pwd = ref('');
   let pwdConfirm = ref('');
function cancel(type){
  pwd.value = "";
  pwd.value = "";
  emit('update:show',false);
}

function ok(){
  if(unref(pwd).trim()!=unref(pwdConfirm)){
  showToast("两次输入的密码不一样");
  return;
  }
  showToast("添加密码成功");


  emit('update:show',false);
}




</script>

<template>
 <div class="modal-wrapper" v-if='props.show' @click='emit("update:show",false)'>
  <div class='content' @click.stop='noop'>
      <div class="text">请添加家长确认密码</div>
      <div class="input-wrapper">
        <input type="text" v-model='pwd' class='input' placeholder='请输入密码' placeholder-style='font-size:15px;color:#7F7D7D;font-family:HYCuYuanJ'>
      </div>
      <div class="input-wrapper">
        <input type="text" v-model='pwdConfirm' class='input' placeholder='请再次输入密码' placeholder-style='font-size:15px;color:#7F7D7D;font-family:HYCuYuanJ'>
      </div>
      <div class="btn-group">
        <div class="btn cancel" @click='cancel'>取消</div>
        <div class="btn ok" @click='ok'>确定</div>
      </div>
  </div>
 </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.modal-wrapper{
  background: rgba(0,0,0,0.3);
  .pos-fixed(0,0,0,0);
  z-index: 10000;
}
.content{
  .box-size(71.733vw,51.467vw);
  .pos-absolute(32.23vh,unset,unset,14.133vw);
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/sign-out-bg.png") 0 0/100% 100% no-repeat;
  .text{
    margin-top:5vw;
    .bold-font(19px,#A74D11);
    .line-center(19px);
    text-align: center;
  }
  .input-wrapper{
    .box-size(100%,32px,transparent);
    .line-center(32px);
    padding:0 32px;
    margin-top:4vw;
    .input{
      .box-size(100%,100%,white);
      .line-center(32px);
      text-indent:12px;
      border-radius:4px;
    }
  }
  .btn-group{
    .box-size(100%,8.533vw);
    padding:0 9.067vw;
    .flex-simple(space-between,center);
    margin-top:3vw;
    .btn{
      .box-size(84px,32px);
      .line-center(32px);
      .bold-font(12px,white);
      text-align:center;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_button_2.png") 0 0/100% 100% no-repeat;
    }
  }

}
</style>