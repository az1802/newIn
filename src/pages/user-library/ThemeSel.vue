<script setup >
import {ref,unref} from "vue";

const props = defineProps({
  theme:{
    type:String,
    default:"default"
  }
})

const showThemeSel = ref(false);

const emit = defineEmits(["update:theme"])

function changeTheme(val){
  emit("update:theme",val)
}

</script>

<template>
   <div class="theme-sel">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_skin.png" alt="" class='change-btn' @click='showThemeSel=!showThemeSel'>
      <div class='theme-list' :class='[showThemeSel ? "show":""]'>
        <div class="theme-item" @click='changeTheme("spring")'>春天</div>
        <div class="theme-item" @click='changeTheme("summer")'>夏天</div>
        <div class="theme-item" @click='changeTheme("autumn")'>秋天</div>
        <div class="theme-item" @click='changeTheme("winter")'>冬天</div>
      </div>
    </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.theme-sel{
  .box-size(48px,48px);
  .pos-fixed(12vh,15px,unset,unset);
  z-index:100;
  .change-btn{
    .box-size(48px,48px);
  }
  .theme-list{
    display: none;
    .box-size(110px,285px);
    left:-63px;
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-skin-sel.png") 0 0/100% 100% no-repeat;
    &.show{
      display: block;
    }
    .theme-item{
      // .normal-font(12px,red);
      &:first-child{
        height: 80px;
      }
      opacity:0;
      height:68px;
    }
  }
}
</style>