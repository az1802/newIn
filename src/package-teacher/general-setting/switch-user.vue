<script setup >
import {ref} from "vue";
import {navigateTo,navigateBack} from "@utils/wechat";
import {useSystemInfo} from "@hooks/commonHooks";

const systemInfo = useSystemInfo();
const listStyle = ref({
  height:`calc(44px + ${systemInfo.statusBarHeight}px)`
})

function goBack(){
  navigateBack()
  }


const userList = ref([
  {
    xingming:"学校管理员",
    role:"student",
    avatar:"",
    id:1
  },
  {
    xingming:"",
    role:"student",
    avatar:"",
    id:1
  },
  {
    xingming:"",
    role:"student",
    avatar:"",
    id:1
  },
])

async function unbinding(){

}

async function switchUser(){

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
    <div class="text">切换角色</div>
    </div>
    <div :style='listStyle'></div>


  <div class="list">
    <div class="item active" >
      <div class="left">
        <img src="" alt="" class='img'>
        <div class="info">
          <div class="name">学校管理员</div>
          <div class="role">教师</div>
        </div>
      </div>
      <div class='right'>当前登录</div>
    </div>

    <div class="item">
      <div class="left">
        <img src="" alt="" class='img'>
        <div class="info">
          <div class="name">庄雨晨</div>
          <div class="role">学生</div>
        </div>
      </div>
      <div class='right'></div>
    </div>

    <div class="item">
      <div class="left">
        <img src="" alt="" class='img'>
        <div class="info">
          <div class="name">高天宇</div>
          <div class="role">学生</div>
        </div>
      </div>
      <div class='right'></div>
    </div>

    <div class="item">
      <div class="left">
        <img src="" alt="" class='img'>
        <div class="add-user">
            添加学生
        </div>
      </div>
      <div class='right'></div>
    </div>




  </div>


  <div class="btn-group">
    <div class="unbinding-btn" @click='unbinding'>解除绑定</div>
    <div class="switch-btn" @click='switchUser'>切换角色</div>

  </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  background-color: #F5F5F5;
  height:100vh;
  font-size:0px;
  .nav-bar{
    .box-size(100vw,44px,#04A1F3);
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
    .text{
      .bold-font(18px,white);
    }
  }
  .list{
    .item{
      .box-size(calc(100% - 28px),93px,white);
      margin:12px auto 0 auto;
      .flex-simple(space-between,center);
      padding:0 18px 0 13px;
      border: 1px solid transparent;
      border-radius: 3px;
      box-shadow: 1px 0px 2px 0px rgba(219.997,219.997,219.997,1);
      &.active{
        border: 1px solid #F39700;
        box-shadow: 0px 0px 0px 0px white;
        .right{
          .normal-font(12px,#ED9400);
        }
      }
      .left{
        .flex-simple(flex-start,center);
        .img{
          .box-size(42px,42px,#ccc);
          border-radius:50%;
        }
        .info{
          margin-left:13px;
          .flex-simple(center,flex-start);
          flex-direction: column;
          .name{
            .bold-font(18px,#434343);
            .line-center(18px);

          }
          .role{
            .normal-font(12px,#434343);
            .line-center(12px);
            margin-top:9px;
          }
        }
        .add-user{
          .normal-font(12px,#434343);
          margin-left:13px;
        }
      }

      .right{
       font-size:0px;
      }



      .label{
        .bold-font(16px,#434343);
        .line-center(16px);
        text-align:right;
        .box-size(114px,16px);
        padding-right:17px;
        &:after{
          content:"";
          width:1px;
          height:10px;
          .box-size(1px,10px,#D9D9D9);
          .pos-absolute(3px,-1px,unset,unset);
        }
      }
      .value{
        flex:1;
        .line-center(18px);
        .bold-font(16px,#434343);
        padding-left:12px;
        box-sizing:border-box;
        .input{
          .box-size(100%,100%);
          .bold-font(16px,#434343);
        }
      }
    }
  }

  .btn-group{
    .box-size(calc(100vw - 28px),41px);
    .pos-fixed(unset,14px,20px,14px);
    .line-center(41px);
    .flex-simple(space-between,center);
    .switch-btn{
      .bold-font(15px,white);
      .box-size(calc(50% - 10px),41px,#F39700);
      border-radius:3px;
      text-align: center;
      box-shadow: 1px 0px 2px 0px rgba(219.997,219.997,219.997,1);
      border: 1px solid #F39700;
    }
    .unbinding-btn {
      .bold-font(15px,#434343);
      .box-size(calc(50% - 10px),41px,#EAEAEA);
      border-radius:3px;
      text-align: center;
      box-shadow: 1px 0px 2px 0px rgba(219.997,219.997,219.997,1);
      border: 1px solid #AEADAD;

    }

  }

}
</style>