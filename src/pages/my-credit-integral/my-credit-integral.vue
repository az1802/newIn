<script setup >
import {ref,unref}  from "vue";
  import {useSystemInfo} from "@hooks/commonHooks";
  const systemInfo = useSystemInfo();



const listStyle = ref({
  height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px - 20px - 91.9vw)`,
});

function genMockList(n){
   let arr = [];

  for(let  i = 1 ; i<= n;i++){
    let left = '55'
    arr.push({
      id:i,
      status:i%2==0 ? "out" : "return", //return ,out
      statusText:i%2==0 ? "借出图书" : "归还图书",
      timeText:"2018/10/20 09:12",
      num:"+5",
      style:{
        itemStyle:{
          width:"172px",
          height:"42px",
          marginTop:"0px"
        },
       imgStyle:{
        width:"24px",
        height:"30px"
       },
       statusTextStyle:{
        fontSize:"11px"
       },
       timeTextStyle:{
        fontSize:"9px"
       },
       numStyle:{
        fontSize:"12px"
       }
      }
    })
  }
  calcPos(0,arr);
   return arr;
 }

let list = ref(genMockList(12))

function calcPos(scrollTop,list){
  console.log('scrollTop: ', scrollTop);

  // let {screenHeight,screenWidth} = systemInfo;
  unref(list).forEach((item,index)=>{
    let h = 60*(index+1)

    if(h <= scrollTop+60 ){
      item.style = {
        itemStyle:{
          width:"245px",
          height:"60px",
          marginTop:"0px"
        },
        imgStyle:{
          width:"34px",
          height:"43px"
        },
        statusTextStyle:{
          fontSize:"16px"
        },
        timeTextStyle:{
          fontSize:"12px"
        },
        numStyle:{
          fontSize:"20px"
        }
      }
    }else if(h <= scrollTop + 120){
      let scale = ((scrollTop+120) - h)/60;
      console.log('scale: ',(scrollTop+120)- h, scale);
      item.style = {
        itemStyle:{
          width:`${210+35*scale}px`,
          height:`${52+8*scale}px`,
          // marginTop:`${12 - 12*scale}px`
        },
        imgStyle:{
          width:`${29+5*scale}px`,
          height:`${37+6*scale}px`
        },
        statusTextStyle:{
          fontSize:`${13+3*scale}px`
        },
        timeTextStyle:{
          fontSize:`${11+1*scale}px`
        },
        numStyle:{
          fontSize:`${15+5*scale}px`
        }
      }
    }else if(h <= scrollTop + 180){
      let scale = ((scrollTop+180)-h)/60;
      item.style = {
        itemStyle:{
          width:`${187+23*scale}px`,
          height:`${47+6*scale}px`,
          // marginTop:`${12 - 2*scale}px`
        },
        imgStyle:{
          width:`${26+3*scale}px`,
          height:`${34+4*scale}px`
        },
        statusTextStyle:{
          fontSize:`${13+3*scale}px`
        },
        timeTextStyle:{
          fontSize:`${10+2*scale}px`
        },
        numStyle:{
          fontSize:`${15+0*scale}px`
        }
      }
    }else if(h <= scrollTop + 240){
      let scale = ((scrollTop+240) -h)/60;
      item.style = {
        itemStyle:{
          width:`${172+15*scale}px`,
          height:`${42+5*scale}px`,
          // marginTop:`${14 - 2*scale}px`
        },
        imgStyle:{
          width:`${24+2*scale}px`,
          height:`${30+4*scale}px`
        },
        statusTextStyle:{
          fontSize:`${11+2*scale}px`
        },
        timeTextStyle:{
          fontSize:`${9+1*scale}px`
        },
        numStyle:{
          fontSize:`${12+3*scale}px`
        }
      }
    }else if(h > scrollTop + 240){
      item.style = {
        itemStyle:{
          width:"172px",
          height:"42px",
          // marginTop:"14px"
        },
        imgStyle:{
          width:`24px`,
          height:`30px`
        },
        nameStyle:{
          fontSize:"11px"
        },
        timeTextStyle:{
          fontSize:"9px"
        },
        numStyle:{
          fontSize:"12px"
        }
      }
    }

  })

}



function handleScroll(e){
  let scrollTop = e.detail.scrollTop;
  // console.log('scrollTop: ', scrollTop);
  calcPos(scrollTop,list)
}


</script>

<template>
  <div class="page">
    <NavBar title='我的信用积分' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div :style='{ height: systemInfo.statusBarHeight + "px"}'></div>
    <div class='intergral-wrapper' >
      <div class="high">
        <div class="text-wrapper">
          <div class="text">90</div>
          <div class="sub-text">我的信用积分</div>
        </div>
      </div>
    </div>
    <div class="tooltip-text">如果信用积分低于60分，则不能再借阅图书了哦！</div>
    <div class="diandi-wrapper">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/intergal-diandi.png" alt="" class='diandi-record'>
    </div>
    <scroll-view :show-scrollbar='false' class="record-list" @scroll='handleScroll' scroll-y enable-passive>
      <div class='item' v-for='item in list' :key='item.id'>
        <div class="info" :style='item.style.itemStyle'>
          <div class="left">
            <img v-if="item.status=='out'" src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Credit-Books.png" alt="" class='img' :style='item.style.imgStyle'>
            <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Credit-Books2.png" alt="" class='img' :style='item.style.imgStyle'>
            <div class="status">
              <div class="text" :style='item.style.statusTextStyle'>{{item.statusText}}</div>
              <div class="time" :style='item.style.timeTextStyle'>{{item.timeText}}</div>
            </div>
          </div>
          <div class="right">
            <div class='num' :style='item.style.numStyle'>{{item.num}}</div><div class='unit'>分</div>
          </div>
        </div>
      </div>

    </scroll-view>
  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_3.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  font-size:0px;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .intergral-wrapper{
    .high{
      .box-size(49.6vw,49.6vw);
      margin:5.333vw auto 0 auto;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/credit-sunlight.png") 0 0/100% 100% no-repeat;
      .flex-simple(center,center);
      .text-wrapper{
        .text{
          .bold-font(30px,#333333);
          text-align:center;
          &::after{
            content:"分";
            .normal-font(14px,#333333);
            position: relative;
            top:-2px;
            left:2px
          }
        }
        .sub-text{
          .normal-font(3.733vw,#333333);
          margin-top:2.667vw;
          text-align:center;
        }
      }

    }
  }
  .tooltip-text{
    .line-center(3.733vw);
    margin:2.667vw auto 0 auto;
    .normal-font(3.733vw,#333333);
    text-align:center;
  }
  .diandi-wrapper{
    .box-size(30.667vw,12vw);
    margin:9.067vw auto 0 auto;
    .diandi-record{
      .box-size(30.667vw,12vw);
    }
  }
  .record-list{
    .flex-simple(center,flex-start);
    .box-size(100vw,240px);
    margin-top:9.067vw;
    font-size:0px;
    .item{
      .box-size(100%,60px);
      // .flex-simple(center,flex-start);
      .flex-simple(center,center);
      .info{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/intergral-rect.png") 0 0/100% 100% no-repeat;
        margin: 0 auto 0 auto;
        .flex-simple(space-between,center);
        box-sizing: border-box;
        padding:0 20px;
        .left{
          font-size:0px;
          .flex-simple(flex-start,center);
          .img{

          }
          .status{
            .flex-simple(center,flex-start);
            flex-direction: column;
            margin-left:4px;
            .text{
              font-weight:bold;
              color:#813F01;
            }
            .time{
              margin-top:6px;
              color:#803F01;
            }
          }
        }
        .right{
          .flex-simple(flex-start,flex-end);
          .num{
            color:#803F01;
          }
        }
      }

    }
  }

}
</style>