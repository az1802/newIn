<script setup lang='ts'>
const props = defineProps({
  text:{
    type:String,
    default:""
  },
  type:{
    type:String,
    default:"upload"
  }
})

</script>

<template>
  <div class="count-num">
    <img  v-if="props.type=='upload'" src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-shu.png" alt="" class="icon" />
    <img  v-else-if="props.type=='read'"  src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-yj.png" alt="" class="icon" />
    <div class="text">{{props.text}}</div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.count-num{
  .flex-simple(flex-end,center);
  .normal-font(14px,#EEEEEE);
  .icon{
    .box-size(10px,10px);
    margin-right:6px;
  }
  .text{
    .normal-font(13px,#2D2D2D);
  }
}

</style>