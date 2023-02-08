<script setup>
import { navigateTo } from '@utils/wechat';
import { ref ,unref,computed} from 'vue';
import { useSystemInfo } from '@hooks/commonHooks';
import ContentBlock from '../../components/ContentBlock/ContentBlock.vue';
import PingjiaItem  from "./PingjiaItem.vue"
import BorrowOutAgreenDialog from './BorrowOutAgreenDialog.vue';

const systemInfo = useSystemInfo();

const borrowingInfo = ref({
  id: '1',
  bookName: '神笔马良',
  status: 'borrowing',
  statusText: '借阅中',
  shareName: '李丽(3年级2班)',
  timeText: '7天',
  bookUrl: '',


});

const containerStyle = ref({
  height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`,
});


const bookReviewText = ref("");
function  sumbitSp(){
  // 提交书评
}


const statusList = ref([
{
    index:5,
    name:"我",
    statusText:"结束借阅",
    avatarUrl:"",
    hour:"16:23",
    day:"2018/06/21",
    active:true
  },
{
    index:4,
    name:"欧阳果果",
    statusText:"已确认归还",
    avatarUrl:"",
    hour:"16:23",
    day:"2018/06/21"
  },
{
    index:3,
    name:"我的借阅",
    statusText:"书已借到",
    avatarUrl:"",
    hour:"16:23",
    day:"2018/06/21"
  },
  {
    index:2,
    name:"欧阳果果",
    statusText:"同意借阅",
    avatarUrl:"",
    hour:"16:23",
    day:"2018/06/21"
  },
  {
    index:1,
    name:"我",
    statusText:"申请中",
    avatarUrl:"",
    hour:"16:23",
    day:"2018/06/21"
  }
])



let agreeBorrowOutDialog = ref(false);
function agreeBorrowOut(){
  console.log("123");
  agreeBorrowOutDialog.value = true
}
</script>

<template>
  <div class="page">
    <NavBar title="借出详情" />
    <div class="bg-top-wrapper">
      <TopCloud />
    </div>
    <BorrowOutAgreenDialog v-model:show='agreeBorrowOutDialog' />

    <scroll-view  :show-scrollbar="false"
      enhanced
      scroll-y
      class="borrowing-list"
      :style="containerStyle">
        <ContentBlock topLong>
          <div class="borrowing-item">
            <div class="left">
              <img src="" alt="" class="img" />
            </div>
            <div class="info">
              <div class="name">{{ borrowingInfo.bookName }}</div>
              <div class="status">
                <div class="label">状态：</div>
                <div class="text" :class="borrowingInfo.status">
                  {{ borrowingInfo.statusText }}
                </div>
              </div>
              <div class="status">
                <div class="label">借阅时间：</div>
                <div class="text">{{ borrowingInfo.timeText }}</div>
              </div>
              <div class="share-people">
                <div class="label">共享人：</div>
                <div class="text">{{ borrowingInfo.shareName }}</div>
              </div>
              <div class="btn-group">
                <div
                class="view-btn btn"
                @click="navigateTo('/pages/my-borrow-out/damage-feedback')"
              >破损申诉</div>
              <div
                class="view-btn btn"
                @click="agreeBorrowOut"
              >同意借阅</div>
              </div>

            </div>
          </div>

          <div class="pingjia-wrapper">
            <div class="title">借阅评价</div>
            <div class="pingjia-item">
              <PingjiaItem />
            </div>
            <div class="tag-list">
              <div class="tag-item">图书完整</div>
              <div class="tag-item">按时归还</div>
              <div class="tag-item">有礼貌</div>
            </div>
          </div>

        </ContentBlock>

        <ContentBlock>
          <div class="borrowing-book-review">
            <div class="title">
              <div class="text">写书评</div>
              <img
                src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home_picture_paintbrush.png"
                alt=""
                class="img"
              />
            </div>
            <div class="text-area-wrapper">
              <textarea
                class="text-area"
                v-model="bookReviewText"
                maxlength="100"
                placeholder="请填写书评"
                placeholder-style="font-size:15px;color:#6F6F6F;font-family:HYCuYuanJ"
              ></textarea>
              <div class="word-tooltip">{{ bookReviewText.length }}/100</div>
            </div>
            <div class="button-wrapper">
              <div class="btn" @click='sumbitSp'>提交</div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock :bottom-rattan='false'>
          <div class="borrow-status">
            <div class="title">借阅状态</div>
            <div class="status-list">
              <div class="status-item" v-for='item in statusList' :key="item.id" :class='[item.active?"active":""]'>
                  <div class="index">{{item.index}}</div>
                  <img src="" alt="" class='img'>
                  <div class="name">{{item.name}}</div>
                  <div class="text">{{item.statusText}}</div>
                  <div class="time">
                    <div class="hour">{{item.hour }}</div>
                    <div class="day">{{item.day }}</div>
                  </div>
              </div>
            </div>
            <div style='height:1px'></div>
          </div>
          </ContentBlock>


      <div class="" style="height: 40px"></div>
    </scroll-view>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page {
  .full-screen();
  background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_1.jpg')
    0 0/100% 100% no-repeat;
  position: relative;
  .bg-top-wrapper {
    .pos-absolute(0,0,unset,0);
    z-index: 100;
  }
  .borrowing-list {
    .box-size(100%,unset);
    // margin-top: 10px;
    z-index: 10;
    .borrowing-item {
      .box-size(342px,unset);
      .flex-simple(flex-start,flex-start);
      .left {
        .box-size(95.5px,130px);
        background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-book-bg.png')
          0 0/100% 100% no-repeat;
        margin-left: 22px;
        padding: 10px 10px;
        .img {
          .box-size(66px,90px,#ccc);
          border-radius: 0px;
          margin: 2px 0 0 6px;
        }
      }
      .info {
        margin-left: 22px;
        .name {
          .bold-font(16px,#3f3f3f);
          margin-bottom: 23px;
        }
        .status,
        .share-people {
          .line-center(11px);
          margin-bottom: 10px;
          .flex-simple(flex-start,flex-start);
          .label {
            .normal-font(11px,#959797);
          }
          .text {
            .normal-font(11px,#646a6d);
            &.borrowing {
              color: #00a4ff;
            }
            &.returned {
              color: #646a6d;
            }
            &.applying {
              color: #df5e1f;
            }
          }
        }
        .btn-group{
          .btn{
            .box-size(89px,37px);
            .line-center(37px);
            background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Lend-Button-Agree.png')
              0 0/100% 100% no-repeat;
            margin-top: 20px;
            .btn-text(18px);
            display: inline-block;
            margin-right:10px;
          }
        }

      }
    }
    .pingjia-wrapper{
      .box-size(100%,unset);
      margin-top:37px;
      padding:0 25px;
      .title{
        .bold-font(15px,#3F3F3F);
      }
      .pingjia-item{
        margin-top:20px;
      }
    }
    .tag-list{
      .box-size(100%,unset);
      font-size:0px;
      margin-top:15px;
      .tag-item{
        display:inline-block;
        .line-center(22px);
        text-align: center;
        padding:0 7px;
        border:1px solid #88CF63;
        border-radius: 11px;
        .normal-font(9px,#6BCA38);
        margin-right:10px;
      }
    }
    .borrowing-book-review {
      display: block;
      box-sizing: border-box;;
      position:relative;
      top:-10px;
      .title {
        font-size: 0px;
        .box-size(100%,unset);
        padding-left:25px;
        .text {
          display: inline-block;
          .bold-font(11px,#3F3F3F);
        }
        .img {
          .box-size(19px,24px);
          vertical-align: text-bottom;
          margin-left: 15px;
        }
      }
      .text-area-wrapper {
        position: relative;
        .box-size(calc(100% - 44px),unset);
        margin: 15px auto 0 auto;
        .text-area {
          .box-size(100%,76px,#FCF5B8);
          border-radius: 4px;
          padding: 6px;
        }
        .word-tooltip {
          .box-size(297px,12px);
          .pos-absolute(unset,0px,6px,unset);
          .normal-font(9px,#7A7777);
          z-index: 100;
          text-align: right;
          padding-right: 10px;
        }
      }
      .button-wrapper{
        .flex-simple(flex-end,center);
        .box-size(100%,unset);
        padding-right:25px;
        margin-top:5px;
        .btn{
          .box-size(59px,23px);
          background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Lend-Button-Agree.png')
            0 0/100% 100% no-repeat;
          .line-center(23px);
          .btn-text(14px);
          text-align:center;
        }
      }

    }

    .borrow-status{
      position:relative;
      top:-10px;
      .title {
        .box-size(100%,11px);
        padding-left:25px;
        .bold-font(11px,#3F3F3F);
      }
      .status-list{
        .box-size(100%,unset);
        padding:14px 25px 0 25px;
        .status-item{
          .flex-simple(flex-start,center);
          .box-size(100%,47px);
          margin-bottom:10px;
          &.active{
            .index{
              background:#00AEFE;
              &:after{
                display:none;
              }
            }
            .text{
              color:#E94F04;
            }
          }
          .index{
            .box-size(21px,21px,#AFAFAF);
            .bold-font(14px,white);
            .line-center(21px);
            text-align:center;
            border-radius:50%;
            position:relative;
            &::after{
              content: "";
              height:36px;
              width:0;
              border-left:1px dotted #BEBEBE;
              .pos-absolute(-36px,10px,unset,unset);
            }
          }
          .img{
            .box-size(47px,47px,#ccc);
            border-radius:50%;
            margin-left:24px;
          }
          .name{
            .bold-font(10px,#959797);
            .line-center(10px);
            margin-left:12px;
            flex-basis:50px;
          }
          .text{
            .bold-font(10px,#959797);
            .line-center(10px);
            margin-left:24px;
          }
          .time{
            flex:1;
            text-align:right;
            .hour,.day{
              .line-center(9px);
              .normal-font(9px,#646A6D)
            }
            .day{
              margin-top:10px;
            }
          }
        }
      }
    }
  }
}
</style>
