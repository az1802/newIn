<script setup >
import {ref} from "vue";


const noticeList = ref([
  {
    id:1,
    content:"李大锤向你申请借阅<床边的小豆豆>,赶紧去同意吧!",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"jieyue",
    btnText:"去同意"
  },
  {
    id:2,
    content:"123",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_credit.png",
    type:"xinyongjifen",
    btnText:"立即查看"
  },
  {
    id:3,
    content:"123",
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
    content:"123",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
  {
    id:6,
    content:"123",
    img:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png",
    type:"jifen",
    btnText:"立即查看"
  },
]);

</script>

<template>
  <div class='page'>
    <NavBar title='消息中心' />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <scroll-view class='notice-list-wrapper' scroll-y>
      <div class="notice-item" v-for='item in noticeList' :key='item.id'>
        <div class="content">
          <img :src="item.img" alt="" class='img'/>
          <div class="text">{{item.content}}</div>
        </div>
        <div class="btn-wrapper">
            <CommonButton :text='item.btnText' class='btn'></CommonButton>
          </div>
      </div>

    </scroll-view>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
  .notice-list-wrapper{
    .box-size(100vw,calc(100vh - 120px));
    .notice-item{
      .box-size(100%,unset);
      position: relative;
      border: 1px solid red;
      padding:30px 20px;
      margin:20px 0;
      .content{
        .flex-simple(flex-start);
        .box-size(100%,unset);
        .img{
          .box-size(63px,63px);
        }
        .text{
          flex:1;
          margin-left:16px;
          .bold-font(16px);
          line-height: 22px;
        }
      }
      .btn-wrapper{
        .pos-absolute(unset,10px,10px,unset);
      }
    }
  }
}
</style>