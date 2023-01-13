<script setup >
import { navigateTo ,showToast} from '@utils/wechat';
import {ref} from "vue";
let feedBackText = ref("");
let imgList = ref([1,2]);


function delImg(item){
  imgList.value.splice(item-1,1)
}

async function bindUser(){
  showToast("绑定用户")
}

async function switchUser(){
  showToast("切换用户")
}

</script>

<template>
  <div class="page">
    <NavBar title='意见反馈' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="group-wrapper">
      <div class="text-area-wrapper">
          <textarea  class='text-area' v-model='feedBackText'  maxlength='200' placeholder='你的宝贵意见将帮助我们不断改进' placeholder-style='font-size:15px;color:#6F6F6F;font-family:HYCuYuanJ'></textarea>
          <div class='word-tooltip'>{{feedBackText.length}}/200</div>
        </div>
        <div class='img-list-wrapper'>
          <div class="img-item-wrapper" v-for='item in imgList' :key='item'>
            <img src="" alt="" class='img'>
            <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-del.png" alt="" class='img-del' @click='delImg(item)'>
          </div>

          <img class='add-img' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-feeback-add-img.png" alt="">
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
  .group-wrapper{
    .box-size(92vw,392px,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:20px 12px unset 12px;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 30px;
    .text-area-wrapper{
      position:relative;
      .box-size(100%,unset);
      padding:5.333vw 3.2vw 0 3.2vw;
      .text-area{
        .box-size(100%,233px,#FEFBD7);
        border-radius: 25px;
        padding:20px;
      }
      .word-tooltip{
        .box-size(345px,12px);
        .pos-absolute(unset,0px,20px,unset);
        .normal-font(12px,#474747);
        z-index:100;
        text-align: right;
        padding-right:20px;
      }
    }
    .img-list-wrapper{
      .box-size(100%,95px);
      margin-top:22px;
      .flex-simple(flex-start,center);
      padding:0 3.2vw;
      .img-item-wrapper{
        position:relative;
        margin-right:20px;
        .img{
          .box-size(95px,95px,#ccc);
          border-radius: 8px;
        }
        .img-del{
          .box-size(26px,26px);
          .pos-absolute(-13px,-13px,unset,unset);

        }
      }
      .add-img{
        .box-size(95px,95px);
      }
    }

  }

}

</style>