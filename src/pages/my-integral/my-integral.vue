<script setup >
import {ref,unref}  from "vue";
  import {useSystemInfo} from "@hooks/commonHooks";
  const systemInfo = useSystemInfo();
  const listStyle = ref({
    height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px - 20px - 92vw)`,
    // height:"63vw"
  });

  function genMockList(n){
   let arr = [];

  for(let  i = 1 ; i<= n;i++){
    let left = '55'
    arr.push({
      id:i,
      status:i%2==0 ? "out" : "return", //return ,out
      statusText:i%2==0 ? "出借图书" : "上架图书",
      timeText:"2018/10/20 09:12",
      jifenText:i%2==0 ? "剩余积分：1200分" : "当前积分：1200分",
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
       jifenTextStyle:{
        fontSize:"9px"
       },
       numStyle:{
        fontSize:"12px"
       },

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
    let h = 80*(index+1)

    if(h <= scrollTop+80 ){
      item.style = {
        itemStyle:{
          width:"245px",
          height:"80px",
          marginTop:"0px"
        },
        imgStyle:{
          width:"34px",
          height:"44px"
        },
        statusTextStyle:{
          fontSize:"16px"
        },
        timeTextStyle:{
          fontSize:"12px"
        },
        jifenTextStyle:{
          fontSize:"12px"
        },
        numStyle:{
          fontSize:"20px"
        }
      }
    }else if(h <= scrollTop + 160){
      let scale = ((scrollTop+160) - h)/80;
      console.log('scale: ',(scrollTop+120)- h, scale);
      item.style = {
        itemStyle:{
          width:`${210+35*scale}px`,
          height:`${67+13*scale}px`,
          // marginTop:"10px"
          // marginTop:`${12 - 12*scale}px`
        },
        imgStyle:{
          width:`${29+4*scale}px`,
          height:`${38+6*scale}px`
        },
        statusTextStyle:{
          fontSize:`${13+3*scale}px`
        },
        timeTextStyle:{
          fontSize:`${11+1*scale}px`
        },
        jifenTextStyle:{
          fontSize:`${11+1*scale}px`
        },
        numStyle:{
          fontSize:`${19+1*scale}px`
        }
      }
    }else if(h <= scrollTop + 240){
      let scale = ((scrollTop+240) -h)/80;
      item.style = {
        itemStyle:{
          width:`${187+23*scale}px`,
          height:`${55+12*scale}px`,
          // marginTop:`${14 - 2*scale}px`
        },
        imgStyle:{
          width:`${26+3*scale}px`,
          height:`${34+4*scale}px`
        },
        statusTextStyle:{
          fontSize:`${12+1*scale}px`
        },
        timeTextStyle:{
          fontSize:`${10+1*scale}px`
        },
        jifenTextStyle:{
          fontSize:`${9+1*scale}px`
        },
        numStyle:{
          fontSize:`${16+3*scale}px`
        }
      }
    }else if(h > scrollTop + 240){
      item.style = {
        itemStyle:{
          width:"187px",
          height:"55px",
          // marginTop:"14px"
        },
        imgStyle:{
          width:`26px`,
          height:`34px`
        },
        statusTextStyle:{
          fontSize:"12px"
        },
        timeTextStyle:{
          fontSize:"10px"
        },
        jifenTextStyle:{
          fontSize:"9px"
        },
        numStyle:{
          fontSize:"16px"
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
    <NavBar title='我的积分' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div :style='{ height: systemInfo.statusBarHeight + "px"}'></div>
    <div class='intergral-wrapper' >
      <div class="high">
        <div class="text">1200</div>
      </div>
    </div>
    <div class="diandi-wrapper">
      <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/intergal-diandi.png" alt="" class='diandi-record'>
    </div>
    <div class="list-wrapper" :style='listStyle'>
      <scroll-view :show-scrollbar='false' class="record-list" @scroll='handleScroll' scroll-y enable-passive >
      <div class='item' v-for='item in list' :key='item.id'>
        <div class="info" :style='item.style.itemStyle'>
          <div class="left">
            <img v-if="item.status=='out'" src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Credit-Books.png" alt="" class='img' :style='item.style.imgStyle'>
            <img v-else src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Credit-Books2.png" alt="" class='img' :style='item.style.imgStyle'>
            <div class="status">
              <div class="text" :style='item.style.statusTextStyle'>{{item.statusText}}</div>
              <div class="time" :style='item.style.timeTextStyle'>{{item.timeText}}</div>
              <div class="jifen" :style='item.style.jifenTextStyle'>{{item.jifenText}}</div>
            </div>
          </div>
          <div class="right">
            <div class='num' :style='item.style.numStyle'>{{item.num}}</div><div class='unit'>分</div>
          </div>
        </div>
      </div>

    </scroll-view>
    </div>

  </div>

</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_3.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .intergral-wrapper{
    .high{
      .box-size(60vw,46.4vw);
      margin:16vw auto 0 auto;
      text-align:center;
      padding-top:14vw;
      background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/integral-current.png") 0 0/100% 100% no-repeat;
      .text{
        .bold-font(40px,#AD2E01);
        &::after{
          content:"积分";
          .normal-font(14px,#AD2E01);
          position: relative;
          top:-2px;
          left:2px
        }
      }
    }
  }
  .diandi-wrapper{
    .box-size(30.667vw,12vw);
    margin:12.533vw auto 0 auto;
    .diandi-record{
      .box-size(30.667vw,12vw);
    }
  }
  .list-wrapper{
    .box-size(100vw,unset);
    .flex-simple(center,center);
  }

  .record-list{
    .flex-simple(center,flex-start);
    .box-size(100vw,240px);
    margin-top:3.733vw;
    font-size:0px;
    .item{
      .box-size(100%,80px);
      // .flex-simple(center,flex-start);
      .flex-simple(center,center);
      .info{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/image_item_integral_bg.png") 0 0/100% 100% no-repeat;
        margin: 0 auto 0 auto;
        .flex-simple(space-between,center);
        box-sizing: border-box;
        padding:0 17px 0 13px;
        .left{
          font-size:0px;
          .flex-simple(flex-start,flex-start);
          .img{

          }
          .status{
            .flex-simple(center,flex-start);
            flex-direction: column;
            margin-left:10px;
            .text{
              font-weight:bold;
              color:#813F01;
            }
            .time{
              margin-top:6px;
              color:#803F01;
            }
            .jifen{
              margin-top:6px;
              color:#803F01;
            }
          }
        }
        .right{
          .flex-simple(flex-start,center);
          align-self:flex-start;
          margin-top:10%;
          .num{
            color:#803F01;
          }
          .unit{
            font-size:13px;
          }
        }
      }

    }
  }
}
</style>