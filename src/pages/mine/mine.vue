
<script setup>
import { useUserInfoStore } from '@/stores/user';
import {navigateTo} from "@utils/wechat"
const userInfo = useUserInfoStore();

</script>

<template>
  <div class="page">

    <div class="info">
      <img :src="userInfo.img" class='img' alt="">
      <div class='name'>{{ userInfo.name }}</div>
      <div class='school'>{{ userInfo.school }}</div>
    </div>

    <div class="mine-setting">
      <div class="setting-group">
        <div class='setting-item' @click='navigateTo("/pages/my-library/my-library")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-icon-library.png" alt="" class='img' />
          <!-- <div class="text">我的图书馆</div> -->
        </div>
        <div class='setting-item' @click='navigateTo("/pages/my-borrowing/my-borrowing")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing.png" alt="" class='img' />
          <!-- <div class="text">我的借阅</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item' @click='navigateTo("/pages/my-borrow-out/my-borrow-out")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-out.png" alt="" class='img' />
          <!-- <div class="text">我的借出</div> -->
        </div>
        <div class='setting-item' @click='navigateTo("/pages/my-credit-integral/my-credit-integral")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-credit-integral.png" alt="" class='img' />
          <!-- <div class="text">信用积分</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item'  @click='navigateTo("/pages/my-integral/my-integral")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-integral.png" alt="" class='img' />
          <!-- <div class="text">积分</div> -->
        </div>
        <div class='setting-item'  @click='navigateTo("/pages/parent-confirm/parent-confirm")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-confirm.png" alt="" class='img' />
          <!-- <div class="text">家长确认</div> -->
        </div>
      </div>
      <div class="setting-group">
        <div class='setting-item'  @click='navigateTo("/pages/my-integral/my-integral")'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-feedback.png" alt="" class='img' />
          <!-- <div class="text">积分</div> -->
        </div>
        <div class='setting-item' >
          <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-icon-library.png" alt="" class='img' /> -->
          <!-- <div class="text">家长确认</div> -->
        </div>
      </div>

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

  .info {
    .box-size(100vw, unset);
    padding-top: 80px;
    .flex-simple(flex-start, center);
    flex-direction: column;

    .img {
      .box-size(60px, 60px, #ccc);
      border: 1px solid white;
      border-radius: 50%;
    }

    .name {
      .normal-font(16px);
      margin-top: 16px;
    }

    .school {
      .normal-font(14px);
      margin-top: 10px;
    }
  }
  .mine-setting{
    .box-size(calc(100vw - 60px),unset);
    border:1px solid red;
    margin:40px auto 0 auto;
    padding:0 30px;
    .setting-group{
      .box-size(100%,unset);
      .flex-simple(space-between,center);
      margin-top:18px;
      .setting-item{
        text-align: center;
        font-size:0px;
        .img{
          .box-size(82px,70px);
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

.home-menu-tabs {
  .pos-fixed(unset, unset, 30px, 0);
}
</style>
