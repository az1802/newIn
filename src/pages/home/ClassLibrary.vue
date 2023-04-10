<!-- <script setup>
import {ref,unref,computed,onMounted,onBeforeMount} from "vue";
import memberInfo from './memberInfo.vue';
import TreeTop from "./treeTop.vue"
import TreeMiddle from './treeMiddle.vue';
import TreeBottom from "./treeBottom.vue"
import RankingDialog from "./RankingDialog.vue"
import API from "@/api/index";

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

function handleUserList(list,myinfo){

  list.forEach(item=>{
    if(item.ranking<4){
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number${item.ranking}.png`;
      item.tagUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_number${item.ranking}.png`;
    }else{
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number.png`;
      item.tagUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_tag01.png`;
    }
    if(item.ranking ==myinfo.ranking ){
      item.backgroundUrl = `https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/clz_lib_bg_number_mine.png`;
    }
  })


  return list;

}



const userList = ref([]);
const myinfo = ref({})

let showRankDialog = ref(false);



async function getBanjiRanking(){

  let userInfo = uni.getStorageSync("userInfo");
  let params = {
    school_id:userInfo.school_id,
    student_id:userInfo.student_id,
  }
  uni.showLoading();
  let res = await API.User.getBanjiRanking({
    params
  })

  uni.hideLoading();

  if(res){
    userList.value = handleUserList(res.list,res.myinfo);
    // res.myinfo.change = 1;
    myinfo.value = res.myinfo;
    let {change} = res.myinfo;
    if(change >0){
      showRankDialog.value = true;
    }
  }
}

onBeforeMount(()=>{
  getBanjiRanking();
})




const treeTopUsers = computed(()=>{
  if(unref(userList).length > 9){
    return unref(userList).slice(0,9);
  }else {
    return [];
  }
})

const treeMiddleUserGroups = computed(()=>{
  if(unref(userList).length <= 18){
    return []
  }else{
    let ret = (unref(userList).length - 9)%12 ;
    ret = ret == 0 ? -9 : 0-ret

    let res = [],temp =[];
    let list = unref(userList).slice(9,ret);
    list.forEach(item=>{
      if(temp.length == 12){
        res.push(temp);
        temp = []
      }
      temp.push(item);
    })
    res.push(temp);
    console.log('res: ', res);

    return res;


  }
})


const treeBottomUsers = computed(()=>{
  if(unref(userList).length <= 9){
    return unref(userList)
  }else{
    let ret = unref(userList).length%9 ;
    ret = ret == 0 ? -9 : 0-ret
    return  unref(userList).slice(ret);
  }

})


</script>

<template>
  <div class="page">
    <NavBar title="班级图书馆" :showBack='false' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>

    <scroll-view :show-scrollbar='false' enhanced scroll-y class='tree-wrapper'>
     <TreeTop :users='treeTopUsers' v-if='treeTopUsers.length > 0' />
     <TreeMiddle v-for='(groupItem,index) in treeMiddleUserGroups' :key='index' :users = 'groupItem' />
     <TreeBottom  :users='treeBottomUsers' v-if='treeBottomUsers.length > 0' />
    </scroll-view>

    <HomeMenuTabs class='home-menu-tabs' active='class-library' />
    <RankingDialog v-if="showRankDialog" :ranking='myinfo.ranking' :change='myinfo.change'  ></RankingDialog>
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

</style> -->
