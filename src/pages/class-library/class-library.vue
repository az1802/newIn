<script setup>
import {ref,unref,computed,onMounted} from "vue";
import memberInfo from './memberInfo.vue';
import TreeTop from "./treeTop.vue"
import TreeMiddle from './treeMiddle.vue';
import TreeBottom from "./treeBottom.vue"
import RankingDialog from "./RankingDialog.vue"



 let mockUserList = []

for(let i = 1 ; i < 21;i++){
  mockUserList.push({
    id:i,
    name:"小天"+i,
    rank:i,
    avatarUrl:"",
    own:i==5
  })
}

function handleUserList(mockUserList){

  mockUserList.forEach(item=>{
    if(item.rank<4){
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number${item.rank}.png`;
      item.tagUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_number${item.rank}.png`;
    }else{
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number.png`;
      item.tagUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_tag01.png`;
    }


    if(item.own){
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number_mine.png`;
    }
  })


  return mockUserList;

}



const userList = ref(handleUserList(mockUserList));

const treeTopUsers = computed(()=>{
  return unref(userList).slice(0,9);
})
console.log('userList: ', mockUserList);


let showRankDialog = ref(false);
onMounted(async ()=>{
  setTimeout(()=>{
    console.log('mounted')
    showRankDialog.value = true;
  },1000)
})

</script>

<template>
  <div class="page">
    <NavBar title="班级图书馆" />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>

    <scroll-view :show-scrollbar='false' enhanced scroll-y class='tree-wrapper'>
     <TreeTop :users='treeTopUsers'  />
     <TreeMiddle />
     <TreeMiddle />
     <TreeBottom />
    </scroll-view>

    <HomeMenuTabs class='home-menu-tabs' active='class-library' />
    <RankingDialog v-if="showRankDialog"   ></RankingDialog>
  </div>
</template>



<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_login.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:1000;
  }
}
.tree-wrapper{
  .box-size(100vw,100vh);
  .pos-absolute(0,0,0,0);
}
.home-menu-tabs{
  // .pos-fixed(unset,unset,20px,0);
  // z-index: 10000;
}

</style>
