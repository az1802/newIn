<script setup>


</script>

<template>
  <div class='info-container'>
    <div class="rattan-wrapper">
      <div class="left"></div>
      <div class="right"></div>
    </div>
   <dive class="map-content">
    <slot />
   </dive>

</div>
</template>

<style lang="less" scoped>
  @import '@static/index.less';

  .info-container{
    .box-size(100%,unset);
    padding-top:10px;
  }
</style>