<script setup >
import { useUserInfoStore } from '@/stores/user';
import {navigateTo} from "@utils/wechat"
const userInfo = useUserInfoStore();


</script>

<template>
  <div class="page">
    <NavBar :title='userInfo.name+"的图书馆"' />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
}
</style>