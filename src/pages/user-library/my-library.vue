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
const userInfo = useUserInfoStore();


let classmateInfo = ref({
  name:"李文文",
  bookList:[
    {
      id:1,
      name:"书本1",
      style:{
        top:"0px",
        left:"180px"
      }
    },
    {
      id:2,
      name:"书本2",
      style:{
        top:"0px",
        left:"220px"
      }
    },
    {
      id:3,
      name:"书本3",
      style:{
        top:"0px",
        left:"150px"
      }
    },
    {
      id:4,
      name:"书本4",
      style:{
        top:"0px",
        left:"100px"
      }
    },
    {
      id:5,
      name:"书本5",
      style:{
        top:"0px",
        left:"150px"
      }
    },
    {
      id:6,
      name:"书本6",
      style:{
        top:"0px",
        left:"170px"
      }
    },
  ]
})



function handleScroll(e){
  let scrollTop = e.detail.scrollTop;
  console.log('scrollTop: ', scrollTop);

  unref(classmateInfo).bookList.forEach(item=>{
     let temp = item.style.left;
     item.style.left = (parseFloat(temp) + scrollTop/10)%300 + "px";
  })

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



</script>

<template>
  <div class="page" :style='bgStyle'>
    <NavBar :title='classmateInfo.name+"的图书馆"' />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <scroll-view class="list-wrapper" scroll-y  :show-scrollbar='false' enhanced @scroll='handleScroll'>
      <div class="book-item-wrapper" v-for='item in classmateInfo.bookList' :key='item.id' :style='item.style'>
        <div class="name">{{item.name}}</div>
      </div>
    </scroll-view>
    <div class="btn-group">
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn_lib_published2.png" alt="" class='btn put-on'>
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-off.png" alt="" class='btn off'>
     <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-to-confirm.png" alt="" class='btn to-confirm'>
    </div>

    <ThemeSel v-model:theme='theme'/>

    <div class="upload-book-wrapper" @click='showUploadBookSel=true'>
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/home-add-book.png" alt="" class='img'>
      <!-- <div class='text'>添加图书</div> -->
    </div>
    <UploadBookMethodSel v-model:show='showUploadBookSel'/>
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
  .bg-top{
    .box-size(100vw,23.88vw);
    .pos-absolute(0,0,unset,unset);
  }
  .list-wrapper{
    .box-size(100vw,100vh);
    padding-top:60px;
    .book-item-wrapper{
      .box-size(80px,140px,red);
      position:relative;
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