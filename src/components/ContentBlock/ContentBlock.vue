<script setup >

  const props = defineProps({
    bottomRattan:{
      type:Boolean,
      default:true
    },
    topRattan:{
      type:Boolean,
      default:true
    },
    topLong:{
      type:Boolean,
      default:false
    }
  })

</script>

<template>
  <div class='content-wrapper'>
    <!-- <img src="" alt="" class='border-img'> -->
    <!-- <img src="" alt="" class='top-img'> -->
    <div class="top" :class='[topRattan?"rattan":"",topLong?"long":""]'></div>
    <div class="content">
      <div class="slot">
        <slot />
      </div>
    </div>
    <div class="bottom" :class='[bottomRattan?"rattan":""]'></div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.content-wrapper{
  .box-size(345px,unset);
  font-size:0px;
  margin:0 auto;
  .top{
    .box-size(345px,44px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board2.png") 0 0/100% 100% no-repeat;
    &.no-rattan{
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board5.png") 0 0/100% 100% no-repeat;
      transform:rotate(180deg) ;
    }
    &.rattan.long{
      height:67px;
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board4.png") 0 0/100% 100% no-repeat;
    }
  }
  .content{
    .box-size(345px,unset);
    min-height:60px;
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board3.png") 0 0/100% auto repeat;
    position:relative;
    z-index:1000;
    .slot{
      .box-size(345px,unset);
      // position:relative;
      // top:-6px;
    }
  }


  .bottom{
    .box-size(345px,44px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board5.png") 0 0/100% auto no-repeat;
    &.rattan{
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-Board.png") 0 0/100% 100% no-repeat;
    }
  }
}


</style>