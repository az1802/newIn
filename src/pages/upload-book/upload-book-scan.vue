<script setup >
import {ref} from "vue";
import {scanCode,showToast} from '@utils/wechat';
let isbnCode = ref("")
async function scanIsbn(){
  try{
    let res = await scanCode();
    if(res){
    // if(res&&res.scanType=="EAN_13"){
      isbnCode.value=res.result
    }else{
      showToast("ISBN码识别错误")
    }
  }catch(err){
    showToast("ISBN码识别错误")
  }
}

</script>

<template>
  <div class='page'>
    <NavBar title='扫描图书' />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <div class="upload-wrapper" @click='scanIsbn'>扫描ISBN码</div>
    <div>isbn码结果:{{isbnCode}}</div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
}
</style>