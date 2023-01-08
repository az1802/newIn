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
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/tab-icon-library.png" alt="" class='library-img' :class='[props.active=="class-library"?"active":""]'>
      <!-- <div class='text'>图书馆</div> -->
    </div>
    <div class="menu-item"  @click='navigateTo("/pages/index/index")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/tab-icon-share.png" alt="" class='share-img' :class='[props.active=="share"?"active":""]'>
      <!-- <div class='text'>共享图书</div> -->
    </div>
    <div class="menu-item"  @click='navigateTo("/pages/mine/mine")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/tab-icon-me.png" alt="" class='me-img' :class='[props.active=="mine"?"active":""]'>
      <!-- <div class='text'>我的</div> -->
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
    font-size:0px;
    .library-img{
      .box-size(16vw,11.733vw);
      &.active{
        .box-size(60px,50px);
      }
    }
    .share-img{
      .box-size(60px,44px);
      &.active{
        .box-size(30.2vw,22.4vw);
      }
    }
    .me-img{
      .box-size(14.4vw,14.667vw);
      &.active{
        .box-size(60px,50px);
      }
    }

  }

}
</style>