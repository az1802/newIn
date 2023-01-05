<script setup >
  const props = defineProps({
    text:{
      type:String,
      default:""
    }
  })

</script>

<template>
  <div class='btn-wrapper'>
    <div class="txt">
      {{props.text}}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.btn-wrapper{
  display: inline-block;
  .box-size(138px,48px);
  .line-center(48px);
  .backgroundImg("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_button_2.png");
  text-align:center;
  .bold-font(16px,white);
}

</style>