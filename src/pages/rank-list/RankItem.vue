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
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-icon-first.png" alt="" class='rank' v-if='props.info.ranking==1' />
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-icon-two.png" alt="" class='rank' v-else-if='props.info.ranking==2' />
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-icon-third.png" alt="" class='rank' v-else-if='props.info.ranking==3' />
      <div class="rank border" v-else>{{props.info.ranking}}</div>
      <img class="avatar" :src="props.info.photo" />
      <div class="name">{{props.info.xingming}}</div>
    </div>
    <div class="right">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-icon-intergal.png" alt="" class='img' mode='aspectFit'>
      <div class="num">{{props.info.sharebooks_score}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.rank-item{
  .box-size(100%,62px);
  padding:0 30px 0 20px;
  .flex-simple(space-between,center);
  background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-user-bg.png") 0 0/100% 100% no-repeat;
  margin-bottom:10px;
  .left{
    .flex-simple(flex-start,center);
    .rank{
      .box-size(32px,32px);
      .bold-font(16px,#95623B);
      border-radius:50%;
      .line-center(32px);
      text-align: center;
      &.border{
        background: #FDF9CF;
        border:1px solid #DFBD62;
      }
    }
    .avatar{
      .box-size(45px,45px,#ccc);
      border-radius: 50%;
      margin-left:18px;
    }
    .name{
      .bold-font(22px,#A74D11);
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
      .normal-font(16px,#A74D11);
      margin-left:10px;
    }
  }
}


</style>