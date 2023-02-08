<script setup>
import CountNum from "./count-num.vue"
const props = defineProps({
  list:{
    type:Array,
    default:[]
  },
  type:{
    type:String,
    default:""
  }
})

</script>

<template>
  <div class='list-wrapper'>
    <div class="top-three">
      <div class="top-item one">
        <div class="book-wrapper">
          <img src="" alt="" class='img'>
        </div>
        <CountNum text='130本' type='upload'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-one.png" alt="" class="tag">
      </div>
      <div class="top-item two">
        <div class="book-wrapper">
          <img src="" alt="" class='img'>
        </div>
        <CountNum text='130本' type='upload'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-two.png" alt="" class="tag">
      </div>
      <div class="top-item three">
        <div class="book-wrapper">
          <img src="" alt="" class='img'>
        </div>
        <CountNum text='130本' type='upload'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-three.png" alt="" class="tag">
      </div>
    </div>
    <div class="list-item" v-for='item in props.list' :key='item'>
      <div class="left">
        <div class="num">{{item+3}}</div>
        <div class="book-wrapper">
          <img src="" alt="" class='img'>
        </div>
        <div class="book-info">
          <div class="name">萤王(继川堂风,蝙蝠香之后,曹文蝙蝠香之后蝙蝠香之后)</div>
          <div class="detail">童话故事类·67页</div>
        </div>
      </div>
      <div class="right">
        <CountNum text='130本' type='upload'/>
      </div>


    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.list-wrapper{
  .top-three{
    .box-size(100%,120px);
    .flex-simple(space-between,center);
    padding:16px 12px 12px 12px;
    .top-item{
      .box-size(110px,96px,#ccc);
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/mod-one.png") 0 0/100% 100% no-repeat;
      border-radius: 4px;
      .flex-simple(flex-start,center);
      flex-direction: column;
      .book-wrapper{
        width:48.5px;
        height:66.25px;
        background:url(https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/Allbooks-Books.png) 0 0/100% 100% no-repeat;
        margin:0 auto;
        .img{
          .box-size(35px,48px,#ccc);
          margin-left:7px;
          margin-top:7px;
        }
      }

      .name{
        .normal-font(13px,#2D2D2D);
        margin:9px 0 2px 0;
        .line-center(13px);
      }
      .tag{
        .box-size(18px,21px);
        .pos-absolute(0,9px,unset,unset);
      }
    }
  }
  .list-item{
    .box-size(100%,60px);
    padding:0 25px 0 20px;
    .flex-simple(space-between,center);
    .left{
      width:calc(100% - 50px);
      .flex-simple(flex-start,center);
      .num{
        .box-size(16px,unset);
        text-align: center;
        .normal-font(14px,#7A7A7A);
      }
      .book-wrapper{
        width:35.33px;
        height:48.16px;
        background:url(https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/Allbooks-Books.png) 0 0/100% 100% no-repeat;
        margin:0 15px;
        .img{
          .box-size(22px,29px,#ccc);
          margin-left:6px;
          margin-top:5px;
        }
      }
      .book-info{
        padding-right: 20px;
        box-sizing:border-box;
        width:calc(100% - 85px);
        height:44.16px;
        .name{
          .box-size(100%,12px);
          .line-center(12px);
          .bold-font(12px,#2d2d2d);
          .no-wrap();
        }
        .detail{
          .line-center(11px);
          .normal-font(11px,#797979);
          margin-top: 4px;
          .no-wrap();
        }
      }

    }
    .right{
      .flex-simple(flex-end,center);
      flex-basis:50px;
      text-align:right
    }

  }
}
</style>