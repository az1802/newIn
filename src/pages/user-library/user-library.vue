<script>
let opts = {};
export default {
  onLoad(options) {
    opts = options;
    console.log('opts: ', opts);
  }
}
</script>
<script setup >
import { useUserInfoStore } from '@/stores/user';
import { navigateTo } from "@utils/wechat";
import { ref, unref, computed, onBeforeMount } from "vue";
import ThemeSel from './ThemeSel.vue';
import BookItem from "./BookItem.vue"
import { useSystemInfo } from "@hooks/commonHooks";
import API from "@/api/index"





const systemInfo = useSystemInfo();
// console.log('systemInfo: ', systemInfo);

const userInfo = useUserInfoStore();

function calcPos(scrollTop, list) {
  // let leftArr = [36,66,19,55];
  let { screenHeight, statusBarHeight } = systemInfo;
  let listHeight = screenHeight - parseInt(statusBarHeight) - 44;
  list.forEach((item, index) => {
    let h = (125 * (index + 1) - scrollTop) % listHeight, left;
    if (h < listHeight * 0.33) {
      left = 36 + 30 * (h / (listHeight * 0.33));
    } else if (h > listHeight * 0.33 && h < listHeight * 0.66) {
      left = 66 - 47 * ((h - listHeight * 0.33) / (listHeight * 0.33));
    } else {
      left = 19 + 36 * ((h - listHeight * 0.66) / (listHeight * 0.33));
    }
    item.style.left = left + "%";
  })
}

function handleList(list) {

  for (let i = 0; i < list.length; i++) {
    let left = '55';
    list[i].style = {
      left: `${left}%`
    }
  }
  calcPos(0, list);
  return list;
}

let classmateInfo = ref({
  userInfo:{
    xingming: "",
    school_id: "",
    student_id: "",
  },
  bookList: []
})


async function getPersonalBookList() {
  uni.showLoading();
  // let params = {
  //   school_id: 306,
  //   student_id: 500392
  // }
  let params = {
    school_id:opts.school_id,
    student_id:opts.student_id
  }
  let res = await API.Book.getPersonalBookList({
    params
  })
  uni.hideLoading();

  classmateInfo.value.bookList = handleList(res.list)
}


async function getUserInfo() {

}


onBeforeMount(() => {
  getPersonalBookList();
  classmateInfo.value.userInfo = opts;
})






function handleScroll(e) {
  let scrollTop = e.detail.scrollTop;
  // console.log('scrollTop: ', scrollTop);
  calcPos(scrollTop, unref(classmateInfo).bookList)
}


const theme = ref(1);
const showThemeSel = ref(false);

const bgMapUrl = {
  1: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
  1: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
  2: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_2_bg.jpg",
  3: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_3_bg.jpg",
  4: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_4_bg.jpg",
}

const bgStyle = computed(() => {
  console.log(unref(theme))
  return {
    backgroundImage: `url(${bgMapUrl[unref(theme)]})`
  }
})


let showUploadBookSel = ref(false)

const listStyle = ref({
  height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
})

function viewBookDetail(bookItem){
  console.log('bookItem: ', bookItem);
  navigateTo("/pages/book-detail/book-detail",bookItem)
}


</script>

<template>
  <div class="page" :style='bgStyle'>
    <NavBar :title='classmateInfo.userInfo.xingming + "的图书馆"' />
    <div class="bg-top-wrapper">
      <TopCloud />
    </div>
    <scroll-view class="list-wrapper" scroll-y :show-scrollbar='false' enable-passive @scroll='handleScroll'
      :style='listStyle'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.bookList' :key='item.id' :style='item.style' @click='viewBookDetail(item)'>
        <BookItem :info='item' :theme='theme' />
      </div>
    </scroll-view>
    <!-- <div class="btn-group" >
       <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn_lib_published2.png" alt="" class='btn put-on'>
       <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-off.png" alt="" class='btn off'>
       <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-to-confirm.png" alt="" class='btn to-confirm'>
      </div> -->

    <!-- <ThemeSel v-model:theme='theme' /> -->

    <!-- <div class="upload-book-wrapper" @click='showUploadBookSel=true'>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-add-book.png" alt="" class='img'>
        <div class='text'>添加图书</div>
      </div>
      <UploadBookMethodSel v-model:show='showUploadBookSel'/> -->
    <!-- <div class="add-book">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-add-book.png" alt="" class='img'>
      </div> -->
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.page {
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg") 0 0/100% 100% no-repeat;
  position: relative;

  .bg-top-wrapper {
    .pos-absolute(0, 0, unset, 0);
    z-index: 1000;
  }

  .list-wrapper {
    .box-size(100vw, unset);

    // padding-top:60px;
    .book-item-wrapper {
      .box-size(90px, 125px);
      position: relative;
      padding-top: 25px;
    }
  }

  .btn-group {
    .pos-fixed(25vh, unset, unset, 4vw);

    .btn {
      .box-size(90px, 37.999px);
      margin-top: 17px;
      display: block;
    }
  }

  .upload-book-wrapper {
    .pos-absolute(unset, 6.933vw, 24.667vw, unset);
    display: inline-block;
    text-align: center;
    font-size: 0px;

    .img {
      .box-size(16vw, 17.333vw);
    }

    .text {
      text-align: center;
      .normal-font(16px);
    }
  }
}</style>