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
    <div class="right" v-if='props.type=="upload"'>
      <div class="name">萤王（继穿堂风，蝙蝠香之后，曹文...12312312</div>
      <div class="info" >童话故事类·60页·3921字·期限32天</div>
      <div class="time" >2019.09.30上传</div>
    </div>
    <div class="right" v-else>
      <div class="name">萤王（继穿堂风，蝙蝠香之后，曹文</div>
      <div class="info" >童话故事类·60页·3921字·用时25天</div>
      <div class="time" >2019.09.30-2019.10.27</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.book-info {
  .box-size(100%,73px);
  .flex-simple(flex-start,center);
  font-size:0px;
  .left {
    .box-size(57px,73px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jyxq-bk-hs.png") 0 0/100% 100% no-repeat;
    &.upload{
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-bk-lan.png") 0 0/100% 100% no-repeat;
    }
    .img {
      .box-size(30px,50px,#ccc);
      margin:6px 12px;
    }
  }
  .right {

    box-sizing:border-box;
    padding-left:14px;
    width:calc(100% - 57px);
    .name {
      .box-size(100%,14px);
      padding-right:20px;
      .line-center(14px);
      .normal-font(14px,#2d2d2d);
      .no-wrap();
    }
    .info {
      .line-center(12px);
      padding-right:32px;
      .normal-font(12px,#797979);
      margin-top: 8px;
      .no-wrap();
    }
    .time{
      .box-size(100%,11px);
      .line-center(11px);
      .normal-font(11px,#AFAFAF);
      margin-top:14px;
    }
  }
}
</style>
