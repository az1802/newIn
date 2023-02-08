
<script setup>
import { useUserInfoStore } from '@/stores/user';
import {navigateTo} from "@utils/wechat"
import {useSystemInfo} from "@hooks/commonHooks";
const systemInfo = useSystemInfo();

const userInfo = useUserInfoStore();



async function signOut(){
  console.log("退出登录");
}

</script>

<template>
  <div class="page">
    <div class="nav-bar" :style="{
      paddingTop: systemInfo.statusBarHeight + 'px',
    }">
    <div class="back-wrapper" @click='signOut' :style="{
      top: systemInfo.statusBarHeight + 'px',
    }">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-icon-signout.png" alt="" class='img' />
    </div>
  </div>
    <div class="info">
      <img :src="userInfo.photo" class='avatar' alt="">
      <div class="detail">
        <div class="left">
          <div class='name'>{{ userInfo.xingming }}</div>
          <div class='school'>{{ userInfo.school }}</div>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-icon-settings.png" alt="" @click='navigateTo("/pages/my-settings/my-settings")' class='icon-setting'/>
        </div>
      </div>
    </div>

   <div class="mine-setting-wrapper">
    <scroll-view class="mine-setting" scroll-y :show-scrollbar='false' enhanced>
      <div class="setting-group">
        <div class='setting-item' @click='navigateTo("/pages/user-library/my-library")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-library.png" alt="" class='img' />
          <!-- <div class="text">我的图书馆</div> -->
        </div>
        <div class='setting-item' @click='navigateTo("/pages/my-borrowing/my-borrowing")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-borrow.png" alt="" class='img' />
          <!-- <div class="text">我的借阅</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item' @click='navigateTo("/pages/my-borrow-out/my-borrow-out")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-books.png" alt="" class='img' />
          <!-- <div class="text">我的借出</div> -->
        </div>
        <div class='setting-item' @click='navigateTo("/pages/my-credit-integral/my-credit-integral")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-credit.png" alt="" class='img' />
          <!-- <div class="text">信用积分</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item'  @click='navigateTo("/pages/my-integral/my-integral")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-integral.png" alt="" class='img' />
          <!-- <div class="text">积分</div> -->
        </div>
        <div class='setting-item'  >
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-parent.png" alt="" class='img' />
          <!-- <div class="text">家长确认</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item'  @click='navigateTo("/pages/mine/feedback")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/my-icon-feedback.png" alt="" class='img' />
          <!-- <div class="text">积分</div> -->
        </div>
        <div class='setting-item' >
          <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-icon-library.png" alt="" class='img' /> -->
          <!-- <div class="text">家长确认</div> -->
        </div>
      </div>

    </scroll-view>

   </div>

    <HomeMenuTabs class='home-menu-tabs' active='mine' />
  </div>
</template>


<style lang="less" scoped>
@import '@static/index.less';

.page {
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_login.jpg") 0 0/100% 100% no-repeat;
  position: relative;
  .nav-bar{
    .box-size(100vw,44px);
    .flex-simple(center,center);
    z-index:10000;
    box-sizing: content-box;
    .back-wrapper{
      .box-size(44px,unset);
      .pos-absolute(0 ,0 ,0 ,30px);
      z-index: 100;
      // .flex-simple(center,center);
      .img{
        .box-size(40px,40px);
      }
    }
  }

  .info {
    .box-size(100vw, unset);
    // padding-top: 80px;
    .flex-simple(flex-start, center);
    flex-direction: column;

    .avatar {
      .box-size(60px, 60px, #ccc);
      border: 1px solid white;
      border-radius: 50%;
    }
    .detail{
      margin-top: 16px;
      position:relative;
      .flex-simple(center,center);
     .left{
      .name {
        .normal-font(16px);
        .line-center(16px);
        text-align: center;
      }
      .school {
        .normal-font(14px);
        margin-top: 10px;
        .line-center(14px);
      }
      .icon-setting{
        .box-size(40px,40px);
        .pos-absolute(50%,-44px,unset,unset);
        transform: translateY(-50%);
      }
     }

    }


  }
  .mine-setting-wrapper{
    .box-size(calc(100vw - 30px),99.2vw,#F7B053);
    margin:4.533vw auto 0 auto;
    padding:1.6vw 1.6vw 3.2vw 1.6vw;
    box-shadow: 0px 6px 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 30px 30px 30px 30px;
    .mine-setting{
      .box-size(100%,94.4vw,#FEFBD7);
      padding-top:18px;
      border-radius:25px;
      .setting-group{
        .box-size(100%,unset);
        .flex-simple(space-between,center);
        padding:0 50px;
        margin-bottom:12px;
        .setting-item{
          text-align: center;
          font-size:0px;
          .img{
            .box-size(82px,82px);
          }
          .text{
            .box-size(120px,22px);
            .line-center(22px);
            text-align:center;
            .bold-font(16px);
          }
        }
      }
    }
  }

}

.home-menu-tabs {
  // .pos-fixed(unset, unset, 20px, 0);
  // z-index: 10000;
}
</style>
