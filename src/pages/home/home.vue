<script setup>
import { navigateTo } from '@/utils/wechat';

</script>
<template>
  <div class="page">
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <div class="notices-wrapper" @click='navigateTo("/pages/notices/notices")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/image_notice.png" alt="" class='img'>
      <div class='text'>消息</div>
    </div>
    <div class="upload-book-wrapper" @click='navigateTo("/pages/upload-book/upload-book")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/ic_add.png" alt="" class='img'>
      <div class='text'>添加图书</div>
    </div>
    <div class="rank-list-wrapper" @click='navigateTo("/pages/rank-list/rank-list")'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/image_ranking.png" alt="" class='img'>
      <div class='text'>排行榜</div>
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
  // position:relative;
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
  .notices-wrapper{
    .pos-fixed(100px,0,0,30px);
    width:60px;
    display: inline-block;
    .img{
      .box-size(60px,60px);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
  .upload-book-wrapper{
    .pos-fixed(unset,20px,160px,unset);
    width:100px;
    display: inline-block;
    text-align: center;
    .img{
      .box-size(60px,60px);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
  .rank-list-wrapper{
    .pos-fixed(unset,unset,160px,20px);
    width:100px;
    display: inline-block;
    text-align: center;
    .img{
      .box-size(60px,60px);
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
  .pos-fixed(unset,unset,30px,0);
}

</style>
