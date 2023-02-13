<script setup >

import {noop,navigateTo,scanCode,showToast} from "@utils/wechat";
  const props = defineProps({
    show:{
      type:Boolean,
      default:false
    }
  })
  const emit = defineEmits(["update:show"]);

 async function scanIsbn(){
  try{
    let res = await scanCode();
    console.log('res: ', res);
    if(res){
    // if(res&&res.scanType=="EAN_13"){
      navigateTo("/pages/upload-book/upload-book-scan",{
        scanCode:res.result
      });
    }else{
      showToast("ISBN码识别错误")
    }
  }catch(err){
    console.log('err: ', err);
    showToast("ISBN码识别错误")
  }
}

function uploadBook(type){

  if(type=='scan'){
    scanIsbn();
  }else{
    navigateTo("/pages/upload-book/upload-book-manually")
  }
  emit('update:show',false);
}
</script>

<template>
 <div class="modal-wrapper" v-if='props.show' @click='emit("update:show",false)'>
  <div class='content' @click.stop='noop'>
    <div class="scan-add"  @click='uploadBook("scan")'>
      <div class="area"></div>
        <div class="text">扫描添加</div>
    </div>
    <div class="manually-add" @click='uploadBook("manually")'>
      <div class="area"></div>
      <div class="text">手动添加</div>
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
  .box-size(75.467vw,52vw);
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-method-background.png") 0 0/100% 100% no-repeat;
  .flex-simple(space-between);
  .pos-absolute(unset,14.933vw,41vw,unset);
  .scan-add,.manually-add{
    .area{
      .box-size(18vw,18vw);
    }
    .text{
      .bold-font(4.8vw,#A14D0F);
      margin-top:3.2vw;
    }
  }
  .scan-add{
    .pos-absolute(unset,unset,13.333vw,13.333vw);
  }
  .manually-add{
    .pos-absolute(unset,13.333vw,13.333vw,unset);
  }
}
</style>