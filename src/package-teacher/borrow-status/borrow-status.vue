
<script setup>
import BookStatusItem from "./book-status-item.vue";
import {ref ,reactive,computed,unref,watch,onBeforeMount} from 'vue';
import {showToast,navigateTo,getUserInfo} from "@utils/wechat"
import {useSystemInfo} from "@hooks/commonHooks";

const systemInfo = useSystemInfo();

const tabs = ref([
  {
  type:"all",
  text:"全部",
  count:296,
},{
  type:"applying",
  text:"申请中",
  count:100
},{
  type:"agreed",
  text:"已同意",
  count:36
},{
  type:"jieyue",
  text:"借阅中",
  count:56
}
]
);
const activeTab=ref(tabs.value[0] || {
  type:"all"

})

function genMockData(len){
  let res = [];
  let statusMap = ['applying','agreed','jieyue','returned']
  let classMap = ["申请中","已同意","借阅中","已归还"];

  for(let i = 0 ; i < len ;i++){
    res.push(
      {
        id:i+1,
        name:`流浪的地球（刘慈欣著，无删${i+1}`,
        detailText:"童话故事类·67页·3600字·期限36天",
        status:statusMap[i%4],
        statusText:classMap[i%4],
      }
    )
  }

  return res;
}

const showBookList = ref(genMockData(12));

const listStyle = ref({
  height:`calc(100vh - 6px - ${systemInfo.statusBarHeight}px - 95px)`
})

function switchTab(item){
  console.log('item: ', item);
  activeTab.value = item
}

const sort = ref("zx");
function toogleSort(){
  console.log('unref(sort): ', unref(sort));

  sort.value = (unref(sort) == "zx" ? "dx" :"zx");
}

function viewBorrowDetail(item){
  navigateTo("/package-teacher/borrow-status/borrow-detail",item)
}


</script>
<template>
  <div class='page'>
    <TeacherNavBar  title="借阅状态" background='transparent' />
    <div class="bg-top-wrapper">
        <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/nav-zsc-bg.png" alt="" class='bg-top'>
    </div>
    <scroll-view class="tabs" :show-scrollbar='false' enhanced scroll-x>
      <div class="tab-item"  v-for='item in tabs' :key='item.id' :class='[item.type==activeTab.type ? "active" :""]' @click='switchTab(item)'>
        <div class="text">{{item.text}}</div>
        <div class="num">{{item.count}}
        </div>
      </div>
    </scroll-view>
    <div class="tab-content">
      <!-- <div class="top">
        <div class="count">共{{ activeTab.count || 0}}条</div>
        <div class="sort" @click='toogleSort'>
          <div class="text">时间</div>
          <img v-if='sort=="zx"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-zhengxu.png" alt="" class='img'>
          <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-daoxu.png" alt="" class='img'>
        </div>
      </div> -->
      <scroll-view :show-scrollbar='false' enhanced scroll-y class='book-list' :style='listStyle'>
        <div class="book-item" v-for='item in showBookList' :key="item.id" @click="viewBorrowDetail(item)">
          <BookStatusItem :info='item'/>
        </div>
        <div style='height:1px'></div>
      </scroll-view>
    </div>
  </div>
</template>


<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  .full-screen();
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:10;
    .bg-top{
      .box-size(100vw,156px);
    }
  }
  .tabs{
    .box-size(100vw,24px,transparent);
    font-size:0px;
    padding:0 0 0 12px;
    z-index:100;
    position:relative;
    margin-top:8px;
    .tab-item{
      .box-size(unset,24px,#A3F0FF);
      .line-center(24px);

      padding:0 10px;
      margin-right:9px;
      border-radius: 12px;
      .flex-simple(flex-start,center);
      display: inline-flex;
      &.active{
        background-color: white;
        .text,.num{
          color:#FF8000;
        }
      }
      .text,.num{
        .bold-font(12px,#4A8DB1);
      }
      .num{
        margin-left:4px;
      }
    }
  }
  .tab-content{
    .box-size(100vw,calc(100vh - 109px),white);
    margin-top:13px;
    z-index:100;
    border-radius:14px;
    padding:12px;
    .top{
      .box-size(100%,13px,transparent);
      .flex-simple(space-between,center);
      padding-left:5px;
      .count{
        .normal-font(13px,#797979);
      }
      .sort{
        .line-center(13px);
        .flex-simple(flex-start,center);
        .text{
          .normal-font(13px,#797979);
          .line-center(13px);
          display:inline-block;
        }
        .img{
          .box-size(13px,13px);
          margin-left:5px;
        }
      }
    }
    .book-list{
      .box-size(100%,unset);
      // margin-top:25px;
      .book-item{
        margin-bottom:6px;
      }
    }
  }
}
</style>