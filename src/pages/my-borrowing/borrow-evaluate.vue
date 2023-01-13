<script setup >
import { navigateTo ,showToast} from '@utils/wechat';
import {ref,computed} from "vue";
let evaluateText = ref("");
let imgList = ref([1,2]);
let scoreArr = ref([1,2,3,4,5]);
let score = ref(0)
const scoreText = computed(()=>{
  return "非常差"
})

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
    <NavBar title='发表评价' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="group-wrapper">
      <div class="group">
        <div class="title">借阅评分</div>
        <div class="score-wrapper">
          <div class="score-item" v-for='item in scoreArr' :key='item'>
            <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-star-red.png" alt="" class='red' v-if='score >= item'>
            <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/icon-star-grey.png" alt="" class='gray' v-else>
          </div>
        </div>
        <div class="score-text">{{scoreText}}</div>
        <div class='tem-list'>
          <div class="tem-item">
            图书损坏
          </div>
          <div class="tem-item">
            未按时归还
          </div>
        </div>
        <div class="text-area-wrapper">
          <textarea  class='text-area' v-model='evaluateText'  maxlength='100' placeholder='你的宝贵意见将帮助我们不断改进' placeholder-style='font-size:15px;color:#6F6F6F;font-family:HYCuYuanJ'></textarea>
          <div class='word-tooltip'>{{evaluateText.length}}/100</div>
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
  .group-wrapper{
    .box-size(92vw,431px,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:6px 6px 11px 6px;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 30px;
    .group{
      .box-size(100%,100%,#FEFBD7);
      padding:20px 10px 0 10px;
      border-radius: 25px;
      .title{
        .bold-font(15px,#3F3F3F);
        text-indent: 10px;
      }
      .score-wrapper{
        .box-size(100%,30px);
        .flex-simple(flex-start,center);
        .score-item{
          .red,.gray{
            .box-size(50px,30px);
            margin-right:20px;
          }
        }
      }
      .score-text{
        .bold-font(13px,#F38F00);
        text-align: center;
      }
      .tem-list{
        margin-top:25px;
        .tem-item{
          display: inline-block;
          margin:0 15px 12px 0 ;
          .line-center(26px);
          padding:0 13px;
          box-sizing: border-box;
          border-radius: 13px;
          border:1px solid #9D9D9D;
          .normal-font(13px,#9D9D9D);
          &.active{
            border:1px solid #57C719;
            .normal-font(13px,#57C719);
          }
        }
      }
      .text-area-wrapper{
        position:relative;
        .box-size(100%,152px);
        .text-area{
          .box-size(100%,152px,#FCF5B8);
          border-radius: 8px;
          padding:15px;
        }
        .word-tooltip{
          .box-size(100%,12px);
          .pos-absolute(unset,0px,15px,unset);
          .normal-font(12px,#474747);
          z-index:100;
          text-align: right;
          padding-right:15px;
        }
      }


    }


  }

}

</style>