<script>
import { useUserInfoStore } from '@/stores/user';
import { navigateTo } from "@utils/wechat";
import { ref, unref, computed, onBeforeMount, watch,defineComponent ,onMounted} from "vue";
import ThemeSel from './ThemeSel.vue';
import BookItem from "./BookItem.vue"
import { useSystemInfo } from "@hooks/commonHooks";
import API from "@/api/index"

export default {
  components:{
    ThemeSel,
    BookItem
  },
  onLoad(opts) {
    console.log('opts: ', opts);
  },
  onShow() {
    console.log('图书显示', this.getOwnBookList)
    if (this.mounted&&this.getOwnBookList) {
      this.getOwnBookList()
    }
  },
  setup() {
    const systemInfo = useSystemInfo();
    const userInfo = useUserInfoStore();
    let mounted = ref(false);

    function handleList(arr) {
      console.log('arr: ', arr);

      for (let i = 0; i < arr.length; i++) {
        let left = '55';
        arr[i].style = {
          left: `${left}%`
        }
      }
      calcPos(0, arr);
      return arr;
    }

    let classmateInfo = ref({
      name: userInfo.xingming,
      onshelfList: [],
      offshelfList: [],
      beconfirmedList: [],
      theme: 1
    })

    async function getOwnBookList() {
      uni.showLoading();
      let params = {
        school_id: userInfo.school_id,
        student_id: userInfo.student_id
      }
      let res = await API.User.getMyLibrary({
        params
      })
      uni.hideLoading();
      console.log('res: ', res);

      if (res) {
        classmateInfo.value.onshelfList = handleList(res.list_onshelf);
        classmateInfo.value.offshelfList = handleList(res.list_offshelf);
        classmateInfo.value.beconfirmedList = handleList(res.list_beconfirmed);
        classmateInfo.value.theme = res.theme || 1;
      }
    }

    onBeforeMount(() => {
      getOwnBookList();
    })
    onMounted(()=>{
      mounted.value = true
    })

    function calcPos(scrollTop, list) {
      let leftArr = [36, 66, 19, 55];
      let { screenWidth, screenHeight, statusBarHeight } = systemInfo;
      let listHeight = screenHeight - parseInt(statusBarHeight) - 44;
      // let {screenHeight,screenWidth} = systemInfo;
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

    function handleScroll(e) {
      let scrollTop = e.detail.scrollTop;
      // console.log('scrollTop: ', scrollTop);
      if (unref(bookStatus) == "onshelf") {
        calcPos(scrollTop, unref(classmateInfo).onshelfList);
      } else if (unref(bookStatus) == "offshelf") {
        calcPos(scrollTop, unref(classmateInfo).offshelfList);
      } else if (unref(bookStatus) == "beconfirmed") {
        calcPos(scrollTop, unref(classmateInfo).beconfirmedList);
      }

    }



    const showThemeSel = ref(false);

    const bgMapUrl = {
      1: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
      1: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
      2: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_2_bg.jpg",
      3: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_3_bg.jpg",
      4: "https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_4_bg.jpg",
    }

    const bgStyle = computed(() => {

      return {
        backgroundImage: `url(${bgMapUrl[unref(classmateInfo).theme]})`
      }
    })


    let showUploadBookSel = ref(false)

    const listStyle = ref({
      height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
    })

    let bookStatus = ref("onshelf") //onshelf offshelf beconfirmed

    watch(() => classmateInfo.value.theme, (nval) => {
      console.log('nval: ', nval);
      API.User.getSwitchMylibraryTheme({
        params: {
          school_id: userInfo.school_id,
          student_id: userInfo.student_id,
          theme: nval
        }
      });

    })

    function viewBookDetail(bookItem) {
      navigateTo("/pages/user-library/my-book-detail", JSON.parse(JSON.stringify(bookItem)))
    }

    async function getBookDetail(book_id) {
      let userInfo = uni.getStorageSync("userInfo");
      let params = {
        school_id: userInfo.school_id,
        student_id: userInfo.student_id,
        book_id,
      }

      let res = await API.Book.getMyLibraryBookInfo({
        params
      });
      return res;
    }

    async function viewConfirmBookDetail(bookItem) {
      // let res = await getBookDetail(bookItem.book_id);
      // console.log('res: ', res);
      // if (res?.bookinfo) {
      //   navigateTo("/pages/upload-book/upload-book-info",{
      //     ...JSON.parse(JSON.stringify(res.bookinfo)),
      //     parentConfirmOnly:true
      //   } );
      // }


          navigateTo("/pages/upload-book/parent-confirm",{
          ...JSON.parse(JSON.stringify(bookItem)),
        } );
    }




    return {
      bgStyle,
      classmateInfo,
      bookStatus,
      handleScroll,
      listStyle,
      showUploadBookSel,
      viewConfirmBookDetail,
      viewBookDetail,
      getOwnBookList,
      mounted


    }
  }
}

</script>

<template>
  <div class="page" :style='bgStyle'>
    <NavBar :title='classmateInfo.name + "的图书馆"' />
    <div class="bg-top-wrapper">
      <TopCloud />
    </div>
    <scroll-view v-show="bookStatus == 'onshelf'" class="list-wrapper" scroll-y :show-scrollbar='false' enable-passive
      @scroll='handleScroll' :style='listStyle'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.onshelfList' :key='item.id' :style='item.style'
        @click='viewBookDetail(item)'>
        <BookItem :info='item' :theme='classmateInfo.theme' />
      </div>
    </scroll-view>
    <scroll-view v-show="bookStatus == 'offshelf'" class="list-wrapper" scroll-y :show-scrollbar='false' enable-passive
      @scroll='handleScroll' :style='listStyle'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.offshelfList' :key='item.id' :style='item.style'
        @click='viewBookDetail(item)'>
        <BookItem :info='item' :theme='classmateInfo.theme' />
      </div>
    </scroll-view>
    <scroll-view v-show="bookStatus == 'beconfirmed'" class="list-wrapper" scroll-y :show-scrollbar='false' enable-passive
      @scroll='handleScroll' :style='listStyle'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.beconfirmedList' :key='item.id' :style='item.style'
        @click='viewConfirmBookDetail(item)'>
        <BookItem :info='item' :theme='classmateInfo.theme' />
      </div>
    </scroll-view>
    <div class="btn-group">
      <div class="btn put-on" @click='bookStatus = "onshelf"' :class='[bookStatus == "onshelf" ? "active" : ""]'>
        已上架
      </div>
      <div class="btn off" @click='bookStatus = "offshelf"' :class='[bookStatus == "offshelf" ? "active" : ""]'>
        已下架
      </div>
      <div class="btn to-confirm" @click='bookStatus = "beconfirmed"' :class='[bookStatus == "beconfirmed" ? "active" : ""]'>
        待确认
      </div>
      <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn_lib_published2.png" alt="" class='btn put-on' @click='bookStatus="onshelf"'> -->
      <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-off.png" alt="" class='btn off' @click='bookStatus="offshelf"'> -->
      <!-- <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-to-confirm.png" alt="" class='btn to-confirm' @click='bookStatus="beconfirmed"'> -->
    </div>

    <ThemeSel v-model:theme='classmateInfo.theme' />

    <div class="upload-book-wrapper" @click='showUploadBookSel = true'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-add-book.png" alt="" class='img'>
      <!-- <div class='text'>添加图书</div> -->
    </div>
    <UploadBookMethodSel v-model:show='showUploadBookSel' />
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
      line-height: 37.999px;
      text-align: center;
      font-size: 16px;

      &.put-on {
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-Onshelves.png") 0 0/100% 100% no-repeat;
        .btn-text(16px);

        &.active {
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-OnshelvesPress.png") 0 0/100% 100% no-repeat;
        }
      }

      &.off {
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-Shelves.png") 0 0/100% 100% no-repeat;
        .btn-text(16px, #595858);

        &.active {
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-ShelvesPress.png") 0 0/100% 100% no-repeat;
        }
      }

      &.to-confirm {
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-Tobeconfirmed.png") 0 0/100% 100% no-repeat;
        .btn-text(16px, #B65718);

        &.active {
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/Mylibrary-button-TobeconfirmedPress.png") 0 0/100% 100% no-repeat;
        }
      }
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