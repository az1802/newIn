<script setup >

import { useUserInfoStore } from '@/stores/user'
const userInfo = useUserInfoStore()
</script>

<template>
  <div class='page'>

    <div class="form">登录页面</div>
    <div class="btn" @click='userInfo.setName("aaaaa")'>登录</div>
    <div>{{userInfo.name}}</div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_1.jpg") 0 0/100% 100% no-repeat;
}
</style>