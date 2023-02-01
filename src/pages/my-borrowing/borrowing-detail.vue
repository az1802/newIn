<script setup>
import { navigateTo } from '@utils/wechat';
import { ref } from 'vue';

const borrowingInfo = ref({
  id: '1',
  bookName: '神笔马良',
  status: 'borrowing',
  statusText: '借阅中',
  shareName: '李丽(3年级2班)',
  timeText: '7天',
  bookUrl: '',


});

const bookReviewText = ref("")
</script>

<template>
  <div class="page">
    <NavBar title="借阅详情" />
    <div class="bg-top-wrapper">
      <TopCloud />
    </div>
    <scroll-view scroll-y :show-scrollbar='false' enhanced class="borrowing-list">
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
          <div
            class="view-btn"
            @click="navigateTo('/pages/my-borrowing/borrowing-detail')"
          ></div>
        </div>
      </div>
      <div class="borrowing-item borrowing-book-review">
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
      </div>
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
    z-index: 0;
  }
  .borrowing-list {
    .box-size(100%,calc(100vh - 80px));
    margin-top: 20px;
    .borrowing-item {
      .box-size(342px,241px);
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-item-bg.png')
        0 0/100% 100% no-repeat;
      margin: -20px auto 0 auto;
      padding: 73px 0 0 0;
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
        .view-btn {
          .box-size(89px,37px);
          background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-view-btn.png')
            0 0/100% 100% no-repeat;
          margin-top: 20px;
        }
      }
    }
    .borrowing-book-review {
      display: block;
      padding:73px 28px unset 28px;
      box-sizing: border-box;;
      .title {
        font-size: 0px;
        .box-size(100%,unset);
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
        .box-size(100%,unset);
        margin-top: 15px;
        .text-area {
          .box-size(297px,76px,#FCF5B8);
          border-radius: 8px;
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
    }
  }
}
</style>
