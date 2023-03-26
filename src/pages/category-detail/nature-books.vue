
<script >
import { ref, unref, computed ,onMounted ,onBeforeMount} from "vue";
import {getBookListByCategory} from "@/api/book";
import { useUserInfoStore } from '@/stores/user'
import {navigateTo} from "@/utils/wechat"


let opts = {} ;
export default {
  onLoad(options){
    console.log('options: ', options);
    opts = options
  },
  setup() {


    const userInfoStore = useUserInfoStore();
    const mockBookList = [
      {
        id: 0,
        name: "尼尔斯骑鹅骑鹅",
        url: ""
      },
      {
        id: 1,
        name: "神笔马良",
        url: ""
      }
    ]


    const posMap = {
      1: {
        top: "-19vw",
        left: "24vw"
      },
      2: {
        top: "-2vw",
        left: "1vw"
      },
      3: {
        top: "13vw",
        left: "24vw"
      },
      4: {
        top: "-3vw",
        left: "76vw"
      },
      5: {
        top: "19vw",
        left: "54vw"
      },
      6: {
        top: "30vw",
        left: "77vw"
      },
      7: {
        top: "53vw",
        left: "34vw",
        "z-index":100,
      },
      8: {
        top: "74.5vw",
        left: "12vw"
      },
      9: {
        top: "85.5vw",
        left: "43vw"
      }
    }

    function handleBookList(mockBookList) {

      mockBookList.forEach((item, index) => {
        item.style = posMap[index + 1];
      })

      return mockBookList
    }

    // const bookList = ref(handleBookList(mockBookList));
    const bookList = ref([]);


    let title = ref("")
    onBeforeMount(() => {
       title.value = opts.title;
       _init();
    })


    async function _init(){
      let res = await getBookListByCategory({
        params:{
          school_id:userInfoStore.school_id,
          student_id:userInfoStore.student_id,
          page:1,
          category_id:opts.category_id
        }
      });
      if(res){
        bookList.value = handleBookList(res.booklist || [])
      }
      console.log('res: ', res);
    }

    function viewBookDetail(bookItem){
      navigateTo("/pages/book-detail/book-detail",bookItem)
    }

    return {
      bookList,
      title,
      viewBookDetail
    }
  }
}
</script>



<template>
  <div class="page">
    <NavBar :title="title" />
    <div class="bg-top-wrapper">
      <TopCloud />
    </div>

    <div class="island">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Forest.png" alt="" class='pic-forest'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Indicator2.png" alt=""
        class='indicator forest'>


      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Animal.png" alt="" class='pic-animals'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Animal2.png" alt=""
        class='pic-animals-2'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Indicator.png" alt=""
        class='indicator animals'>

      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Rivers.png" alt="" class='pic-rivers'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-Indicator.png" alt=""
        class='indicator2 rivers'>



      <div class='book-item' v-for='bookItem in bookList' :style='bookItem.style' :key='bookItem.id'  @click='viewBookDetail(bookItem)'>
        <img :src="bookItem" alt="" class='img'>
        <div class="name">{{ bookItem.bookname }}</div>
      </div>

    </div>
  </div>
</template>


<style lang="less" scoped>
@import '@static/index.less';

.page {
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-bg.png") 0 0/100% 100% no-repeat;
  position: relative;

  .bg-top-wrapper {
    .pos-absolute(0, 0, unset, 0);
    z-index: 1000;
  }

  .island {
    margin-top: calc((100vh - 140vw - 88px)/2);
    .box-size(100vw, 140vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Nature-pic-island.png") 0 0/100% 100% no-repeat;
    position: relative;

    .pic-forest {
      .box-size(20.98vw, 61.96vw);
      .pos-absolute(-8vw, unset, unset, 0);
    }

    .forest {
      .box-size(13.24vw, 11.64vw);
      .pos-absolute(44vw, unset, unset, 4vw);
    }

    .pic-animals {
      .box-size(48vw, 27.47vw);
      .pos-absolute(47vw, 0, unset, unset);
      z-index:100;
    }

    .pic-animals-2 {
      .box-size(14.67vw, 14.4vw);
      .pos-absolute(9vw, 20vw, unset, unset);
    }

    .animals {
      .box-size(13.24vw, 11.64vw);
      .pos-absolute(65vw, 8vw, unset, unset);
      z-index:1000;
    }


    .pic-rivers {
      .box-size(83.74vw, 57.58vw);
      .pos-absolute(unset, unset, 3vw, 0);
    }

    .rivers {
      .box-size(13.24vw, 11.64vw);
      .pos-absolute(unset, 26vw, 12vw, unset);
    }

    .book-item {
      .box-size(21.867vw, 33.6vw);
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_book_type_item_bg.9.png") 0 0/100% 100% no-repeat;
      position: absolute;

      .img {
        .box-size(14vw, 17vw, #ccc);
        margin: 7vw 0 0 5vw;
      }

      .name {
        .box-size(22.133vw, 6.4vw, #FFF5C7);
        border-radius: 3.2vw;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 6.4vw;
        .normal-font(12px, #814002);
        margin-top: -2.867vw;
      }
    }
  }
}

.home-menu-tabs {
  .pos-fixed(unset, unset, 30px, 0);
  z-index: 10000;
}
</style>
