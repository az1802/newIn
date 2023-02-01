<script setup>
import { ref, unref } from 'vue';

const bookReviewText = ref('');

const bookType = ref('');

const typeList = ref(['儿童文学', '大自然']);
const typeIndex = ref();

function typeChange(e) {
  typeIndex.value = e.detail.value;
}
</script>

<template>
  <div class="page">
    <NavBar title="" />

    <div class="group-wrapper">
      <div class="group">
        <div class="detail">
          <div class="book-img">
            <img src="" alt="" class="img" />
          </div>
          <div class="info">
            <div class="name">神笔马良</div>
            <div class="form">
              <div class="form-item">
                <div class="label">作者：</div>
                <div class="value">洪汛涛</div>
              </div>
              <div class="form-item">
                <div class="label">类型：</div>
                <div class="value">儿童文学</div>
              </div>
              <div class="form-item">
                <div class="label">页数：</div>
                <div class="value">106</div>
              </div>
            </div>
          </div>
        </div>
        <div class="type-sel">
          <div class="label">类型:</div>
          <div class="sel">
            {{ typeList[typeIndex] ? typeList[typeIndex] : '请选择图书类型' }}
            <img
              src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/type_down.png"
              alt=""
              class="img"
            />
            <picker
              @change="typeChange"
              :value="typeIndex"
              :range="typeList"
              class="picker"
            >
              <view class="uni-input">{{ typeList[typeIndex] }}</view>
            </picker>
          </div>
        </div>

        <div class="book-review">
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
      </div>
    </div>

    <div class="btn-wrapper">
      <div class="btn" @click="sumbit">上架此图书</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page {
  .full-screen();
  background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_1.jpg')
    0 0/100% 100% no-repeat;
  position: relative;

  .group-wrapper {
    .box-size(92vw,508px,#F7B053);
    margin: 8px auto 0 auto;
    padding: 6px 6px 11px 6px;
    box-shadow: 0px 1.6vw 0px 0px rgba(208, 135.595, 40.786, 1);
    border-radius: 30px;
    .group {
      .box-size(100%,100%,#FEFBD7);
      padding: 40px 26px 0 26px;
      border-radius: 25px;
      .detail {
        .flex-simple(flex-start,center);
        .book-img {
          .box-size(96px,131px);
          background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/yellow-book-bg.png')
            0 0/100% 100% no-repeat;
          .img {
            .box-size(70px,93px,#ccc);
            border-radius: 0px;
            margin: 10px 0 0 17px;
          }
        }
        .info {
          margin-left: 20px;
          flex: 1;
          .name {
            .bold-font(18px,#3f3f3f);
          }
          .form {
            margin-top: 30px;
            .form-item {
              .flex-simple(flex-start,center);
              margin-bottom: 10px;
              .label {
                .normal-font(13px,#959797);
              }
              .value {
                .normal-font(13px,#646a6d);
              }
            }
          }
        }
      }
      .type-sel {
        .flex-simple(flex-start,center);
        margin-top: 30px;

        .label {
          .bold-font(14px);
        }
        .sel {
          .box-size(160px,30px,#FCF5B8);
          line-height: 30px;
          text-indent: 16px;
          .bold-font(15px,#63696d);
          border-radius: 6px;
          margin-left: 20px;
          position: relative;
          .img {
            .box-size(20px,10px);
            .pos-absolute(unset,10px,10px,unset);
            // margin-left:10px;
          }
          .picker {
            .pos-absolute(0,0,0,0);
            background: transparent;
            opacity: 0;
          }
        }
      }
      .book-review {
        margin-top: 16px;
        .title {
          font-size: 0px;
          .text {
            display: inline-block;
            .bold-font(15px,#63696d);
          }
          .img {
            .box-size(19px,24px);
            vertical-align: text-bottom;
            margin-left: 15px;
          }
        }
      }

      .text-area-wrapper {
        position: relative;
        .box-size(100%,unset);
        // padding:5.333vw 3.2vw 0 3.2vw;
        margin-top: 15px;
        .text-area {
          .box-size(100%,176px,#FCF5B8);
          border-radius: 10px;
          padding: 10px;
        }
        .word-tooltip {
          .box-size(345px,12px);
          .pos-absolute(unset,0px,20px,unset);
          .normal-font(12px,#474747);
          z-index: 100;
          text-align: right;
          padding-right: 20px;
        }
      }
    }
  }

  .btn-wrapper {
    .box-size(100cvw,19.2vw,rgba(0,0,0,0.51));
    .flex-simple(center,center);
    .pos-absolute(unset,0,0,0);
    .btn {
      .box-size(58.667vw,13.867vw);
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-btn.png')
        0 0/100% 100% no-repeat;
      text-align: center;
      .bold-font(6.4vw,white);
      line-height: 12vw;
    }
  }
}
</style>
