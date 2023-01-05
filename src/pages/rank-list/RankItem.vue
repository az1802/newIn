<script setup lang='ts'>

const props = defineProps({
  info:{
    type:Object,
    default:()=>({
      id:2,
      img:"",
      name:"我",
      num:200
    })
  }
})
</script>

<template>
  <div class='rank-item'>
    <div class="left">
      <div class="rank">{{props.info.id}}</div>
      <img class="avatar" :src="props.info.img" />
      <div class="name">{{props.info.name}}</div>
    </div>
    <div class="right">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/icon_integral.png" alt="" class='img'>
      <div class="num">{{props.info.num}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.rank-item{
  .box-size(100%,60px);
  .line-center(60px);
  .flex-simple(space-between,center);
  .left{
    .flex-simple(flex-start,center);
    .rank{
      .bold-font(16px,white);
    }
    .avatar{
      .box-size(30px,30px,#ccc);
      border-radius: 50%;
      margin-left:20px;
    }
    .name{
      .bold-font(16px);
      margin-left:10px;
    }
  }
  .right{
    .flex-simple(flex-start,center);
    .img{
      .box-size(30px,30px,#ccc);
      border-radius: 50%;
    }
    .num{
      .bold-font(16px);
      margin-left:10px;
    }
  }
}


</style>