<template>
  <div class="page">
    <NavBar title="班级图书馆" />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>

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
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
}
.home-menu-tabs{
  .pos-fixed(unset,unset,20px,0);
}

</style>
