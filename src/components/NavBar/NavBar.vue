<script setup >
  import {navigateBack}  from "@utils/wechat";
  import {useSystemInfo} from "@hooks/commonHooks";
  import { useSlots, useAttrs } from 'vue'
  const systemInfo = useSystemInfo();
  const slots = useSlots()

  const props = defineProps({
    title:{
      type:String,
      default:""
    },
    customBack:{
      type:Boolean,
      default:false
    },
    showBack:{
      type:Boolean,
      default:true
    }
  })
  const emits = defineEmits(['back']);

  function goBack(){
    console.log(props)
    if(props.customBack){
      emits("back")
    }else{
      console.log('back')
      navigateBack()
    }
  }
</script>

<template>
  <div class="nav-bar" :style="{
      paddingTop: systemInfo.statusBarHeight + 'px',
    }">
    <div v-if='showBack' class="back-wrapper" @click='goBack' :style="{
      top: systemInfo.statusBarHeight + 'px',
    }">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/ic_back.png" alt="" class='img' />
    </div>
    <slot name='title' v-if='slots.title'/>
    <div class='title' v-else>
      {{props.title}}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.nav-bar{
  .box-size(100vw,44px);
  .flex-simple(center,center);
  z-index:10000;
  box-sizing: content-box;
  .back-wrapper{
    .box-size(44px,unset);
    .pos-absolute(0 ,0 ,0 ,30px);
    z-index: 100;
    // .flex-simple(center,center);
    .img{
      .box-size(40px,40px);
    }
  }
  .title{
    .box-size(100%,44px);
    .line-center(44px);
    .normal-font(20px,#FFFDF9);
    // -webkit-text-stroke: 2px #B65718;
    // text-stroke: 2px #B65718;
    text-align: center;
    text-shadow: -1px 0px 1px #B65718, 1px 0px 1px #B65718, 0px 1px 1px  #B65718, 0px -1px 1px #B65718;
  }
}

</style>