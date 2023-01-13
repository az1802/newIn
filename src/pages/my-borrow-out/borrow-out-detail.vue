<script setup >


</script>

<template>
    <div class="page">
    <NavBar title='借出详情' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_1.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
}
</style>