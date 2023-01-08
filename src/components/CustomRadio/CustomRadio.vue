<script setup >

const props = defineProps({
  checked:{
    type:Boolean,
    default:false
  }
})
</script>

<template>
  <div class="radio-wrapper">
    <div  class='circle' v-if='props.checked'></div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.radio-wrapper{
 .box-size(15px,15px);
  border:1px solid #FBAB11;
  border-radius: 50%;
  font-size:0px;
  .flex-simple(center,center);
  .circle{
    display:inline-block;
    .box-size(9px,9px,#FBAB11);
    border-radius: 50%;
  }
}
</style>