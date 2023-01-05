<script setup >
import RankItem from "./RankItem.vue";
import {ref} from "vue";

const activeTab = ref("grade");
const classRankList=[{
  id:1,
  img:"",
  name:"张凡",
  num:500
},{
  id:2,
  img:"",
  name:"张凡",
  num:300
}]


const gradeRankList=[{
  id:1,
  img:"",
  name:"张凡1",
  num:300
},{
  id:2,
  img:"",
  name:"张凡2",
  num:200
}]

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

</script>

<template>
  <div class='page'>
    <NavBar title='' />
    <div class="rank-wrapper">
      <div class='tabs'>
        <div class="tab-item" :class='[activeTab=="class" ? "active":""]' @click='switchTab("class")'>班级榜</div>
        <div class="tab-item" :class='[activeTab=="grade" ? "active":""]' @click='switchTab("grade")'>年级榜</div>
      </div>
      <div class="tab-content">
        <div class="tab-content-item" v-show='activeTab=="class"'>
          <RankItem v-for='item in classRankList' :key='item.id' :info='item'/>
        </div>
        <div class="tab-content-item" v-show='activeTab=="grade"'>
          <RankItem v-for='item in gradeRankList' :key='item.id' :info='item'/>
        </div>
      </div>
      <div class="my-rank">
        <RankItem :info='mineRankInfo'/>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .rank-wrapper{
    .box-size(100vw,unset);
    padding:0 10px;
    .tabs{
      text-align: center;
      .tab-item{
        display: inline-block;
        .box-size(100px,40px);
        .line-center(40px);
        &.active{
          color:red;
        }
      }
    }
    .tab-content{
      .box-size(100%,unset);
      padding:0 20px;
      .tab-content-item{

      }
    }
    .my-rank{
      .box-size(100%,unset);
      padding:0 20px;
      .line-center(60px);
    }
  }
}
</style>