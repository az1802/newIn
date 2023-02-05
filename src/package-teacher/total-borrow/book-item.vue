<script setup>
import AvatarList from './avatar-list.vue';
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
    <div class="right">
      <div class="name">流浪地球</div>
      <div class="info">童话故事类·85页·5120字·期限50天 拷贝</div>
      <div class="count">
        <div class="num">56</div>
        <div class="text">人读过</div>
      </div>
      <div class="avatar-wrapper">
        <div class="avatar-list">
          <AvatarList :list='[1,2,3,4]' />
          <div class="text">等56人{{props.type=='borrow' ? "参与" :"上传"}}</div>
        </div>
        <div class="time">最近2019.10.22</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.book-info {
  .box-size(100%,95px);
  .flex-simple(flex-start,center);
  .left {
    .box-size(70px,95px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jyxq-bk-hs.png") 0 0/100% 100% no-repeat;
    &.upload{
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/xsxx-content-bk-lan.png") 0 0/100% 100% no-repeat;
    }
    .img {
      .box-size(40px,65px,#ccc);
      margin:12px 16px;
    }
  }
  .right {
    margin-left: 16px;
    flex: 1;
    .name {
      .line-center(13px);
      .bold-font(13px,#2d2d2d);
      .no-wrap();

    }
    .info {
      .line-center(12px);
      .bold-font(12px,#797979);
      margin-top: 9px;
      .no-wrap();
    }
    .count {
      .flex-simple(flex-start,flex-end);
      margin-top: 12px;
      height: 12px;
      .text {
        .normal-font(10px,#A5A5A5);
      }
      .num {
        display: inline-block;
        .bold-font(12px,#FF8000);
      }
    }
    .avatar-wrapper{
      .box-size(100%,22px);
      .flex-simple(space-between,center);
      margin-top:16px;
      .avatar-list{
        flex:1;
        .line-center(22px);
        .flex-simple(flex-start,center);
        .text{
          .normal-font(11px,#AFAFAF);
          margin-left:6px;
        }
      }
      .time{
        .box-size(140px,22px);
        .line-center(22px);
        text-align: right;
        .normal-font(11px,#AFAFAF);
      }
    }
  }
}
</style>
