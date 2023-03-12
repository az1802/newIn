<script setup >
import {ref} from "vue";
import {navigateTo,navigateBack} from "@utils/wechat";
import {useSystemInfo} from "@hooks/commonHooks";

const systemInfo = useSystemInfo();

function goBack(){
  navigateBack()
  }



</script>

<template>
  <div class='page'>
    <div class="nav-bar" :style="{
      paddingTop: systemInfo.statusBarHeight + 'px'
    }">
       <div class="back-wrapper" @click='goBack' :style="{
      top: systemInfo.statusBarHeight + 'px',
    }">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-icon-fh.png" alt="" class='img' />

    </div>
    <div class="text">我的</div>

    </div>
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-top-bg.png" alt="" class="top-bg">



  <div class="info">
    <div class='avatar'>
      <img src="" alt="" class='img'>
    </div>
    <div class="iden">学校管理员</div>
    <div class="school">深圳龙华二外</div>
  </div>

  <div class="list">
    <div class="item" @click='navigateTo("/package-teacher/general-setting/switch-user")'>
      <div class="left">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-role.png" alt="" class='tag'>
        <div class="label">切换身份</div>
      </div>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-goto.png"  alt="" class='right'>
    </div>
    <div class="item" @click='navigateTo("/package-teacher/general-setting/change-password")'>
      <div class="left">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-pwd.png" alt="" class='tag'>
        <div class="label">修改密码</div>
      </div>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-goto.png"  alt="" class='right'>
    </div>
    <div class="item"  @click='navigateTo("/pages/index/index")'>
      <div class="left">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-login-out.png" alt="" class='tag'>
        <div class="label">重新登录</div>
      </div>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-goto.png"  alt="" class='right'>
    </div>
    <div class="item">
      <div class="left">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-version.png" alt="" class='tag'>
        <div class="label">查看版本</div>
      </div>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/setting-icon-goto.png"  alt="" class='right'>
    </div>
  </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  background-color: #F5F5F5;
  height:100vh;
  font-size:0px;
  .nav-bar{
    .box-size(100vw,44px);
    .flex-simple(center,center);
    z-index:10000;
    box-sizing: content-box;
    .pos-absolute(0,0,unset,unset);
    .back-wrapper{
      .box-size(33px,unset);
      .pos-absolute(0 ,0 ,0 ,6px);
      z-index: 100;
      .flex-simple(center,center);
      .img{
        .box-size(33px,33px);
      }
    }
    .text{
      .bold-font(18px,white);
    }
  }
  .top-bg{
    .box-size(100vw,51.47vw);
  }
  .info{
    .flex-simple(flex-start,center);
    flex-direction:column;
    padding-bottom:30px;
    padding-top:43px;
    background:white;
    position:relative;
    .avatar{
      .box-size(86px,86px);
      border-radius:50%;
      .img{
        border:1px solid white;
        .box-size(85px,85px,#ccc);
        border-radius:50%;
      }
      .pos-absolute(-60px,unset,unset,50%);
      transform:translateX(-50%);
    }
    .iden{
      .bold-font(18px,#434343);
      .line-center(18px);
      text-align:center;
    }
    .school{
      margin-top:9px;
      .normal-font(12px,#434343);
      .line-center(12px);
      text-align:center;
    }
  }

  .list{
    border-top:1px solid #EBEBEB;
    background:white;
    .item{
      height:73px;
      .flex-simple(space-between,center);
      box-sizing:border-box;
      padding:0 29px 0 17px;
      .left{
        .flex-simple(flex-start,center);
        .tag{
          .box-size(16px,18px);
        }
        .label{
          margin-left:16px;
          .normal-font(15px,#434343);
          .line-center(15px);
        }
      }
      .right{
        .box-size(10px,16px);
      }
    }
  }

}
</style>