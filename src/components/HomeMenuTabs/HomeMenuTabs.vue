<script setup >
import {navigateTo} from "@utils/wechat"
const props = defineProps({
  active:{
    type:String,
    default:"share"
  }
})




</script>

<template>
  <div class='menu-wrapper'>
    <div class="menu-item" @click='navigateTo("/pages/class-library/class-library")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/my_icon_library.png" alt="" class='img' :class='[props.active=="class-library"?"active":""]'>
      <div class='text'>图书馆</div>
    </div>
    <div class="menu-item"  @click='navigateTo("/pages/index/index")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/tr_book_bg.png" alt="" class='img' :class='[props.active=="share"?"active":""]'>
      <div class='text'>共享图书</div>
    </div>
    <div class="menu-item"  @click='navigateTo("/pages/mine/mine")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/img_studentinfo_read.png" alt="" class='img' :class='[props.active=="mine"?"active":""]'>
      <div class='text'>我的</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.menu-wrapper{
  .box-size(100vw,120px);
  .flex-simple(space-between,flex-end);
  padding:0 40px;
  .menu-item{
    .img{
      .box-size(60px,50px);
      &.active{
        transform: scale(1.5);
      }
    }
    .active{

    }
  }

}
</style>