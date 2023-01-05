<template>
  <div class="page">
    <NavBar title="大自然" />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/img_book_type_view.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
}
.home-menu-tabs{
  .pos-fixed(unset,unset,30px,0);
}

</style>
