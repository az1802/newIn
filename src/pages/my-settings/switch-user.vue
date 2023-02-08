<script setup >
import { navigateTo ,showToast} from '@utils/wechat';
import {ref,onBeforeMount,unref} from "vue";
import { useUserInfoStore } from '@/stores/user';
import {getBindUserlist,switchCurBindUser} from "@/api/user";


const userInfo = useUserInfoStore();
let selUserId = ref('');


onBeforeMount(async ()=>{
  let listRes = await getBindUserlist({
    params:{
      wxuser_id:userInfo.wxuser_id
    }
  })
  if(listRes){
    userInfo.setUserInfo({
      bindUserList:listRes.items || [],
    })
    selUserId.value = listRes.default
  }
  console.log('listRes: ', listRes);
})

function changeSelUserId(item){
  selUserId.value = item.binding_id
}

async function bindUser(){
  navigateTo("/pages/login/login",{showBack:1});
}

async function switchUser(){
  if(!unref(selUserId)){
    return
  }
  let switchRes = await switchCurBindUser({
    params:{
      wxuser_id:userInfo.wxuser_id,
      selected:unref(selUserId)
    }
  })
  console.log('切换身份结果: ', switchRes);
  if(switchRes){
    showToast("切换身份成功");
    userInfo.setUserInfo(switchRes)
    // TODO 同时更新其它所有信息,或者其他页面重新加载时重新请求信息
  }

}

</script>

<template>
  <div class="page">
    <NavBar title='切换用户' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="group-wrapper">
      <div class="group">
        <div class="current-info">
          <img :src="userInfo.photo" alt="" class='img'>
          <div class="name">{{userInfo.xingming}}</div>
          <div class="class">{{userInfo.banji}}</div>
        </div>
        <div class="title">
          全部用户
        </div>
        <scroll-view :show-scrollbar='false' enhanced class='list' scroll-x>
          <div class="user-item" v-for='item in userInfo.bindUserList' :key='item.binding_id' :class='[selUserId==item.binding_id ? "active" :""]' @click='changeSelUserId(item)'>
            <div class="avatar-wrapper">
                <img src="" alt="" class="img" />
                <img v-if="selUserId == item.binding_id " src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/switch-user-bg.png" alt="" class='active-img'>
              </div>
            <div class="name">{{item.text}}</div>
            <div class="class">一年级三班</div>
          </div>
        </scroll-view>
        <div class="btn-group">
          <div class="add-bind btn" @click='bindUser'>添加绑定</div>
          <div class="switch-user btn" @click='switchUser'>切换用户</div>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg-user-info-activity.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .group-wrapper{
    .box-size(95.467vw,443px,#F7B053);
    margin:13.333vw auto 0 auto;
    padding:9px 7px 12px 7px;
    box-shadow: 0px 1.6vw 0px 0px rgba(208,135.595,40.786,1);
    border-radius: 8vw 8vw 8vw 8vw;
    .group{
      .box-size(100%,423px,#FEFBD7);
      padding:20px 9px 0 9px;
      border-radius:6.667vw;
      .current-info{
        .flex-simple(center,center);
        flex-direction: column;
        .img{
          .box-size(80px,80px,#ccc);
          border-radius: 50%;
        }
        .name{
          margin-top:9px;
          .normal-font(15px,#63696D);
        }
        .class{
          margin-top:7px;
          .normal-font(13px,#959797);
        }
      }
      .title{
        .normal-font(15px,#3F3F3F);
        margin:25px 0 20px 0;
      }
      .list{
        .box-size(100%,88px);
        white-space: nowrap;
        .user-item{
          .flex-simple(center,center);
          flex-direction: column;
          display: inline-flex;
          margin-right:40px;
          &:last-child{
            margin-right:0px;
          }
          .avatar-wrapper{
            .box-size(45px,45px,#ccc);
            border-radius: 50%;
            position:relative;
            .img,{
              .box-size(45px,45px,#ccc);
              border-radius: 50%;
            }
            .active-img{
              .box-size(45px,45px);
              border-radius: 50%;
              .pos-absolute(0,0,unset,unset);
              opacity:0.5;
            }
          }
          .name{
            margin-top:10px;
            .normal-font(13px,#63696D);
          }
          .class{
            margin-top:7px;
            .normal-font(10px,#959797);
          }
        }
      }
      .btn-group{
        .box-size(100%,45px);
        margin-top:47px;
        .flex-simple(space-between,center);
        padding:0 9px;
        .btn{
          .box-size(145px,45px);
          line-height:39px;
          .bold-font(20px,white);
          text-align: center;
        }
        .add-bind{
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-bind-user-bg.png") 0 0/100% 100% no-repeat;
        }
        .switch-user{
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/btn-switch-user-bg.png") 0 0/100% 100% no-repeat;
        }
      }
    }

  }

}

</style>