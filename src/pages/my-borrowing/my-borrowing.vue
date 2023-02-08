<script setup >
import { navigateTo } from '@utils/wechat';
import {ref} from "vue";

import {useSystemInfo} from "@hooks/commonHooks";

const systemInfo = useSystemInfo();

const listStyle = ref({
  height:`calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
})

const borrowingList = ref([
  {
    id:"1",
    bookName:"神笔马良",
    status:"borrowing",
    statusText:"借阅中",
    shareName:"李丽(3年级2班)",
    bookUrl:""
  },
  {
    id:"2",
    bookName:"小王子",
    status:"returned",
    statusText:"已归还",
    shareName:"李明(3年级2班)",
    bookUrl:""
  },
  {
    id:"3",
    bookName:"木偶奇遇记",
    status:"applying",
    statusText:"申请中",
    shareName:"王敏(3年级2班)",
    bookUrl:""
  },{
    id:"4",
    bookName:"神笔马良",
    status:"returned",
    statusText:"已归还",
    shareName:"李丽(3年级2班)",
    bookUrl:""
  }
  ,{
    id:"5",
    bookName:"小王子",
    status:"borrowing",
    statusText:"借阅中",
    shareName:"李丽(3年级2班)",
    bookUrl:""
  }
])




</script>

<template>
  <div class="page">
    <NavBar title='我的借阅' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <scroll-view :show-scrollbar='false' enhanced scroll-y class='borrowing-list' :style='listStyle'>
      <ContentBlock :topLong='index==0' :bottomRattan='index!=borrowingList.length-1' v-for='(item,index) in borrowingList' :key='item.id' >
        <div class="borrowing-item" >
        <div class="left">
          <img src="" alt="" class='img'>
        </div>
        <div class="info">
          <div class="name">{{item.bookName}}</div>
          <div class="status">
            <div class="label">状态：</div>
            <div class="text"  :class='item.status'>{{item.statusText}}</div>
          </div>
          <div class='share-people'>
            <div class="label">共享人：</div>
            <div class="text" >{{item.shareName}}</div>
          </div>
          <div class="view-btn" @click='navigateTo("/pages/my-borrowing/borrowing-detail")'></div>
        </div>
      </div>
      </ContentBlock>

      <div class="" style='height:40px'></div>
    </scroll-view>
  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_1.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:100;
  }
  .borrowing-list{
    .box-size(100%,unset);
    // margin-top:10px;
    z-index:10;
    .borrowing-item{
      // .box-size(342px,241px);
      // background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-item-bg.png") 0 0/100% 100% no-repeat;
      // margin:-20px auto 0 auto;
      // padding:73px 0 0 0;
      .flex-simple(flex-start,flex-start);
      .left{
        .box-size(95.5px,130px);
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-book-bg.png") 0 0/100% 100% no-repeat;
        margin-left:22px;
        padding:10px 10px;
        .img{
          .box-size(66px,90px,#ccc);
          border-radius: 0px;
          margin:2px 0 0 6px;
        }
      }
      .info{
        margin-left:22px;
        .name{
          .bold-font(16px,#3F3F3F);
          margin-bottom:23px;
        }
        .status,.share-people{
          .line-center(11px);
          margin-bottom:10px;
          .flex-simple(flex-start,flex-start);
          .label{
            .normal-font(11px,#959797);
          }
          .text{
            .normal-font(11px,#646A6D);
            &.borrowing{
              color:#00A4FF;
            }
            &.returned{
              color:#646A6D;
            }
            &.applying{
              color:#DF5E1F;
            }
          }
        }
        .view-btn{
          .box-size(89px,37px);
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/mine-borrowing-view-btn.png") 0 0/100% 100% no-repeat;
          margin-top:20px;
        }
      }

    }
  }
}

</style>