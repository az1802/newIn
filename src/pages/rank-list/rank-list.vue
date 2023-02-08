<script setup >
import RankItem from "./RankItem.vue";
import MyRank from "./MyRank.vue"
import {ref,shallowRef,unref,shallowReactive,reactive} from "vue";

const activeTab = ref("grade");
const classRankList=reactive([{
  id:1,
  img:"",
  name:"张凡",
  num:500
},{
  id:2,
  img:"",
  name:"张凡",
  num:300
}])


const gradeRankList=reactive([{
  id:1,
  img:"",
  name:"张凡1",
  num:300
},{
  id:2,
  img:"",
  name:"张凡2",
  num:200
},{
  id:3,
  img:"",
  name:"张凡2",
  num:200
},{
  id:4,
  img:"",
  name:"张凡2",
  num:200
},{
  id:5,
  img:"",
  name:"张凡2",
  num:200
},{
  id:6,
  img:"",
  name:"张凡3",
  num:200
}])

const mineRankInfo = {
  id:2,
  img:"",
  name:"我",
  num:200
}


function switchTab(tabName) {
  console.log('tabName: ', tabName);
  activeTab.value = tabName
}

function sortJifen(){
  // classRankList.value = classRankList.value.reverse();
  // gradeRankList.value= gradeRankList.value.reverse();


  classRankList.reverse();
  gradeRankList.reverse();
}

</script>

<template>
  <div class='page'>
    <NavBar title='' />
    <div class="rank-wrapper">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/ic_start.png" alt="" class='sort-img' @click='sortJifen'>
      <div class='tabs'>
        <div class="tab-item" :class='[activeTab=="class" ? "active":""]' @click='switchTab("class")'>班级榜</div>
        <div class="tab-item" :class='[activeTab=="grade" ? "active":""]' @click='switchTab("grade")'>年级榜</div>
      </div>
      <div class="tab-content">
        <scroll-view class="tab-content-item" v-show='activeTab=="class"' scroll-y :show-scrollbar='false' enhanced>
          <RankItem v-for='item in classRankList' :key='item.id' :info='item'/>
        </scroll-view>
        <scroll-view class="tab-content-item" v-show='activeTab=="grade"' scroll-y :show-scrollbar='false' enhanced>
          <RankItem v-for='item in gradeRankList' :key='item.id' :info='item'/>
        </scroll-view>
      </div>
      <div class="my-rank">
        <div class='divider'></div>
        <MyRank :info='mineRankInfo'/>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;

  .rank-wrapper{
    .box-size(calc(100vw - 8.533vw),169.6vw);
    padding:38.667vw 2.667vw 0;
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-bg.png") 0 0/100% 100% no-repeat;
    margin:0 auto;
    .sort-img{
      .box-size(44px,44px);
      .pos-absolute(10px,unset,unset,calc(30px - 4.2665vw));

    }
    .tabs{
      .flex-simple(space-between,center);
      .box-size(100%,9.6vw);
      padding:0 64px;
      .tab-item{
        display: inline-block;
        .box-size(87px,36px,#D7AD57);
        .line-center(36px);
        border-radius: 20px 20px 0 0;
        text-align:center;
        .bold-font(16px,#905B38);
        // background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-tab-active.png") 0 0/100% 100% no-repeat;
        &.active{
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/rank-tab-active.png") 0 0/100% 100% no-repeat;
        }
      }
    }
    .tab-content{
      .box-size(100%,calc(100% - 140px));
      padding:0 10px;
      .tab-content-item{
        .box-size(100%,100%);
      }
    }
    .my-rank{
      .box-size(100%,unset);
      padding:0 10px;
      .divider{
        .box-size(100%,0px);
        border-top:1px dashed #A74D11;
        margin-top:10px;
      }
      .line-center(60px);
    }
  }
}
</style>