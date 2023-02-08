<script setup >
import {noop,navigateTo} from "@utils/wechat";
  const props = defineProps({
    show:{
      type:Boolean,
      default:false
    }
  })
  const emit = defineEmits(["update:show"]);

function cancel(type){

  emit('update:show',false);
}

function ok(){
  navigateTo("/pages/index/index",{autoLogin:false})

  emit('update:show',false);
}
</script>

<template>
 <div class="modal-wrapper" v-if='props.show' @click='emit("update:show",false)'>
  <div class='content' @click.stop='noop'>
      <div class="text">确定退出当前账号吗?</div>
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
  background: rgba(255,255,255,0.3);
  .pos-fixed(0,0,0,0);
  z-index: 10000;
}
.content{
  .box-size(71.733vw,51.467vw);
  .pos-absolute(32.23vh,unset,unset,14.133vw);
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/sign-out-bg.png") 0 0/100% 100% no-repeat;
  .text{
    margin-top:18.667vw;
    .bold-font(19px,#A74D11);
    .line-center(19px);
    text-align: center;
  }
  .btn-group{
    .box-size(100%,8.533vw);
    padding:0 9.067vw;
    .flex-simple(space-between,center);
    margin-top:13.333vw;
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