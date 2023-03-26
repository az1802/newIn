<script setup>
import { navigateTo } from '@/utils/wechat';
// import {UploadBookMethodSel} from "./UploadBookMethodSel.vue";
import {ref,onBeforeMount} from "vue";
import { useUserInfoStore } from '@/stores/user'
import { useBookStore } from '@/stores/book'

import {getBookCategoryAll} from "@/api/class";

const userInfoStore = useUserInfoStore();
const bookStore = useBookStore();

let showUploadBookSel = ref(false);


function goToCategory(item){
  // let title=""
  // if(name=="story"){
  //   title = "故事大王"
  // }else if(name=="keipu"){
  //   title = "科普百科"
  // }else if(name=="nature"){
  //   title = "大自然"
  // }else if(name=="children"){
  //   title = "儿童文学"
  // }

  navigateTo('/pages/category-detail/nature-books',{
    title:item.category,
    category_id:item.category_id
  })
}

onBeforeMount(()=>{
  getBookCategory();
})

async function getBookCategory(){
  let res = await getBookCategoryAll({
    params:{
      school_id:userInfoStore.school_id,
      student_id:userInfoStore.student_id,
    }
  });
  if(res){
    bookStore.categorylist = res.categorylist;
  }

}

</script>
<template>
  <div class="page">
    <NavBar title="共享图书" :showBack='false' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <!-- <div class="title-wrapper">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_main_title_bg.png" class="bg-top-title" />
      <div class="text">张文文的图书馆最棒</div>
    </div> -->

    <div class="notices-wrapper" @click='navigateTo("/pages/notices/notices",{})'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-notices.png" alt="" class='img'>
      <!-- <div class='text'>消息</div> -->
      <div class="tag">{{userInfoStore.new_message_num}}</div>
    </div>
    <div class="upload-book-wrapper" @click='showUploadBookSel=true'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-add-book.png" alt="" class='img'>
      <!-- <div class='text'>添加图书</div> -->
    </div>
    <UploadBookMethodSel v-model:show='showUploadBookSel'/>
    <div class="rank-list-wrapper" @click='navigateTo("/pages/rank-list/rank-list")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-rank.png" alt="" class='img'>
      <!-- <div class='text'>排行榜</div> -->
    </div>
    <div class='category-item story' @click='goToCategory(userInfoStore.categorylist[0])' >
      <img v-if='userInfoStore.categorylist[0].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_1.png" alt="" class='img' >
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_1_d.png" alt="" class='img' >
      <div class="text-wrapper">
        <img v-if='userInfoStore.categorylist[0].category_booknum'  src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item.png" alt="" class='text-bg' >
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item_d.png" alt="" class='text-bg' >
        <div class="text">{{userInfoStore.categorylist[0].category}}</div>
      </div>
    </div>
    <div class='category-item keipu' @click='goToCategory(userInfoStore.categorylist[1])'>
      <img  v-if='userInfoStore.categorylist[1].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_2.png" alt="" class='img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_2_d.png" alt="" class='img' >
      <div class="text-wrapper">
        <img  v-if='userInfoStore.categorylist[1].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item.png" alt="" class='text-bg' >
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item_d.png" alt="" class='text-bg' >
        <div class="text">{{userInfoStore.categorylist[1].category}}</div>
      </div>
    </div>
    <div class='category-item all' @click="navigateTo('/pages/all-books/all-books')">
      <img  v-if='1' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_3.png" alt="" class='img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_3_d.png" alt="" class='img' >
      <div class="text-wrapper">
        <img  v-if='1' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item.png" alt="" class='text-bg' >
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item_d.png" alt="" class='text-bg' >
        <div class="text">全部图书</div>
      </div>
    </div>
    <div class='category-item nature' @click='goToCategory(userInfoStore.categorylist[2])'>
      <img  v-if='userInfoStore.categorylist[2].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_4.png" alt="" class='img'>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_4_d.png" alt="" class='img' >
      <div class="text-wrapper">
        <img  v-if='userInfoStore.categorylist[2].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item.png" alt="" class='text-bg' >
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item_d.png" alt="" class='text-bg' >
        <div class="text">{{userInfoStore.categorylist[2].category}}</div>
      </div>
    </div>
    <div class='category-item children' @click='goToCategory(userInfoStore.categorylist[3])'>
      <img  v-if='userInfoStore.categorylist[3].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_5.png" alt="" class='img '>
      <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/img_theme_item_5_d.png" alt="" class='img' >
      <div class="text-wrapper">
        <img  v-if='userInfoStore.categorylist[3].category_booknum' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item.png" alt="" class='text-bg' >
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_theme_item_d.png" alt="" class='text-bg' >
        <div class="text">{{userInfoStore.categorylist[3].category}}</div>
      </div>
    </div>
    <HomeMenuTabs class='home-menu-tabs' active='share' />

  </div>
