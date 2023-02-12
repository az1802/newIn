<script setup>
import {ref,unref,computed} from "vue";
   const props = defineProps({
    info:{
      type:Object,
      default:()=>{
        return {
          name:"",
          img:""
        }
      }
    },
    theme:{
      type:String,
      default:"default",
    }
   })

const bgMapUrl = {
  default:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Mylibrary-Stakes.png",
  spring:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Mylibrary-Stakes.png",
  summer:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Mylibrary-Stakes2.png",
  autumn:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Mylibrary-Stakes2.png",
  winter:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Mylibrary-Stakes3.png",
}

let bookBottomImg = computed(()=>{
  return bgMapUrl[props.theme]
})




</script>

<template>
  <div class='book-item'>
    <img src="" alt="" class='book'>
    <img :src="bookBottomImg" alt="" class='book-bottom'>
    <div class="name">{{info.name}}</div>
  </div>
</template>


<style lang="less" scoped>
@import '@static/index.less';


.book-item{
  .box-size(90px,105px);
  text-align:center;
  .book{
    .box-size(58px,74px,#ccc);
    border-radius:5px;
    z-index:10;
  }
  .book-bottom{
    .box-size(78px,38px,transform);
    .pos-absolute(unset,0,0,0);
    z-index:1;
    margin:0 auto;
  }
  .name{
    .box-size(90px,22px,#FFF5C7);
    .line-center(22px);
    .normal-font(15px,#393735);
    border-radius:11px;
    text-align:center;
    z-index:10;
    margin:6px auto 0 auto;
    .no-wrap()
  }
}
</style>