<script setup>
import AllBooksNavBar from "./all-books-nav-bar.vue";
import {useSystemInfo} from "@hooks/commonHooks";
import {ref} from "vue";
const systemInfo = useSystemInfo();

let searchText = ref("");
let searchOk = ref(false);

let bookList = []

for(let i= 1 ; i<20;i++){
  bookList.push({
    name:"书籍"+i,
    id:i,
    type:"active"
  })
}
bookList = ref(bookList)

function search(){
  searchOk.value = "true";
}

function cancelSearch(){
  searchOk.value = false;
  searchText.value=""
}

const searchStyle = ref({
  marginTop:systemInfo.statusBarHeight ? `calc(22.133vw - 44px - ${systemInfo.statusBarHeight}px)` : "calc(22.133vw - 44px)"
})
</script>
<template>
  <div class="page">
    <NavBar>
      <template v-slot:title>
        <div class='title'>
            <div class="text">全部类型</div>
            <img v-if='1' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/allbooks_down.png" alt="" class='down img'>
            <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/allbooks_up.png" alt="" class='up img'>
        </div>
      </template>
    </NavBar>
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-top-bg.png" class="bg-top" mode="scaleToFill" />
    <div class="search-wrapper" :style="searchStyle">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/ic_allbook_hot.png" alt="" class='hot'>
      <div class="input-wrapper">
        <input type="text" class='search-input' v-model='searchText'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-icon-search.png" alt="" class='search-btn' @click='search' 	confirm-type='搜索' v-if='!searchOk'>
      </div>
      <div class="text" v-if='searchOk' @click='cancelSearch'>取消</div>
    </div>
    <div class="book-shelf-wrapper">
      <div class="bg"></div>
      <div class="book-shelf-layer">
        <div class="book-item-wrapper">
          <div class="book-cover">
            <img v-if='1' src="" alt="" class='cover-img' >
            <img v-else-if='1' src="" alt="" class='no-cover' >
            <img v-else src="" alt="" class='borrow-out' >
          </div>
          <div class="name">神笔马良</div>
        </div>
        <div class="book-item-wrapper">
          <div class="book-cover">
            <img src="" alt="" class='img'>
          </div>
          <div class="name">神笔马良</div>
        </div>
        <div class="book-item-wrapper">
          <div class="book-cover">
            <img src="" alt="" class='img'>
          </div>
          <div class="name">神笔马良</div>
        </div>
      </div>
      <div class="book-shelf-layer">

      </div>
      <div class="book-shelf-layer">

      </div>


    </div>
  </div>
</template>



<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background-color: white;
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-page-bg.png") 0 0/100% 100% no-repeat;
  position:relative;
  z-index:0;
  .bg-top{
    .box-size(112vw,22.133vw);
    .pos-absolute(0,0,unset,-6vw);
    z-index:100;
  }
  .title{
    .box-size(172px,44px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-title.png") 0 0/100% 100% no-repeat;
    .flex-simple(center,center);
    .text{
      .normal-font(16px,#6f3f12);
    }
    .img{
      .box-size(22px,22px);
      margin-left:6px;
    }
  }
  .search-wrapper{
    .box-size(100vw,33px);
    .flex-simple(center,center);
    .hot{
      .box-size(32px,32px);
      margin-right:6px;
    }
    .input-wrapper{
      .box-size(245px,33px,#E1DB9A);
      border-radius: 17px;
      padding:0 46px 0 20px;
      .search-input{
        .box-size(100%,100%);
        .normal-font(18px,#63696D);
      }
      .search-btn{
        .box-size(25px,25px);
        .pos-absolute(3px,20px,unset,unset);
      }

    }
    .text{
      .normal-font(18px,#8F5926);
      margin-left:2px;
      position: absolute;
      right:34px;
    }
  }
  .book-shelf-wrapper{
    .box-size(calc(100vw - 44px),unset);
    min-height:calc(100vh - 22.11vw - 66px);
    // min-height:calc(100vh - 22.11vw - 80px);
    margin:12px auto 0 auto;
    background-color: #A46C1F;
    border-radius:10px 20px 20px 10px;
    .bg{
      .pos-absolute(20px,20px,20px,20px);
      background-color: #C48830;
      border-radius: 20px;
    }
    .book-shelf-layer{
      .box-size(100%,26vh);
      background-image:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-shelf.png");
      background-size:100% ;
      background-position: left bottom;
      background-repeat: no-repeat;
      .flex-simple(flex-start,flex-end);
      padding:0 20px;
      .book-item-wrapper{
        .box-size(100px,160px);
        .book-cover{
          .box-size(100%,120px);
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-book-bg.png") 0 0/100% 100% no-repeat;
          .img{
            .box-size(100%,100%);
          }
          .status-img{

          }
        }
        .name{
          .box-size(88px,19px,#F6EAD0);
          flex-basis: unset;
          .line-center(19px);
          text-align: center;
          .normal-font(12px,#813F01);
          border-radius: 10px;
        }
      }

    }
  }
}


</style>
