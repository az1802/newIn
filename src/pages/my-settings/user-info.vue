<script setup >
import { navigateTo } from '@utils/wechat';
import { showToast } from '../../utils/wechat';



async function signOut(){
  showToast("登出")
}
</script>

<template>
  <div class="page">
    <NavBar title='个人信息' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="user-info-wrapper">
        <div class="avatar">
          <img src="" alt="">
          <div class="text">修改头像</div>
        </div>
        <div class="info">
          <div class="form-item">
            <div class="label">姓名</div>
            <div class="value">张家明</div>
          </div>
          <div class="form-item">
            <div class="label">学校</div>
            <div class="value">平洲小学</div>
          </div>
          <div class="form-item">
            <div class="label">班级</div>
            <div class="value">二年级三班</div>
          </div>
        </div>
    </div>

  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-user-info-activity.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .user-info-wrapper{
    .box-size(95.467vw,375px,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:24vw 1.867vw 4.8vw 1.867vw;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 8vw 8vw 8vw 8vw;
    .avatar{
      .box-size(94px,94px,white);
      border-radius: 50%;
      margin:0 auto;
      .pos-absolute(20px,unset,unset,50%);
      transform: translateX(-50%);
      .img{
        .box-size(94px,94px,#ccc);
      }
    }
    .info{
      .box-size(100%,267px,white);
      padding:85px 2.4vw 0 2.4vw;
      border-radius:6.667vw;
      .form-item{
        .box-size(100%,54px);
        .flex-simple(space-between,center);
        border-bottom: 1px solid #DDDDDD;
        padding:0 4.533vw;
        .label{
          .normal-font(17px,#3F3F3F);
        }
        .value{
          .normal-font(17px,#646A6D);
        }
        &:last-child{
          border-bottom: 0px solid transparent;
        }
      }
    }

  }

}

</style>