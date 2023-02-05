
<script setup>
import RankItem from "./RankItem.vue"
import {ref ,reactive,computed,unref,watch,onBeforeMount} from 'vue';
import {useSystemInfo} from "@hooks/commonHooks";
import {navigateBack,navigateTo}  from "@utils/wechat";
const systemInfo = useSystemInfo();

const listStyle = ref({
  height:`calc(100vh - 40.8vw - ${systemInfo.statusBarHeight}px)`
})

const xyMockData=genMockData(15)

const jfMockData=genMockData(13)

const showList = ref(xyMockData);

function goBack(){
  navigateBack()
  }

const activeTab = ref("jifen");
function toggleTab(){
  activeTab.value = unref(activeTab) == "xinyong" ? "jifen" :"xinyong";
  showList.value =  unref(activeTab) == "xinyong" ? xyMockData : jfMockData;
}

function genMockData(len){
  let res = [];
  let classMap = ["one","two","three"];

  for(let i = 0 ; i < len ;i++){
    res.push(
      {
        id:i+1,
        img:"",
        name:`张凡${i+1}`,
        num:300,
        rank:i+1,
        rankClass:classMap[i]
      }
    )
  }


  return res;
}





</script>
<template>
  <div class='page'>
    <div class="nav-bar" :style="{
      paddingTop: systemInfo.statusBarHeight + 'px'
    }">
       <div class="back-wrapper" @click='goBack' :style="{
      top: systemInfo.statusBarHeight + 'px',
    }">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-icon-fh.png" alt="" class='img' />
    </div>
      <div class="tabs">
        <div class="tab-item" @click='toggleTab("jifen")' :class='[activeTab=="jifen"?"active":""]'>积分排行</div>
        <div class="tab-item" @click='toggleTab("xinyong")' :class='[activeTab=="xinyong"?"active":""]'>信用排行</div>
      </div>
    </div>
    <div class="bg-top-wrapper">
        <img v-if='activeTab=="xinyong"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-xyph-bg.png" alt="" class='bg-top'>
        <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-jxph-bg.png" alt="" class='bg-top'>
    </div>
    <scroll-view :show-scrollbar='false' enhanced scroll-y class='list' >
      <div class="rank-item" v-for='item in showList' :key='item.id'>
        <RankItem :info='item'/>
      </div>
    </scroll-view>

  </div>
</template>


<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  .full-screen();
  position:relative;
  background:#F6F6F6;
  .nav-bar{
    .box-size(100vw,44px);
    .flex-simple(center,center);
    z-index:10000;
    box-sizing: content-box;
    .pos-absolute(0,0,unset,unset);
    .back-wrapper{
      .box-size(33px,unset);
      .pos-absolute(0 ,0 ,0 ,6px);
      z-index: 100;
      .flex-simple(center,center);
      .img{
        .box-size(33px,33px);
      }
    }
    .tabs{
      .flex-simple(flex-center,center);
      .tab-item{
        .normal-font(16px,#71D1FF);
        position:relative;
        &:first-child{
          margin-right:48px;
        }
        &.active{
          .bold-font(16px,white);
          &:after{
            content:"";
            display: inline-block;
            .box-size(18px,2px,white);
            .pos-absolute(unset,unset,-12px,50%);
            transform: translateX(-50%);
            border-radius:1px;
          }
        }
      }
    }
  }
  .bg-top-wrapper{
    z-index:10;
    font-size:0px;
    .bg-top{
      .box-size(100vw,40.8vw);
    }
  }
  .list{
    .box-size(100vw,calc(100vh - 40.8vw),#F6F6F6);
    padding:6px 8px;
    .rank-item{
      .box-size(100%,48px);
      margin-bottom:6px;
    }
  }


}
</style>