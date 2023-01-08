<script setup >
    import {useSystemInfo} from "@hooks/commonHooks";
  const systemInfo = useSystemInfo();

</script>

<template>
  <div class='top-clound' >
    <div class="place-holder" :style='{height:systemInfo.statusBarHeight+"px"}'></div>
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" /></div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .top-clound{
    .box-size(100vw,unset);
    .place-holder{
      .box-size(100vw,unset,white);

    }
    .bg-top{
      .box-size(100vw,23.73vw);
    }
  }
</style>