</template>



<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/theme_view_bg.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:1000;
  }

  .title-wrapper{
    .box-size(286px,48px);
    .pos-absolute(20px,0px,unset,0px);
    margin:0 auto;
    .bg-top-title{
      .box-size(286px,48px);
    }
    .text-svg{
      .box-size(286px,48px);
      .text{
        text-align:center;
        .bold-font(16px,#782A00)
      }
    }
  }
  .notices-wrapper{
    .pos-absolute(30.133vw,unset,unset,6.933vw);
    width:60px;
    display: inline-block;
    .img{
      .box-size(17.067vw,18.4vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
    .tag{
      .box-size(17px,17px,#F64E2D);
      border-radius:50%;
      .line-center(17px);
      text-align:center;
      .normal-font(11px,white);
      .pos-absolute(-8px,-5px,unset,unset);
    }
  }
  .upload-book-wrapper{
    .pos-absolute(unset,6.933vw,25.367vw,unset);
    display: inline-block;
    text-align: center;
    font-size:0px;
    z-index: 1000;
    .img{
      .box-size(16vw,17.333vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }

  .rank-list-wrapper{
    .pos-absolute(unset,unset,23.667vw,6.933vw);
    display: inline-block;
    text-align: center;
    font-size:0px;
    z-index: 1000;
    .img{
      .box-size(16.533vw,21.333vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
  .category-item{
    .bold-font(22px);
    .text-wrapper{
      .box-size(18.133vw,10.667vw);
      z-index:999;
      .text-bg{
        .box-size(18.133vw,10.667vw);
      }
      .text{
        .box-size(17.067vw,5.6vw);
        .pos-absolute(1.333vw,unset,unset,0px);
        .normal-font(3.2vw,#826926);
        z-index:1000;
        text-align:center;
        line-height:5.6vw;
      }
    }

    &.story{
      // .box-size(37.6vw,145.999px);
      .box-size(37.6vw,21.88vh);
      .pos-absolute(26.83vh,unset,unset,5.867vw);
      .img{
        .box-size(37.6vw,21.88vh);
      }
      .text-wrapper{
        .pos-absolute(unset,unset,0vh,11.2vw);
      }


    }
    &.keipu{
     .box-size(42.667vw,18.29vh);
      .pos-absolute(25.78vh,5.333vw,unset,unset);
      .img{
        .box-size(42.667vw,18.30vh);
      }
      .text-wrapper{
        .pos-absolute(4.04vh,unset,unset,-6.667vw);
      }
    }
    &.all{
      .box-size(35.467vw,18.59vh);
      .pos-absolute(unset,16.8vw,36.88vh,unset);
      .img{
        .box-size(35.467vw,18.59vh);
      }
      .text-wrapper{
        .pos-absolute(unset,unset,0px,11.2vw);
      }
    }
    &.nature{
      .box-size(39.467vw,17.80vh);
      .pos-absolute(54vh,unset,unset,1.067vw);
      .img{
        .box-size(39.467vw,17.80vh);
      }
      .text-wrapper{
        .pos-absolute(unset,unset,-1.46vh,18.933vw);
      }
    }
    &.children{
      .box-size(46.4vw,16.50vh);
      .pos-absolute(67vh,15.467vw,unset,unset);
      .img{
        .box-size(46.4vw,16.50vh);
      }
      .text-wrapper{
        .pos-absolute(unset,unset,-3.21vh,12.267vw);
      }
    }

  }
}
.home-menu-tabs{
  // .pos-absolute(unset,unset,0px,0);
  // z-index: 10000;
}

</style>
