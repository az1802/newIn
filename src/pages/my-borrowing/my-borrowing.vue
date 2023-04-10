<script setup >
import { navigateTo } from '@utils/wechat';
import {ref,unref,onBeforeMount}  from "vue";

import {useSystemInfo} from "@hooks/commonHooks";
import {getMyBorrowList} from "@/api/user"

const systemInfo = useSystemInfo();

const listStyle = ref({
  height:`calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
})

const borrowingList = ref([
  // {
  //   id:"1",
  //   bookName:"小王子",
  //   status:"borrowing",
  //   statusText:"借阅中",
  //   shareName:"李丽(3年级2班)",
  //   bookUrl:""
  // }
])


// function handleScroll(e){
//   let scrollTop = e.detail.scrollTop;
// }



onBeforeMount(async ()=>{
  await getList();
})


let  page= ref(1),hasMore = ref(true),isRequest=ref(false),scoreInfo=ref({
  score:0
});
async function getList(){
  let userInfo = uni.getStorageSync("userInfo");
  if(unref(isRequest)){
    return;
  }
  isRequest. value= true;
  let res =await getMyBorrowList({
    params:{
      school_id:userInfo.school_id,
      student_id:userInfo.student_id,
      page:unref(page)
    }
  });

  isRequest.value = false;

  if(res){
    borrowingList.value.push(...res.records);
    page.value++;
    if(page.value > res.total_pages){
      hasMore.value = false;
    }
  }
}

async function handleScrollMore(){
  if(!unref(hasMore)){
    return;
  }
  getList()
}


function viewBorrowDetail(item){
  console.log('item: ', item);
  navigateTo("/pages/my-borrowing/borrowing-detail",unref(item))
}






</script>

<template>
  <div class="page">
    <NavBar title='我的借阅' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <scroll-view :show-scrollbar='false' enhanced scroll-y class='borrowing-list' :style='listStyle' :lower-threshold='50' @scrolltolower='handleScrollMore'>
      <ContentBlock :topLong='index==0' :bottomRattan='index!=borrowingList.length-1' v-for='(item,index) in borrowingList' :key='item.id' >
        <div class="borrowing-item" >
        <div class="left">
          <img :src="item.cover" alt="" class='img'>
        </div>
        <div class="info">
          <div class="name">{{item.bookname}}</div>
          <div class="status">
            <div class="label">状态：</div>
            <div class="text"  :class='"status"+item.lent_status'>{{item.lent_status_zh}}</div>
          </div>
          <div class='share-people'>
            <div class="label">共享人：</div>
            <div class="text"  >{{item.lender}}({{item.banji}})</div>
          </div>
          <div class="view-btn" @click="viewBorrowDetail(item)"></div>
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
        padding-right: 24px;
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