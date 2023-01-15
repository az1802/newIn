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
    showBackIcon:{
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
    <div class="back-wrapper" @click='goBack' :style="{
      top: systemInfo.statusBarHeight + 'px',
    }">
      <img v-if='showBackIcon' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/ic_back.png" alt="" class='img' />
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
  background: ulr("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-sy.png") 0 0/100% 100% no-repeat;
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
    .normal-font(20px,white);
    text-align: center;
  }
}

</style>