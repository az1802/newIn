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

const formInfo = ref({
  oldPwd:"",
  newPwd:"",
  newConfirmPwd:""
})

async function sumbit(){

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
    <div class="text">修改密码</div>
    </div>
    <div :style='listStyle'></div>


  <div class="list">
    <div class="item">
      <div class="label">学校</div>
      <div class='value'>深圳龙华二外</div>
    </div>
    <div class="item">
      <div class="label">班级</div>
      <div class='value'>一年级一班</div>
    </div>
    <div class="item">
      <div class="label">姓名</div>
      <div class='value'>黄天宇</div>
    </div>

    <div class="item">
      <div class="label">原始密码</div>
      <div class='value'><input type="text" v-model='formInfo.oldPwd' placeholder='请输入原密码' class='input' placeholder-style='font-size:15px;color:#949494;'></div>
    </div>

    <div class="item">
      <div class="label">新密码</div>
      <div class='value'><input type="text" v-model='formInfo.newPwd' placeholder='请输入新密码'  class='input' placeholder-style='font-size:15px;color:#949494;'></div>
    </div>

    <div class="item">
      <div class="label">确认密码</div>
      <div class='value'><input type="text" v-model='formInfo.newConfirmPwd' placeholder='请再次输入新密码'  class='input' placeholder-style='font-size:15px;color:#949494;'></div>
    </div>



  </div>


  <div class="sumbit-btn" @click='sumbit'>提交</div>

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
    background:white;
    padding:18px 0;
    .item{
      height:54px;
      .flex-simple(flex-start,center);
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

  .sumbit-btn{
    .box-size(calc(100vw - 28px),41px,#F39700);
    .pos-fixed(unset,14px,20px,14px);
    .line-center(41px);
    .bold-font(18px,white);
    text-align:center;
    border-radius:3px;
  }

}
</style>