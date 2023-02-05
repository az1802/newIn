<script setup >
import {ref} from "vue";
import {navigateTo} from "@utils/wechat"
import {useSystemInfo} from "@hooks/commonHooks";

const systemInfo = useSystemInfo();

const listStyle = ref({
  height:`calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`
})


function genMockData(len){
  let res = [];
  let statusMap = ['applying','agreed','jieyue','returned']
  let classMap = ["申请中","已同意","借阅中","已完成"];

  for(let i = 0 ; i < len ;i++){
    res.push(
      {
        id:i+1,
        name:`item${i}`,
        status:statusMap[i%4],
        statusText:classMap[i%4],
      }
    )
  }

  return res;
}

const list = ref(genMockData(4));


const forms = ref([
  {
    label:"有无申诉：",
    value:"有",
    mulLine:false
  },
  {
    label:"申诉时间：",
    value:"2019-10-31 18:32",
    mulLine:false
  },
  {
    label:"处理状态：",
    value:"待处理",
    mulLine:false
  },

  {
    label:"申诉缘由：",
    value:"图书破损",
    mulLine:false
  },
  {
    label:"申诉详情：",
    value:"借书给牛子硕后未好好珍惜书本，内页有几处 粘有污渍并且有褶损的情况",
    mulLine:true
  },
])

const detailList=ref([
  "作者：王源 ",
  "类型：故事大王",
  "页数：34页/共6000字",
  "期限：7天"
])
</script>

<template>
  <div class='page'>
    <TeacherNavBar title="借阅详情" />
    <scroll-view class='content' :show-scrollbar='false' enhanced scroll-y :style='listStyle'>
      <div class="book-info">
        <div class="left">
          <img src="" alt="" class="img" />
        </div>
        <div class="info">
          <div class="name">奥当女孩（神奇少年桑桑系列之 第六部）</div>
          <div class="detail-form" >
            <div class="detail-item" v-for='item in detailList' :key='item'>
                {{item}}
            </div>
          </div>
        </div>
      </div>

      <div class="status-list">
        <div class="title">借阅状态</div>
        <div class="list">
          <div class="item" v-for='item in list' :key="item.id">
            <div class="left">
              <img src="" alt="" class='img'>
              <div class="name">{{item.name}}</div>
            </div>
            <div class="mid" :class="item.status">{{item.statusText}}</div>
            <div class="time">2019-10-23</div>
          </div>
        </div>
      </div>

      <div class="appeal-detail">
        <div class="title">申诉情况</div>
        <div class="form">
          <div class="form-item" v-for='item in forms' :key='item.label'>
            <div class="label">{{item.label}}</div>
            <div class="value" :class='[item.mulLine?"mul-line":""]'>{{item.value}}</div>
          </div>
        </div>
      </div>
      <div style='height:6px'></div>

    </scroll-view>



  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  .full-screen();
  background-color: #F6F6F6;
  .content{
    padding:6px 0;
  }
  .book-info{
    .box-size(calc(100% - 16px),unset,white);
    margin:0px 8px 6px 8px;
    border-radius:12px;
    padding:14px;
    .flex-simple(flex-start,center);
    .left {
      .box-size(98px,125px);
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/jyxq-bk-hs.png") 0 0/100% 100% no-repeat;
      .img {
        .box-size(62px,88px,#ccc);
        margin:13px 20px;
      }
    }
    .info{
      flex:1;
      padding-left:15px;
      .name{
        line-height:20px;
        .bold-font(14px,#2D2D2D);
      }
      .detail-form{
        margin-top:12px;
        .detail-item{
          .line-center(12px);
          .normal-font(12px,#797979);
          margin-bottom:6px;
        }
      }
    }
  }
  .status-list{
    .box-size(calc(100% - 16px),unset,white);
    margin:0px 8px 6px 8px;
    border-radius:12px;
    padding:14px 13px;
    .title{
      .line-center(16px);
      .bold-font(16px,#2D2D2D);
    }
    .list{
      margin-top:15px;
      .item{
        .flex-simple(space-between,center);
        .box-size(100%,30px);
        margin-bottom:10px;
        .left{
          flex:1;
          .flex-simple(flex-start,center);
          .line-center(30px);
          .img{
            .box-size(30px,30px,#ccc);
            border-radius:50%;
          }
          .name{
            .normal-font(12px,#2D2D2D);
            margin-left:8px;
            .line-center(12px);
          }
        }
        .mid{
          flex:1;
          .normal-font(12px,#797979);
          .line-center(12px);
          &.applying{
            color:#00A3FF;
          }
          &.agreed{
            color:#4DB12B;
          }
          &.jieyue{
            color:#FF8100;
          }
          &.returned{
            color:#797979;
          }
        }
        .time{
          flex:1;
          .normal-font(12px,#AFAFAF);
          text-align:right;
          .line-center(12px);
        }
      }
    }
  }
  .appeal-detail{
    .box-size(calc(100% - 16px),unset,white);
    margin:0px 8px 0px 8px;
    border-radius:12px;
    padding:14px 13px;
    .title{
      .line-center(16px);
      .bold-font(16px,#2D2D2D);
    }
    .form{
      margin-top:23px;
      .form-item{
        .box-size(100%,unset);
        .flex-simple(flex-start,flex-start);
        margin-bottom:13px;
        .label{
          .line-center(12px);
          .normal-font(12px,#797979);
        }
        .value{
          margin-left:4px;
          flex:1;
          .normal-font(12px,#2D2D2D);
          .line-center(12px);
          &.mul-line{
            line-height:20px;
            height:unset;
          }
        }
      }
    }
  }
}
</style>