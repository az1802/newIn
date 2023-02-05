<script setup>
import BookItem from './book-item.vue';
import { ref, reactive, computed, unref, watch, onBeforeMount } from 'vue';
import { useSystemInfo } from '@hooks/commonHooks';
import { navigateBack, navigateTo } from '@utils/wechat';
const systemInfo = useSystemInfo();

const contentStyle = ref({
  height: `calc(100vh - 260px - ${systemInfo.statusBarHeight}px)`,
});

function goBack() {
  navigateBack();
}

function genMockData(len) {
  let res = [];
  let classMap = ['one', 'two', 'three'];

  for (let i = 0; i < len; i++) {
    res.push({
      id: i + 1,
      name: `张凡${i + 1}`,
      avatar: '',
      text: '10-25归还',
    });
  }

  return res;
}

const bookInfo = reactive({
  name: '奥当女孩（神奇少年桑桑系列）',
  detailText: '童话故事类·85页·5120字·期限50天',
  author: '王源',
  readCount: 12,
  img: '',
  evaluateList: [
    {
      id: 1,
      avatar: '',
      name: '吴梓涵',
      content:
        '奥当女孩的童话故事，虹影是写给女儿的，为了给孩子 营造一个神秘而美好的国度。虹影也是写给自己的，回 忆起儿时的苦难，她没有憎恶，有的只是历练之后的淡 定从容和愈加质朴的内心。',
      timeText: '今天 14:23',
    },
    {
      id: 2,
      avatar: '',
      name: '牛子硕',
      content:
        '这是一部温情回归之作，作者以温柔的笔触，描写了那个在长江边奔跑的男孩，如何面对变化多端的世界。',
      timeText: '10-24 19:12',
    },
  ],
  borrowDetailList: [
    {
      id: 1,
      timeDay: '今天',
      timeHour: '17:46',
      content: '朱俊翰向张俊易发起借阅',
      status: 'applying',
      statusText:"申请中"
    },

    {
      id: 2,
      timeDay: '10-29',
      timeHour: '17:46',
      content: '朱俊翰向张俊易发起借阅',
      status: 'applying',
      statusText:"申请中"
    },
  ],
  sharePeopleList: [
    [{
      id: 1,
      name: `张凡`,
      avatar: '',
      text: '10-25上传',
    },
    {
      id: 2,
      name: `张凡2`,
      avatar: '',
      text: '10-25上传',
    }],
  ],
  borrowPeopleList:[genMockData(5),genMockData(5)],
  borrowEvalist: [
    {
      id: 1,
      avatar: '',
      name: '牛子硕',
      content:
        '这是一部温情回归之作，作者以温柔的笔触，描写了那个在长江边奔跑的男孩，如何面对变化多端的世界。',
      timeText: '10-24 19:12',
    },
    {
      id: 2,
      avatar: '',
      name: '牛子硕',
      content:
        '这是一部温情回归之作，作者以温柔的笔触，描写了那个在长江边奔跑的男孩，如何面对变化多端的世界。',
      timeText: '10-24 19:12',
    },
    {
      id: 3,
      avatar: '',
      name: '牛子硕',
      content:
        '这是一部温情回归之作，作者以温柔的笔触，描写了那个在长江边奔跑的男孩，如何面对变化多端的世界。',
      timeText: '10-24 19:12',
    },
  ],
});

