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
        <img src="" alt="" class="img">
        <div class="name">张文君</div>
        <CountNum text='130本' :type='props.type'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-one.png" alt="" class="tag">
      </div>
      <div class="top-item two">
        <img src="" alt="" class="img">
        <div class="name">张文君</div>
        <CountNum text='130本' :type='props.type'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-two.png" alt="" class="tag">
      </div>
      <div class="top-item three">
        <img src="" alt="" class="img">
        <div class="name">张文君</div>
        <CountNum text='130本' :type='props.type'/>
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jp-three.png" alt="" class="tag">
      </div>
    </div>
    <div class="list-item" v-for='item in [1,2,3,4,5,6,7,8]' :key='item'>
      <div class="left">
        <div class="num">{{item}}</div>
        <img src="" alt="" class='img'>
        <div class="name">张文君</div>
      </div>
      <div class="right">
        <CountNum text='130本' :type='props.type'/>
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
      .flex-simple(center,center);
      flex-direction: column;
      .img{
        .box-size(32px,32px);
        border-radius: 50%;
        background-color: #ccc;
        margin-top:10px;
      }
      .name{
        .normal-font(13px,#EEEEEE);
        margin-top:14px;
      }
      .tag{
        .box-size(18px,21px);
        .pos-absolute(0,9px,unset,unset);
      }
      .one{
        .img{
          border:1px solid #FF8B15;
        }
      }
      .two{
        .img{
          border:1px solid #4DBB28;
        }
      }
      .three{
        .img{
          border:1px solid #25B0E6;
        }
      }
    }
  }
  .list-item{
    .box-size(100%,46px);
    padding:0 25px 0 20px;
    .flex-simple(space-between,center);
    .left{
      .flex-simple(flex-start,center);
      .num{
        .box-size(16px,unset);
        text-align: center;
        .normal-font(14px,#7A7A7A);
      }
      .img{
        .box-size(28px,28px,#ccc);
        border-radius: 50%;
        margin-left:20px;
      }
      .name{
        .box-size(120px,unset);
        margin-left:15px;
        .normal-font(13px,#2D2D2D);
      }
    }
    .right{
      .flex-simple(flex-end,center);
    }

  }
}
</style>