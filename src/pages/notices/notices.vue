<script setup >
import {ref} from "vue";
import {navigateTo} from "@utils/wechat";


const borrowingMsgList = ref([
  {
    id:1,
    content:"李大锤向你申请借阅<床边的小豆豆>,赶紧去同意吧!",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"jieyue",
    btnText:"去同意"
  },
  {
    id:2,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"xinyongjifen",
    btnText:"立即查看"
  },
  {
    id:3,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:4,
    content:"李大锤向你申请借阅<床边的小豆豆>,赶紧去同意吧!李大锤向你申请借阅<床边的小豆豆>,赶紧去同意吧!",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:5,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:6,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:7,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:8,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
]);
const creditMsgList = ref([
  {
    id:1,
    content:"李大锤向你申请借阅<床边的小豆豆>,赶紧去同意吧!",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"jieyue",
    btnText:"去同意"
  },
  {
    id:2,
    content:"李大锤向你申请借阅",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"xinyongjifen",
    btnText:"立即查看"
  },
]);

const integralMsgList = ref([

]);

const tabActive = ref("one");

 function toggleTab(value){
  tabActive.value = value
 }

 function viewBorrowDetail(noticeItem){
  navigateTo("/pages/my-borrow-out/borrow-out-detail");
 }

</script>

<template>
  <div class='page'>
    <NavBar title='消息中心' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="notice-list-wrapper">
      <div class="tabs">
        <div class="tab-item" :class='[tabActive=="one" ? "active":""]' @click='toggleTab("one")'>借阅<div class="num">1</div></div>
        <div class="tab-item" :class='[tabActive=="two" ? "active":""]' @click='toggleTab("two")'>信用分</div>
        <div class="tab-item" :class='[tabActive=="three" ? "active":""]' @click='toggleTab("three")'>积分</div>
      </div>
      <div class="tab-contents">
        <scroll-view :show-scrollbar='false' enhanced scroll-y class='scroll-view' v-show='tabActive=="one"'>
          <div class="notice-item-wrapper" v-for='noticeItem in borrowingMsgList' :key='noticeItem.id'>
            <div class="notice-item">
              <img src="" alt="" class="left">
              <div class="right">
                <div class="info">{{noticeItem.content}}</div>
                  <div class="time">今天15：02</div>
                  <div class="btn"  @click='viewBorrowDetail(noticeItem)'>去同意</div>
              </div>
            </div>
          </div>
        </scroll-view>
        <scroll-view :show-scrollbar='false' enhanced scroll-y class='scroll-view' v-show='tabActive=="two"'>
          <div class="notice-item-wrapper" v-for='noticeItem in creditMsgList' :key='noticeItem.id'>
            <div class="notice-item">
              <img src="" alt="" class="left">
              <div class="right">
                <div class="info">{{noticeItem.content}}</div>
                  <div class="time">今天15：02</div>
                  <div class="btn">去同意</div>
              </div>
            </div>
          </div>
        </scroll-view>
        <scroll-view :show-scrollbar='false' enhanced scroll-y class='scroll-view' v-show='tabActive=="three"'>
          <div class="notice-item-wrapper" v-for='noticeItem in integralMsgList' :key='noticeItem.id'>
            <div class="notice-item">
              <img src="" alt="" class="left">
              <div class="right">
                <div class="info">{{noticeItem.content}}</div>
                  <div class="time">今天15：02</div>
                  <div class="btn">去同意</div>
              </div>
            </div>
          </div>
          <div v-if='integralMsgList.length==0' class='empty'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/message-empty-tooltip.png" alt="" class='img'>
          </div>
        </scroll-view>
      </div>
    </div>
    <!-- <scroll-view class='notice-list-wrapper' scroll-y>
      <div class="notice-item" v-for='item in borrowingMsgList' :key='item.id'>
        <div class="content">
          <img :src="item.img" alt="" class='img'/>
          <div class="text">{{item.content}}</div>
        </div>
        <div class="btn-wrapper">
            <CommonButton :text='item.btnText' class='btn'></CommonButton>
          </div>
      </div>

    </scroll-view> -->
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .notice-list-wrapper{
    .box-size(calc(100vw - 12px),calc(100vh - 14vh),#D08728);
    background:url(https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/notices-bg.png) 0 0/100% 100% no-repeat;
    border-radius: 30px;
    opacity: 1;
    margin:60px auto 0 auto;
    font-size:10px;
    .tabs{
      .box-size(100%,62px);
      .flex-simple(space-between,center);
      padding:26px 33px 0 33px;
      .tab-item{
        .box-size(95px,36px);
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/notices-tab-bg.png") 0 0/100% 100% no-repeat;
        text-align: center;
        line-height: 39px;
        .bold-font(17px,white);
        position:relative;
        .num{
          .box-size(19px,19px,#ED3B47);
          .line-center(19px);
          text-align:center;
          .normal-font(14px,white);
          .pos-absolute(-2px,-2px,unset,unset);
          z-index: 100;
          border-radius: 50%;
        }
        &.active{
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/notices-tab-bg-active.png") 0 0/100% 100% no-repeat;
        }
      }
    }
    .tab-contents{
      .box-size(calc(100% - 20px),calc(100% -  70px),#FEFBD7);
      border-radius: 25px;
      margin:-2px auto 0 auto;
      .scroll-view{
        .box-size(100%,100%);
        padding:21px 9px 40px 9px;
        .notice-item-wrapper{
          border-radius: 13px;
          min-height:70px;
          padding:2px;
          background-color: white;
          margin-bottom:10px;
          //  TODO 阴影待添加
          .notice-item{
            .box-size(100%,unset);
            padding:12px 12px 20px 12px;
            border:1px dotted #C98507;
            border-radius: 13px;
            .flex-simple(flex-start,flex-start);
          }
          .left{
            .box-size(55px,55px,#ccc);
            border:1px solid #FFCD11;
            border-radius: 50%;
            margin-right:20px;
          }
          .right{
            flex:1;
            .info{
              .box-size(100%,unset);
              padding-right:24px;
              .bold-font(14px,#3F3F3F);
              line-height:18px;
            }
            .time{
              .normal-font(12px,#646A6D);
              margin-top:10px;
            }
            .btn{
              .box-size(82px,32px);
              .pos-absolute(unset,10px,10px,unset);
              background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/notices-view-btn-bg.png") 0 0/100% 100% no-repeat;
              text-align: center;
              line-height:30px;
              z-index:10;
              .bold-font(14px,white);
            }
          }
        }
        .empty{
          .box-size(100%,100%);
          text-align:center;
          .img{
            .box-size(30.133vw,30.4vw);
            margin:37.333vw auto 0 auto;
          }
        }
      }
    }

  }

}
</style>