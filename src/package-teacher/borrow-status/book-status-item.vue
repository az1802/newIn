<script setup>
const props = defineProps({
  info:{
    type:Object,
    default:()=>{ return{}}
  },
  type:{
    type:String,
    default:"borrow"
  }
})
</script>

<template>
  <div class="book-info">
    <div class="left" :class='props.type'>
      <img src="" alt="" class="img" />
    </div>
    <div class="right" >
     <div class="info">
      <div class="name">{{props.info.name}}</div>
      <div class="detail" >{{props.info.detailText}}</div>
     </div>
     <div class="status" :class='props.info.status'>
      {{props.info.statusText}}
     </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.book-info {
  .box-size(100%,82px,#F5F5F5);
  .flex-simple(flex-start,center);
  font-size:0px;
  border-radius:12px;
  padding:12px;
  .left {
    .box-size(48px,62px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jyxq-bk-hs.png") 0 0/100% 100% no-repeat;
    .img {
      .box-size(30px,50px,#ccc);
      margin:6px 12px;
    }
  }
  .right {
    box-sizing:border-box;
    padding-left:12px;
    width:calc(100% - 48px);
    .flex-simple(space-between,center);
    font-size:0px;
    .info{
      .box-size(calc(100% - 42px),unset);
      padding-right:20px;
      font-size:0px;
      .name {
        .box-size(100%,14px);
        .line-center(14px);
        .normal-font(14px,#2d2d2d);
        .no-wrap();
      }
      .detail {
        .line-center(12px);
        .normal-font(12px,#797979);
        margin-top: 10px;
        .no-wrap();
      }
    }
    .status{
      .box-size(42px,14px);
      .line-center(14px);
      text-align:center;
      .normal-font(14px,#797979);
      &.applying{
        color:#FF8000;
      }
      &.agreed{
        color:#4DB12B;
      }
      &.jieyue{
        color:#00A3FF;
      }
      &.returned{
        color:#797979;
      }
    }


  }
}
</style>
