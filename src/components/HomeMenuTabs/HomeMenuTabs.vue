<script setup >
import {navigateTo,redirectTo} from "@utils/wechat"
const props = defineProps({
  active:{
    type:String,
    default:"share"
  }
})


function switchTab(name){
  if(name ==props.active ){
    return;
  }
  if(name == "class-library"){
    redirectTo("/pages/class-library/class-library")
  }else if(name=="share"){
    redirectTo("/pages/home/home")
  }else{
    redirectTo("/pages/mine/mine")
  }
}




</script>

<template>
  <div class='menu-wrapper'>
    <div class="menu-item" @click='switchTab("class-library")'>
      <img v-if='props.active!=="class-library"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_library_01.png" alt=""  class='library-img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_library_02.png" alt="" class='library-img'>
      <!-- <div class='text'>图书馆</div> -->
    </div>
    <div class="menu-item"  @click='switchTab("share")'>
      <img v-if='props.active!=="share"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_sharebooks_01.png" alt=""  class='share-img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_sharebooks_02.png" alt="" class='share-img'>
      <!-- <div class='text'>共享图书</div> -->
    </div>
    <div class="menu-item"  @click='switchTab("name")'>
      <img v-if='props.active!=="mine"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_my_01.png" alt=""  class='my-img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/nav_ico_my_02.png" alt="" class='my-img'>
      <!-- <div class='text'>我的</div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.menu-wrapper{
  .box-size(100vw,unset);
  .flex-simple(space-between,flex-end);
  padding:0 6vw;
  background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Navigationbackground.png") left bottom / 100vw 20.184vw no-repeat;
  top:6px;
  .pos-absolute(unset,unset,0px,0);
  z-index: 10000;
  padding-bottom:12px;
  .menu-item{
    font-size:0px;
    .library-img,.share-img,.my-img{
      .box-size(28.267vw,23.067vw);
    }
  }

}
</style>