<script setup >
import { navigateTo ,showToast} from '@utils/wechat';
import {ref} from "vue";
let appealText = ref("");
let imgList = ref([1,2]);


function delImg(item){
  imgList.value.splice(item-1,1)
}


async function sumbit(){

}

</script>

<template>
  <div class="page">
    <NavBar title='图书破损申诉' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="group-wrapper">
      <div class="text-area-wrapper">
          <textarea  class='text-area' v-model='appealText'  maxlength='200' placeholder='请输入图书破坏描述' placeholder-style='font-size:15px;color:#6F6F6F;font-family:HYCuYuanJ'></textarea>
          <div class='word-tooltip'>{{appealText.length}}/100</div>
        </div>
    </div>
    <div class='img-list-wrapper'>
      <div class="img-item-wrapper" v-for='item in imgList' :key='item'>
        <img src="" alt="" class='img'>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-del-2.png" alt="" class='img-del' @click='delImg(item)'>
      </div>

      <img class='add-img' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-appeal-add-img.png" alt="">
    </div>
    <div class="btn-wrapper">
      <div class="btn" @click='sumbit'>提交</div>
    </div>

  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-activity-2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .group-wrapper{
    .box-size(92vw,65.333vw,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:6px 6px 6px 6px;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 30px;
    .text-area-wrapper{
      position:relative;
      .box-size(100%,unset);
      .text-area{
        .box-size(100%,62.133vw,#FEFBD7);
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
  }
  .img-list-wrapper{
    .box-size(100%,36.533vw);
    margin-top:22px;
    .flex-simple(flex-start,center);
    padding:0 3.2vw;
    .img-item-wrapper{
      position:relative;
      margin-right:25px;
      .img{
        .box-size(27.2vw,36.533vw,#ccc);
        border-radius: 1.6vw;
      }
      .img-del{
        .box-size(8vw,8vw);
        .pos-absolute(-4vw,-4vw,unset,unset);

      }
    }
    .add-img{
      .box-size(27.2vw,36.533vw);
    }
  }
  .btn-wrapper{
    .box-size(100cvw,19.2vw,rgba(0,0,0,0.51));
    .flex-simple(center,center);
    .pos-absolute(unset,0,0,0);
    .btn{
      .box-size(58.667vw,13.867vw);
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-btn.png") 0 0/100% 100% no-repeat;
      text-align:center;
      .bold-font(6.4vw,white);
      line-height:12vw;
    }
  }

}

</style>