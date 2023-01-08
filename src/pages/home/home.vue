<script setup>
import { navigateTo } from '@/utils/wechat';
import {UploadBookMethodSel} from "./UploadBookMethodSel.vue";
import {ref} from "vue";


let showUploadBookSel = ref(false)

</script>
<template>
  <div class="page">
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <div class="notices-wrapper" @click='navigateTo("/pages/notices/notices")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-notices.png" alt="" class='img'>
      <!-- <div class='text'>消息</div> -->
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
    <div class='category-item'>
      故事大王
    </div>
    <div class='category-item'>
      科普百科
    </div>
    <div class='category-item' @click="navigateTo('/pages/all-books/all-books')">
      全部图书
    </div>
    <div class='category-item' @click="navigateTo('/pages/category-detail/nature-books')">
      大自然
    </div>
    <div class='category-item'>
      儿童文学
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
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
  .notices-wrapper{
    .pos-absolute(30.133vw,0,0,6.933vw);
    width:60px;
    display: inline-block;
    .img{
      .box-size(17.067vw,18.4vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
  .upload-book-wrapper{
    .pos-absolute(unset,6.933vw,42.667vw,unset);
    display: inline-block;
    text-align: center;
    font-size:0px;
    .img{
      .box-size(16vw,17.333vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }

  .rank-list-wrapper{
    .pos-absolute(unset,unset,42.667vw,6.933vw);
    display: inline-block;
    text-align: center;
    font-size:0px;
    .img{
      .box-size(16.533vw,21.333vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
  .category-item{
    padding:30px 0 0 100px;
    .bold-font(22px);
  }
}
.home-menu-tabs{
  .pos-absolute(unset,unset,30px,0);
}

</style>
