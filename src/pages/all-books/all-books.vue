<script setup>
import AllBooksNavBar from "./all-books-nav-bar.vue";
import {useSystemInfo} from "@hooks/commonHooks";
import {ref,unref,computed,shallowRef} from "vue";
import { navigateTo } from '../../utils/wechat';
import { onBeforeMount } from 'vue';
import API from "@/api/index";


const systemInfo = useSystemInfo();

let searchText = ref("");
let searchOk = ref(false);
let searchConfirmText = ref("")

let bookList = [];


async function getBookList(category_id="",keywords=""){
  let userInfo = uni.getStorageSync("userInfo");
  let params = {
      school_id:userInfo.school_id,
      student_id:userInfo.student_id,
    }

  if(category_id){
    params.category_id = category_id;
  }
  if(keywords){
    params.keywords = keywords;
  }

  let books = await API.Book.getAllBookList({
    params
  })

  return books;
}

function transformBookList(list){
  let selArr = [],res=[];
  for(let i= 0 ; i<list.length;i++){
    selArr.push(list[i]);
    if((i+1)%3==0){
      res.push(selArr);
      selArr = [];
    }
  }
  if(selArr.length>0){
    res.push(selArr);
  }
  return res;
}

let allBooks = shallowRef([]);
// let showShelfList = shallowRef([]);


const typeList = ref([]);
const typeIndex = ref();

function typeChange(e) {
  console.log('e: ', e);
  typeIndex.value = e.detail.value;
}



onBeforeMount(async ()=>{
  uni.showLoading();
  let res = await getBookList();
  console.log('allBooks: ', res);
  allBooks = res?.booklist || [];
  typeList.value = res?.categorylist || [];
  uni.hideLoading();
})



let showShelfList = computed(()=>{
  let searchVal = unref(searchConfirmText).trim();
  let category = unref(typeList)[unref(typeIndex)];
  let tempList = allBooks;
  if(searchVal){
    tempList = tempList.filter(item=>{
      return item.bookname.indexOf(searchVal)!=-1
    })
  };

  if(category){
    tempList = tempList.filter(item=>{
      return item.category_id == category.category_id
    })
  }

  return transformBookList(tempList)
})












// function mockBookList(){
//   let statusMap = {
//     0 : "no-cover",
//     1:'cover',
//     2 :"borrow-out"
//   }
//   let mockList=[]
//   for(let i= 1 ; i<20;i++){
//     mockList.push({
//       name:"书籍"+i,
//       id:i,
//       type:"active",
//       status:statusMap[i%2],
//       cover:i%3==0,
//     })

//   }
//   bookList = mockList;
// }
// mockBookList();


// let showShelfList = shallowRef(transformBookList(bookList));



function search(){
  searchOk.value = "true";
  searchConfirmText.value = unref(searchText)
  // showShelfList.value = transformBookList(bookList.filter(item=>item.name.indexOf(unref(searchText).trim())!==-1))
}

function cancelSearch(){
  if(!searchOk.value){
    return
  }
  searchOk.value = false;
  searchText.value="";
  searchConfirmText.value="";
}

const searchStyle = ref({
  marginTop:systemInfo.statusBarHeight ? `calc(24.133vw - 24px - ${systemInfo.statusBarHeight}px)` : "calc(22.133vw - 24px)"
})



