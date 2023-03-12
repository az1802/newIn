<script setup lang="ts">
import {onMounted,ref,unref} from "vue";

let showRankNum = ref(false),allowHideDialog  = ref(false),showDialog=ref(true);
onMounted(()=>{
  setTimeout(()=>{
    showRankNum.value = true;

  },1000)
  setTimeout(()=>{
    allowHideDialog.value = true;
  },2000)
})


const emits = defineEmits(["update:show"]);
const props = defineProps({
  change:{
    type:Number,
    default:0
  },
  ranking:{
    type:Number,
    default:0
  }
})

function hideDialog(){

  if(unref(allowHideDialog)){
    showDialog.value=false
  }
}






</script>

<template>
  <div class="rank-dialog" @click='hideDialog' v-if='showDialog'>
    <div class="animate-wrapper animating">
      <div class="info" v-if='showRankNum'>
        <div class="incr" >
          <div class="text">提升了</div>
          <div class="num">{{props.change}}</div>
        </div>
        <div class="rank"  >
          第
          <div class="text">{{props.ranking}}</div>
          名
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

@keyframes increase {
  0% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_0.png')
      0 0/100% 100% no-repeat;
  }
  10% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_1.png')
      0 0/100% 100% no-repeat;
  }
  20% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_2.png')
      0 0/100% 100% no-repeat;
  }
  30% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_3.png')
      0 0/100% 100% no-repeat;
  }
  40% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_4.png')
      0 0/100% 100% no-repeat;
  }
  50% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_5.png')
      0 0/100% 100% no-repeat;
  }
  60% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_6.png')
      0 0/100% 100% no-repeat;
  }
  70% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_7.png')
      0 0/100% 100% no-repeat;
  }
  80% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_8.png')
      0 0/100% 100% no-repeat;
  }
  90% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rocket_9.png')
      0 0/100% 100% no-repeat;
  }
}

@keyframes star {
  0% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_1.png')
      0 0/100% 100% no-repeat;
  }
  25% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_2.png')
      0 0/100% 100% no-repeat;
  }
  50% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_3.png')
      0 0/100% 100% no-repeat;
  }
  75% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_4.png')
      0 0/100% 100% no-repeat;
  }
  100% {
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_5.png')
      0 0/100% 100% no-repeat;
  }
}

@keyframes promote{
  0% {
    transform: scale(0);
  }
  60%{
    transform: scale(1.1);
  }
  70%{
    transform: scale(1);
  }
  100%{
    transform: scale(1);
  }
}

@keyframes rank{
  0% {
    opacity:0;
    transform : scale(0);
  }

  40% {
    transform : scale(1.2);
  }

  50% {
    transform : scale(0.9);
  }

  60% {
    transform : scale(1.1);
  }

  80% {
    transform : scale(0.9);
  }

  100% {
    transform : scale(1);
  }
}





.rank-dialog {
  .full-screen();
  background: rgba(0,0,0,0.4);
  .flex-simple(center,center);
  position: fixed;
  z-index: 100000;
  .animate-wrapper {
    .box-size(375px,667px);
    .flex-simple(center,center);
    &.animating{
      animation: increase 1s 1;
    }
    .info {
      .box-size(238px,241px);
      animation:star 1s 1;
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_star_5.png')
      0 0/100% 100% no-repeat;
      text-align:center;
      .incr {
        .box-size(125px,125px);
        background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_view_1.png')
        0 0/100% 100% no-repeat;
        animation:promote 0.7s 1;
        display:inline-block;
        margin-top:48px;
        .text {
          .bold-font(16px,rgb(255,255,255,0.8));
          margin-top:38px;
        }
        .num {
          .bold-font(40px,white);
          margin-top:4px;
        }
      }
      .rank {
        .flex-simple(center,unset);
        .bold-font(19px,white);
        .box-size(160px,47px);
        background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/anim_view_2.png')
        0 0/100% 100% no-repeat;
        animation:rank 0.7s 1;
        top:-24px;
        line-height:29px;
        position:relative;
        display:inline-flex;
        padding-top:3px;
        .text {
          margin:0 2px;
          .bold-font(26px,white);
        }
      }
    }
  }
}
</style>
