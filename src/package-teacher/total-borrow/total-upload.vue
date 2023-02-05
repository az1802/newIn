
<script setup>
import BookItem from "./book-item.vue";
import {ref ,reactive,computed,unref,watch,onBeforeMount} from 'vue';
import {useSystemInfo} from "@hooks/commonHooks";
import {navigateTo} from "@utils/wechat"

const systemInfo = useSystemInfo();

const tabs = ref([
  {
  type:"all",
  text:"全部",
  count:296,
},{
  type:"nature",
  text:"大自然",
  count:100
},{
  type:"ertongwenxue",
  text:"儿童文学",
  count:36
},{
  type:"store",
  text:"故事大王",
  count:56
},{
  type:"kepu",
  text:"科普",
  count:56
}
]
);
const activeTab=ref(tabs.value[0] || {
  type:"all"

})

const showBookList = ref([1,2,3,4,5,6,7,8]);

const listStyle = ref({
  height:`calc(100vh - 44px - ${systemInfo.statusBarHeight}px - 95px)`
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


function viewBookDetail(item){
  navigateTo("/package-teacher/total-borrow/upload-book-detail")
}

</script>
<template>
  <div class='page'>
    <TeacherNavBar  title="总上传" background='transparent' />
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
      <div class="top">
        <div class="count">共{{ activeTab.count || 0}}条</div>
        <div class="sort" @click='toogleSort'>
          <div class="text">时间</div>
          <img v-if='sort=="zx"' src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-zhengxu.png" alt="" class='img'>
          <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/icon-daoxu.png" alt="" class='img'>
        </div>
      </div>
      <scroll-view :show-scrollbar='false' enhanced scroll-y class='book-list' :style='listStyle'>
        <div class="book-item" v-for='item in showBookList' :key='item' @click='viewBookDetail'>
          <BookItem type='upload' />
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
      margin-top:25px;
      .book-item{
        margin-bottom:25px;
      }
    }
  }
}
</style>