const listStyle = ref({
  height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`,
});
</script>
<template>
  <div class="page">
    <div
      class="nav-bar"
      :style="{
        paddingTop: systemInfo.statusBarHeight + 'px',
      }"
    >
      <div
        class="back-wrapper"
        @click="goBack"
        :style="{
          top: systemInfo.statusBarHeight + 'px',
        }"
      >
        <img
          src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-icon-fh.png"
          alt=""
          class="img"
        />
      </div>
      <div class="text">书籍详情</div>
    </div>
    <div class="bg-top-wrapper">
      <img
        src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-xsxx-bg.png"
        alt=""
        class="bg-top"
      />
    </div>

    <scroll-view :show-scrollbar="false" enhanced scroll-y :style="listStyle">
      <div class="detail-info">
        <div class="name">{{ bookInfo.name }}</div>
        <div class="detail-text">{{ bookInfo.detailText }}</div>
        <div class="author">{{ bookInfo.author }} 著</div>
        <div class="cover-wrapper">
          <img src="" alt="" class="img" />
        </div>
        <div class="read-wrapper">
          <div class="count">{{ bookInfo.readCount }}</div>
          <div class="text">人读过</div>
        </div>
      </div>
      <div class="evaluate-list block">
        <div class="title">上传书评</div>
        <div class="list">
          <div
            class="item"
            v-for="item in bookInfo.evaluateList"
            :key="item.id"
          >
            <img :src="item.avatar" alt="" class="left" />
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="content">{{ item.content }}</div>
              <div class="time">{{ item.timeText }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="borrow-list block">
        <div class="title">借阅详情</div>
        <div class="list">
          <div
            class="item"
            v-for="item in bookInfo.borrowDetailList"
            :key="item.id"
          >
            <div class="left">
              <div class="day">{{item.timeDay}}</div>
              <div class="hour">{{item.timeHour}}</div>
            </div>
            <div class="right">
              <div class="content">{{ item.content }}</div>
              <div class="status" :class='item.status'>{{ item.statusText }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="share-people-list block">
        <div class="title">共享人</div>
        <div class="list">
          <div class="item-group" v-for='(groupItem,groupIndex) in bookInfo.sharePeopleList' :key='groupIndex'>
            <div class="item" v-for='item in groupItem' :key='item.id'>
              <img :src="item.avatar" alt="" class='img'>
              <div class="name">{{item.name}}</div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="borrow-people-list block">
        <div class="title">借阅人</div>
        <div class="list">
          <div class="item-group" v-for='(groupItem,groupIndex) in bookInfo.borrowPeopleList' :key='groupIndex'>
            <div class="item" v-for='item in groupItem' :key='item.id'>
              <img :src="item.avatar" alt="" class='img'>
              <div class="name">{{item.name}}</div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="borrow-evaluate-list block">
        <div class="title">借阅书评</div>
        <div class="list">
          <div
            class="item"
            v-for="item in bookInfo.borrowEvalist"
            :key="item.id"
          >
            <img :src="item.avatar" alt="" class="left" />
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="content">{{ item.content }}</div>
              <div class="time">{{ item.timeText }}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page {
  .full-screen();
  position: relative;
  background: #f6f6f6;
  padding: 0 8px;
  box-sizing: border-box;
  .nav-bar {
    .box-size(100vw,44px);
    .flex-simple(center,center);
    z-index: 10000;
    box-sizing: content-box;
    .back-wrapper {
      .box-size(33px,unset);
      .pos-absolute(0 ,0 ,0 ,6px);
      z-index: 100;
      .flex-simple(center,center);
      .img {
        .box-size(33px,33px);
      }
    }
    .text {
      .box-size(100%,44px);
      .line-center(44px);
      .normal-font(20px,white);
      text-align: center;
    }
  }
  .bg-top-wrapper {
    z-index: 0;
    font-size: 0px;
    .pos-absolute(0,0,unset,unset);
    .bg-top {
      .box-size(100vw,51.2vw);
    }
  }

  .detail-info {
    .box-size(100%,232px);
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/sjxq-dom-bg.png')
      0 0/100% 100% no-repeat;
    .flex-simple(flex-start,center);
    flex-direction: column;
    margin-top: 30px;
    z-index: 100;
    .name {
      .bold-font(16px,#2d2d2d);
      .line-center(16px);
      margin-top: 16px;
      text-align: center;
    }
    .detail-text {
      .normal-font(12px,#797979);
      .line-center(12px);
      margin-top: 9px;
      text-align: center;
    }
    .author {
      .normal-font(11px,#AFAFAF);
      .line-center(11px);
      margin-top: 7px;
      text-align: center;
    }
    .cover-wrapper {
      margin-top: 11px;
      flex-basis: 113px;
      width: 85px;
      height: 113px;
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/sjxq-content-bk-hs.png')
        0 0/100% 100% no-repeat;
      .img {
        .box-size(60px,80px,#ccc);
        margin: 12px 0 0 14px;
      }
    }
    .read-wrapper {
      margin-top: 10px;
      .flex-simple(flex-start,flex-end);
      .count {
        .bold-font(15px,#FF8000);
        .line-center(15px);
      }
      .text {
        .bold-font(11px,#797979);
        .line-center(11px);
      }
    }
  }

  .block {
    .box-size(100%,unset,white);
    margin-top: 6px;
    border-radius: 12px;
    padding: 14px 13px;
    .title {
      .line-center(16px);
      .bold-font(16px,#2d2d2d);
    }
    .list{
      margin-top:18px;
    }
  }

  .evaluate-list,
  .borrow-evaluate-list {
    .list {
      margin-top: 18px;
      .item {
        .box-size(100%,unset);
        .flex-simple(flex-start,flex-start);
        margin-bottom: 20px;
        .left {
          .box-size(36px,36px,#ccc);
          border-radius: 50%;
        }
        .right {
          .box-size(calc(100% - 36px),unset);
          padding-left: 11px;
          .name {
            .line-center(13px);
            .bold-font(13px,#2d2d2d);
            margin-top: 5px;
          }
          .content {
            margin-top: 15px;
            line-height: 18px;
            .normal-font(12px,#2d2d2d);
          }
          .time {
            .normal-font(10px,#AFAFAF);
            .line-center(10px);
            margin-top: 11px;
          }
        }
      }
    }
  }

  .borrow-list {
    .list{
      .item{
        .box-size(100%,unset);
        .flex-simple(space-between,center);
        margin-bottom: 10px;
        font-size:0px;
        .left{
          flex-basis:44px;
          .day{
            .bold-font(12px,#2D2D2D);
            .line-center(12px);
          }
          .hour{
            .normal-font(10px,#AFAFAF);
            .line-center(10px);
            margin-top:6px;
          }
        }
        .right{
          flex:1;
          .line-center(40px);
          border-radius:9px;
          background:#F5F5F5;
          box-sizing:border-box;
          padding:0 16px;
          .flex-simple(space-between,center);
          .content{
            .line-center(14px);
            .normal-font(14px,#2D2D2D);
            .no-wrap();
          }
          .status{
            .box-size(44px,14px);
            .line-center(14px);
            .normal-font(14px,#4DB12B);
            text-align:right;
          }
        }
      }
    }
  }
  .share-people-list,.borrow-people-list{
    .list{
      .item-group{
        margin-bottom:18px;
        font-size:0px;
        &:last-child{
          margin-bottom:5px;
        }
        .item{
          .box-size(calc(20% - 18.4px),unset);
          text-align:center;
          display:inline-block;
          margin-right:23px;
          &:last-child{
            margin-right:0px;
          }
          .img{
            .box-size(36px,36px,#ccc);
            border-radius:50%;
          }
          .name{
            .line-center(12px);
            .bold-font(12px,#2D2D2D);
            margin-top:4px;
            text-align:center;
          }
          .text{
            .line-center(10px);
            .normal-font(10px,#AFAFAF);
            margin-top :4px;
            text-align:center;
          }
        }
      }
    }
  }
  .borrow-people-list {
  }
  .borrow-evaluate-list {
  }
}
</style>
