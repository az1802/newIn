<script setup lang='ts'>

const props = defineProps({
  info:{
    type:Object,
    default:()=>({
      id:2,
      img:"",
      name:"我",
      num:200,
      rankIndex:1,
      rankImg:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-icon-first.png"
    })
  }
})
</script>

<template>
  <div class='rank-item'>
    <div class="left">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-one.png" alt="" class='rank' v-if='props.info.rank==1' />
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-two.png" alt="" class='rank' v-else-if='props.info.rank==2' />
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-three.png" alt="" class='rank' v-else-if='props.info.rank==3' />
      <div class="rank" v-else>{{props.info.rank}}</div>
      <img class="avatar" :src="props.info.img" :class='props.info.rankClass'/>
      <div class="name">{{props.info.name}}</div>
    </div>
    <div class="right">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xyph-icon-xyf.png" alt="" class='img'>
      <div class="num">{{props.info.num}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.rank-item{
  .box-size(100%,48px,white);
  padding:0 18px 0 12px;
  .flex-simple(space-between,center);
  border-radius:14px;
  .left{
    .flex-simple(flex-start,center);
    .rank{
      .box-size(22px,22px);
      .bold-font(16px,#95623B);
      .line-center(22px);
      text-align: center;
      .normal-font(14px,#7A7A7A);
    }
    .avatar{
      .box-size(27px,27px,#ccc);
      border-radius: 50%;
      margin-left:20px;
      border:1px solid #EDEDED;
      &.one{
        border:1px solid #FF8100;
      }
      &.two{
        border:1px solid #41BF1D;
      }
      &.three{
        border:1px solid #13B1F1;
      }
    }
    .name{
      .bold-font(13px,#2D2D2D);
      margin-left:15px;
    }
  }
  .right{
    .flex-simple(flex-end,center);
    .img{
      .box-size(19px,19px,transparent);
    }
    .num{
      .normal-font(14px,#FF8100);
      margin-left:4px;
    }
  }
}


</style>