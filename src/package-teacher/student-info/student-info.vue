<script setup>
import BookItem from "./book-item.vue"
import { ref, reactive, computed, unref, watch, onBeforeMount } from 'vue';
import { useSystemInfo } from '@hooks/commonHooks';
import { navigateBack, navigateTo } from '@utils/wechat';
const systemInfo = useSystemInfo();

const contentStyle = ref({
  height: `calc(100vh - 260px - ${systemInfo.statusBarHeight}px)`,
});

const scMockData = genMockData(15);

const jyMockData = genMockData(13);

const showList = ref(scMockData);

function goBack() {
  navigateBack();
}

const activeTab = ref('read');
function toggleTab(item) {
  console.log('item: ', item);
  activeTab.value = item;
  if (item == 'upload') {
    showList.value = scMockData;
  } else if (item == 'jieyue') {
    showList.value = jyMockData;
  } else {
    showList.value = []
  }
}

function genMockData(len) {
  let res = [];
  let classMap = ['one', 'two', 'three'];

  for (let i = 0; i < len; i++) {
    res.push({
      id: i + 1,
      img: '',
      name: `张凡${i + 1}`,
      num: 300,
      rank: i + 1,
      rankClass: classMap[i],
    });
  }

  return res;
}

let studentInfo = reactive({
  name: '',
  jifen: 606,
  xinyong: 201,
  detail: '',
});



