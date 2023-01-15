<script setup lang='ts'>
  import {ref }  from "vue"

  const bookDetail = ref({
    name:"",
    author:"",
    owners:[],
    pingjia:[]
  })

</script>

<template>
  <div class='page'>
    <NavBar title='' />


  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_1.jpg") 0 0/100% 100% no-repeat;
  position:relative;
}
</style>