function viewBookDetail(bookItem){
  navigateTo("/pages/book-detail/book-detail",bookItem)
}
</script>
<template>
  <div class="page">
    <NavBar>
      <template v-slot:title>
        <div class='title'>
            <div class="text">{{ typeList[typeIndex] ? typeList[typeIndex].category  : "全部类型" }}</div>
            <img v-if='1' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/allbooks_down.png" alt="" class='down img'>
            <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/allbooks_up.png" alt="" class='up img'>

            <picker
              @change="typeChange"
              :value="typeIndex"
              :range="typeList"
              range-key='category'
              mode = selector
              class="picker"
            >
              <view class="uni-input">{{ typeList[typeIndex] ? typeList[typeIndex].category  : "请选择图书类型" }}</view>
            </picker>

        </div>
      </template>
    </NavBar>
    <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-top-bg.png" class="bg-top" mode="scaleToFill" /> -->
    <div class="search-wrapper" :style="searchStyle">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/ic_allbook_hot.png" alt="" class='hot'>
      <div class="input-wrapper">
        <input type="text" class='search-input' v-model='searchText'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-icon-search.png" alt="" class='search-btn' @click='search' 	confirm-type='搜索' v-if='!searchOk'>
      </div>
      <div class="text" :class='[searchOk ? "" :"hide"]' @click='cancelSearch'>取消</div>
    </div>
    <scroll-view class="shelf-list-wrapper" scroll-y :show-scrollbar='false' enhanced>
        <!-- <div class="bg"></div> -->
        <div class="book-shelf-layer" v-for='(shelfItem,index) in showShelfList' :key='index'>
          <div class="book-item-wrapper" v-for='bookItem in shelfItem' :key='bookItem.id' @click='viewBookDetail(bookItem)'>
            <div class="book-cover" :class='[bookItem.cover?"":"no-cover"]'>
              <img :src="bookItem.cover" alt="" v-if='bookItem.cover' class='cover-img'>
              <img v-if='bookItem.status=="borrow-out"' src="" alt="" class='borrow-out img' >
            </div>
            <div class="name">{{bookItem.bookname}}</div>
          </div>
        </div>
        <div class="empty-wrapper" v-if='showShelfList.length==0' >
          <img src="https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/search-picture.png" alt="" class='empty' >
          <div class="text">暂时没有你想要的内容！</div>
        </div>
    </scroll-view>
  </div>
</template>



<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background-color: white;
  // background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-page-bg.png") 0 0/100% 100% no-repeat;
  background: url("https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/Allbooks-bg.png") 0 0/100% 100% no-repeat;
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
    .picker{
      .pos-absolute(0,0,0,0);
      background: transparent;
      opacity: 0;
      z-index: 100;
      .uni-input{
       height:44px;
      }
    }
  }
  .search-wrapper{
    .box-size(100vw,33px);
    .flex-simple(center,center);

    .hot{
      .box-size(32px,32px);
      margin:0 6px 0 24px;
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
      margin-left:10px;
      &.hide{
        opacity: 0;
      }
      // position: absolute;
      // right:34px;
    }
  }
  .shelf-list-wrapper{
    width:calc(100vw - 44px);
    margin:12px auto 0 auto;
    min-height:calc(100vh - 22.11vw - 66px - 24px);
    max-height:calc(100vh - 22.11vw - 40px - 24px);
    border-radius:10px 20px 20px 10px;
    background-color: #A46C1F;
    background: url("https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/Allbooks-bottomborder.png") 0 0/100% 100% no-repeat;
    text-align:center;
    .empty-wrapper{
      .box-size(218px,unset);
      // margin:calc((100vh - 22.11vw - 66px - 222px)/2) auto 0 auto;
      margin:calc((100vh - 22.11vw - 150px - 222px)/2) auto 0 auto;
      font-size:0px;
      .empty{
        .box-size(218px,222px);
      }
      .text{
        text-align:center;
        .line-center(15px);
        .bold-font(15px,white);
        margin-top:15px;
      }
    }
    .book-shelf-layer{
      .box-size(100%,174px);
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/all-books-shelf.png") left bottom / 100%  no-repeat;
      padding:0 20px;
      display: flex;
      align-items:flex-end;
      .book-item-wrapper{
        .box-size(33%,120px);
        display:inline-block;
        text-align: center;
        font-size:0px;
        margin-bottom:25px;
        .book-cover{
          .box-size(73px,95px);
          background: url("https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/allbooks-cover.png") 0 0/100% 100% no-repeat;
          display: inline-block;
          &.no-cover{
            background: url("https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/allbooks-no-cover.png") 0 0/100% 100% no-repeat;
          }
          .cover-img{
            .box-size(46px,64px,#ccc);
            margin:10px;
            margin-left:12px;
          }
          .borrow-out{
            .pos-absolute(0,0,0,0);
            background-color: #ccc;
          }
        }
        .name{
          display: inline-block;
          .box-size(88px,20px,#F6EAD0);
          flex-basis: unset;
          .line-center(20px);
          text-align: center;
          .normal-font(12px,#813F01);
          border-radius: 10px;
          margin-top:5px;
          .no-wrap();
        }
      }

    }
  }
}


</style>
