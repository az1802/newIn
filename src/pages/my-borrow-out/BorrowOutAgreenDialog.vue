<script setup >
import {noop,navigateTo} from "@utils/wechat";
import {ref} from "vue";
  const props = defineProps({
    show:{
      type:Boolean,
      default:false
    }
  })
  const emit = defineEmits(["update:show"]);


function ok(){
  // navigateTo("/pages/index/index",{autoLogin:false})
  emit('update:show',false);
}
let applyingText = ref("请尽快将次数放入学校的图书分享柜,你的伙伴已经急切的想阅读你分享的好书啦!")
</script>

<template>
 <div class="modal-wrapper" v-if='props.show' @click='emit("update:show",false)'>
  <div class='content' @click.stop='noop'>
      <div class="title">"感谢你的分享"</div>
      <div class="text">{{applyingText}}</div>
      <div class="btn-group">
        <div class="btn ok" @click='ok'>好的</div>
      </div>
  </div>
 </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.modal-wrapper{
  background: rgba(0,0,0,0.6);
  .pos-fixed(0,0,0,0);
  z-index: 100000;
}
.content{
  .box-size(62.933vw,79.733vw);
  .pos-absolute(32.23vh,unset,unset,18.5335vw);
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/borrow-applying.png") 0 0/100% 100% no-repeat;
  padding:0 7.2vw;
  .title{
    margin-top:27vw;
    .bold-font(18px,#A74D11);
    .line-center(24px);
    text-align: center;
  }
  .text{
    .bold-font(18px,#A74D11);
    .line-center(24px);
    margin-top: 4px;
  }
  .btn-group{
    .box-size(106px,37px);
    .flex-simple(center,center);
    .pos-absolute(unset,unset,5.867vw,50%);
    transform:translateX(-50%);
    .btn{
      .box-size(106px,37px);
      .line-center(37px);
      .bold-font(16px,white);
      text-align:center;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_button_2.png") 0 0/100% 100% no-repeat;
    }
  }

}
</style>