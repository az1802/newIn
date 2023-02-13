<script>


export default{
  onLoad(opts){
    console.log('opts: ', opts);
  }
}
</script>
<script setup >
import { useUserInfoStore } from '@/stores/user';
import {navigateTo} from "@utils/wechat";
import {ref,unref,computed} from "vue";
import ThemeSel from './ThemeSel.vue';
import BookItem from "./BookItem.vue"
import {useSystemInfo} from "@hooks/commonHooks";
const systemInfo = useSystemInfo();
// console.log('systemInfo: ', systemInfo);


const userInfo = useUserInfoStore();

 function genMockList(n){
   let arr = [];

  for(let  i = 1 ; i<= n;i++){
    let left = '55'
    arr.push({
      id:i,
      name:`书本${i}`,
      style:{
        left:`${left}%`
      }
    })
  }
  calcPos(0,arr);
   return arr;
 }

let classmateInfo = ref({
  name:"李文文",
  bookList:genMockList(12)
})


function calcPos(scrollTop,list){
  let leftArr = [36,66,19,55];
  let {screenWidth,screenHeight,statusBarHeight} = systemInfo;
  let listHeight = screenHeight - parseInt(statusBarHeight) - 44;
  // let {screenHeight,screenWidth} = systemInfo;
  list.forEach((item,index)=>{
    let h = (125*(index+1) - scrollTop)%listHeight,left;
    if(h < listHeight*0.33){
      left = 36 + 30*(h/(listHeight*0.33));
    }else if(h > listHeight*0.33 && h < listHeight*0.66){
      left = 66 - 47*((h- listHeight*0.33)/(listHeight*0.33));
    }else{
      left = 19 + 36*((h - listHeight*0.66)/(listHeight*0.33));
    }
    item.style.left = left + "%";
  })

}



function handleScroll(e){
  let scrollTop = e.detail.scrollTop;
  // console.log('scrollTop: ', scrollTop);
  calcPos(scrollTop,unref(classmateInfo).bookList)
}


const theme = ref("default");
const showThemeSel = ref(false);

const bgMapUrl = {
  default:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
  spring:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg",
  summer:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_2_bg.jpg",
  autumn:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_3_bg.jpg",
  winter:"https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_4_bg.jpg",
}

const bgStyle=computed(()=>{
  console.log(unref(theme))
  return {
    backgroundImage:`url(${bgMapUrl[unref(theme)]})`
  }
})


let showUploadBookSel = ref(false)

const listStyle = ref({
  height:`calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
})


</script>

<template>
  <div class="page" :style='bgStyle'>
    <NavBar :title='classmateInfo.name+"的图书馆"' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <scroll-view class="list-wrapper" scroll-y  :show-scrollbar='false' 	enable-passive 	 @scroll='handleScroll' :style='listStyle'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.bookList' :key='item.id' :style='item.style'>
        <BookItem :info='item' :theme='theme'/>
      </div>
    </scroll-view>
    <!-- <div class="btn-group" >
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn_lib_published2.png" alt="" class='btn put-on'>
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-off.png" alt="" class='btn off'>
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-to-confirm.png" alt="" class='btn to-confirm'>
    </div> -->

    <ThemeSel v-model:theme='theme'/>

    <!-- <div class="upload-book-wrapper" @click='showUploadBookSel=true'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-add-book.png" alt="" class='img'>
      <div class='text'>添加图书</div>
    </div>
    <UploadBookMethodSel v-model:show='showUploadBookSel'/> -->
    <!-- <div class="add-book">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-add-book.png" alt="" class='img'>
    </div> -->
  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/library_scenes_1_bg.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:1000;
  }
  .list-wrapper{
    .box-size(100vw,unset);
    // padding-top:60px;
    .book-item-wrapper{
      .box-size(90px,125px);
      position:relative;
      padding-top:25px;
    }
  }
  .btn-group{
    .pos-fixed(25vh,unset,unset,4vw);
    .btn{
      .box-size(90px,37.999px);
      margin-top:17px;
      display: block;
    }
  }

  .upload-book-wrapper{
    .pos-absolute(unset,6.933vw,24.667vw,unset);
    display: inline-block;
    text-align: center;
    font-size:0px;
    .img{
      .box-size(16vw,17.333vw);
    }
    .text{
      text-align: center;
      .normal-font(16px);
    }
  }
}
</style>