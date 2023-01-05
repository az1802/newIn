<template>
  <div class="page">
    <NavBar title="班级图书馆" />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <HomeMenuTabs class='home-menu-tabs' active='class-library' />
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/tree_top.png") 0 0/100% 100% no-repeat;
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