const categoryList = ref([
  {
    count:"53",
    text:"儿童文学",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-icon-etwx.png"
  },
  {
    count:"32",
    text:"大自然",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-icon-dzr.png"
  },
  {
    count:"56",
    text:"故事大王",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-icon-gsdw.png"
  },
  {
    count:"69",
    text:"科普百科",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-icon-kpbk.png"
  },
])
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
    </div>
    <div class="bg-top-wrapper">
      <img
        src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-xsxx-bg.png"
        alt=""
        class="bg-top"
      />
    </div>
    <div class="student-info">
      <div class="left">
        <img src="" alt="" class="img" />
      </div>
      <div class="right">
        <div class="name">张文君</div>
        <div class="fen">
          <div class="jifen">
            <img
              src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-icon-jf.png"
              alt=""
              class="icon"
            />
            <div class="text">积分</div>
            <div class="num">606</div>
          </div>
          <div class="xinyong">
            <img
              src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-icon-xxf.png"
              alt=""
              class="icon"
            />
            <div class="text">信用分</div>
            <div class="num">606</div>
          </div>
        </div>
        <div class="detail">上传124本·借阅86本·已读8万字</div>
      </div>
    </div>

    <div class="borrow">
      <div class="title">最近借阅</div>
      <div class="info">
        <div class="left">
          <img src="" alt="" class="img" />
          <div class="text">四大明川大师课进度款拉数据扩大数据库打卡卡了进度款拉数据可大家可就打算</div>
        </div>
        <div class="right">申请中</div>
      </div>
    </div>

    <div class="detail-wrapper">
      <div class="tabs">
        <div
          class="tab-item"
          @click="toggleTab('read')"
          :class="[activeTab == 'read' ? 'active' : '']"
        >
          阅读分析
        </div>
        <div
          class="tab-item"
          @click="toggleTab('upload')"
          :class="[activeTab == 'upload' ? 'active' : '']"
        >
          上传书籍124
        </div>
        <div
          class="tab-item"
          @click="toggleTab('borrow')"
          :class="[activeTab == 'borrow' ? 'active' : '']"
        >
          借阅书籍86
        </div>
      </div>
      <div class="tab-content" :style="contentStyle">
        <scroll-view class="read-content"
          v-show='activeTab=="read"'
          :show-scrollbar="false"
          enhanced
          scroll-y>
          <div class="title">
            <img
              src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-ydl.png"
              alt=""
              class="icon"
            />
            <div class="text">阅读量</div>
          </div>
          <div class="read-count-wrapper">
            <div class="left">
              <div class="count">12.58w</div>
              <div class="text">总阅读量(字)</div>
              <img
                src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-img.png"
                alt=""
                class="img"
              />
            </div>
            <div class="right">
              <div class="upload-word">
                <div class="count">4.26w</div>
                <div class="text">上传(字)</div>
                <div class="bar"></div>
              </div>
              <div class="borrow-word">
                <div class="count">4.26w</div>
                <div class="text">借阅(字)</div>
                <div class="bar"></div>
              </div>
            </div>
          </div>

          <div class="title">
            <img
              src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-ydxh.png"
              alt=""
              class="icon"
            />
            <div class="text">阅读喜好</div>
          </div>
          <div class="read-fav">
            <div class="total">
              <div class="count">502本</div>
              <div class="text">总计</div>
            </div>
            <div class="list">
              <div class="item" v-for='item in categoryList' :key='item.img'>
                <div class='item-count'>{{item.count}}本</div>
                <div class="item-text">总计</div>
                <img :src="item.img" alt="" class='img'>
              </div>
            </div>

          </div>
          <div style="height:28px"></div>
        </scroll-view>
        <scroll-view
         v-show='activeTab=="upload"'
          class="upload-content"
          :show-scrollbar="false"
          enhanced
          scroll-y
        >
        <div class="book-item"  v-for='item in [1,2,3,4,5,6]' :key='item'>
          <BookItem type='upload'/>
        </div>
        <div style="height:28px"></div>
        </scroll-view>
        <scroll-view
          v-show='activeTab=="borrow"'
          class="borrow-content"
          :show-scrollbar="false"
          enhanced
          scroll-y
        >
        <div class="book-item"  v-for='item in [1,2,3,4,5,6,7,8]' :key='item'>
          <BookItem type='borrow'/>
        </div>
        <div style="height:28px"></div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page {
  .full-screen();
  position: relative;
  background: #f6f6f6;
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
  }
  .bg-top-wrapper {
    z-index: 10;
    font-size: 0px;
    .pos-absolute(0,0,unset,unset);
    .bg-top {
      .box-size(100vw,51.2vw);
    }
  }

  .student-info {
    .box-size(100vw,68px);
    .flex-simple(flex-start,center);
    padding: 0 8px 0 20px;
    z-index: 100;
    margin-top: 18px;
    .left {
      .box-size(68px,68px);
      border: 1px solid white;
      border-radius: 50%;
      .img {
        .box-size(67px,67px,#ccc);
        border-radius: 50%;
      }
    }
    .right {
      margin-left: 13px;
      flex: 1;
      .name {
        .bold-font(17px,white);
        .line-center(17px);
      }
      .fen {
        .box-size(100%,13px);
        margin-top: 15px;
        font-size: 0px;
        .jifen,
        .xinyong {
          .line-center(13px);
          .flex-simple(flex-start,center);
          width: unset;
          display: inline-flex;
          .icon {
            .box-size(16px,16px);
          }
          .text,
          .num {
            .normal-font(13px,white);
            margin-right: 6px;
          }
          .num {
            margin-left: 8px;
          }
        }
        .xinyong {
          margin-left: 20px;
        }
      }
      .detail {
        .normal-font(13px,white);
        .line-center(13px);
        margin-top: 8px;
      }
    }
  }

  .borrow {
    .box-size(calc(100vw - 16px),72px,white);
    margin: 21px auto 0 auto;
    border-radius: 12px;
    padding: 10px 13px;
    z-index: 100;
    .title {
      .line-center(13px);
      .normal-font(13px,#797979);
    }
    .info {
      .box-size(100%,26px);
      margin-top: 13px;
      .flex-simple(space-between,center);
      .left {
        height: 26px;
        .flex-simple(flex-start,center);
        .img {
          .box-size(20px,26px,#ccc);
          border-radius: 2px;
        }
        .text {
          .box-size(57.867vw,unset);
          .normal-font(13px,#2d2d2d);
          margin-left: 11px;
          .no-wrap();
        }
      }
      .right {
        .normal-font(13px,#4db12b);
        &.applying {
          color: #4db12b;
        }
      }
    }
  }

  .detail-wrapper {
    .box-size(calc(100vw - 16px),unset,white);
    margin: 6px auto 0 auto;
    padding: 15px 0 0 0;
    border-radius: 12px 0px 0px 12px;
    .tabs {
      .box-size(100%,16px);
      .line-center(16px);
      .flex-simple(space-between,center);
      .tab-item {
        .normal-font(13px,#797979);
        text-align: center;
        flex: 1;
        &.active {
          .bold-font(16px,#2d2d2d);
        }
      }
    }
    .tab-content {
      .box-size(100%,unset);
      .read-content {
        .box-size(100%,100%);
        padding: 28px 13px 0px 13px;
        .title {
          .flex-simple(flex-start,center);
          .line-center(14px);
          .icon {
            .box-size(14px,14px);
          }
          .text {
            .normal-font(13px,#797979);
            margin-left: 8px;
          }
        }
        .read-count-wrapper {
          .box-size(100%,150px);
          margin: 13px 0 30px 0;
          .flex-simple(space-between,center);
          .left {
            .box-size(37.333vw,150px,#EFEFEF);
            border-radius: 12px;
            padding: 26px 0 0 15px;
            .count {
              .bold-font(15px,#2d2d2d);
              .line-center(15px);
            }
            .text {
              .normal-font(11px,#797979);
              .line-center(11px);
              margin-top: 8px;
            }
            .img {
              .box-size(94px,74px);
              .pos-absolute(unset ,0 ,0,unset);
            }
          }
          .right {
            .box-size(49.067vw,150px,#EFEFEF);
            border-radius: 12px;
            .flex-simple(space-around,flex-end);
            .upload-word,.borrow-word{
              .box-size(40px,unset);
              .count{
                .bold-font(14px,#2d2d2d);
                .line-center(14px);
                text-align:center;
              }
              .text{
                .normal-font(10px,#797979);
                .line-center(10px);
                margin-top: 5px;
                text-align:center;
              }
              .bar{
                .box-size(40px,48px,#54C3F1);
                border-radius:10px 10px 0 0px;
                margin-top:8px;
              }
            }
            .borrow-word{
              .bar{
                height:96px;
                background-color:#FFDD3F;
              }
            }
          }
        }
        .read-fav{
          .box-size(100%,170px);
          background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/DOM-content-img-lan.png") 0 0/100% 100% no-repeat;
          margin-top:13px;
          padding-top:20px;
          .total{
            .count{
              .line-center(19px);
              .bold-font(19px,white);
              text-align:center;

            }
            .text{
              .line-center(11px);
              .bold-font(11px,white);
              text-align:center;
              margin-top:6px;
            }
          }
          .list{
            margin-top:25px;
            .flex-simple(space-around,center);
            .item{
              .box-size(37px,unset);
              .item-count{
                .line-center(14px);
                .bold-font(14px,white);
                text-align:center;
              }
              .item-text{
                .line-center(10px);
                .bold-font(10px,white);
                text-align:center;
                margin-top:4px;
              }
              .img{
                .box-size(37px,37px);
                margin-top:8px;
              }
            }
          }

        }
      }
      .upload-content,.borrow-content {
        .box-size(100%,100%);
        padding: 28px 13px 0 13px;
        .book-item{
          .box-size(100%,73px);
          margin-bottom:20px;
        }
      }
      .borrow-content {

      }
    }
  }
}
</style>
