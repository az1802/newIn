<script setup >
  import {useSystemInfo} from "@hooks/commonHooks";
  const systemInfo = useSystemInfo();

</script>

<template>
  <div class="page">
    <NavBar title='我的积分' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div :style='{ height: systemInfo.statusBarHeight + "px"}'></div>
    <div class='intergral-wrapper' >
      <div class="high">
        <div class="text">1200</div>
      </div>
    </div>
    <div class="diandi-wrapper">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/intergal-diandi.png" alt="" class='diandi-record'>
    </div>
    <scroll-view :show-scrollbar='false' enhanced class="record-list" scroll-y>
      <div class='one'></div>
      <div class='one'></div>
      <div class='one'></div>
    </scroll-view>
  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_3.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .intergral-wrapper{
    .high{
      .box-size(60vw,46.4vw);
      margin:16vw auto 0 auto;
      text-align:center;
      padding-top:14vw;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/integral-current.png") 0 0/100% 100% no-repeat;
      .text{
        .bold-font(40px,#AD2E01);
        &::after{
          content:"积分";
          .normal-font(14px,#AD2E01);
          position: relative;
          top:-2px;
          left:2px
        }
      }
    }
  }
  .diandi-wrapper{
    .box-size(30.667vw,12vw);
    margin:12.533vw auto 0 auto;
    .diandi-record{
      .box-size(30.667vw,12vw);
    }
  }
  .record-list{
    .flex-simple(center,flex-start);
    .box-size(100vw,64vw);
    margin-top:4vw;
    .one{
      .box-size(65.333vw,21.333vw);
      .flex-simple(space-between,flex-start);
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/intergral-rect.png") 0 0/100% 100% no-repeat;
      margin: 0 auto 4vw auto;
      // .left{
      //   .img{

      //   }
      //   .detail{
      //     .type-text{

      //     }
      //     .date-time{

      //     }
      //     .num{

      //     }
      //   }
      // }
      // .right{

      // }
    }
  }

}
</style>