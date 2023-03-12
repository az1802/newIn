<script setup >
import {ref} from "vue";
import {navigateTo} from "@utils/wechat";



</script>

<template>
  <div class='page'>
  <TeacherNavBar title="我的" />
  <div class="top-bg"></div>
  <div class="info">
    <div class='avatar'>
      <img src="" alt="">
    </div>
    <div class="iden">学校管理员</div>
    <div class="school">深圳龙华二外</div>
  </div>

  <div class="list">
    <div class="item">
      <div class="left">
        <img src="" alt="" class='tag'>
        <div class="label">切换身份</div>
      </div>
    <img src="" alt="" class='right'>
    </div>
  </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  background-color: #F6F6F6;

}
</style>