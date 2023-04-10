<script setup >
  import memberInfo from './memberInfo.vue';
  import {ref,unref,computed} from "vue";

  const props = defineProps({
    users:{
      type:Array,
      default:()=>{
        return []
      }
    }
  })
  let posMap = {
    1 :{
      top:"-0.768vw",
      right:"27.976vw"
    },
    2:{
      top:"6.86vw",
      right:"43.749vw"
    },3 :{
      top:"18.725vw",
      right:"64.348vw"
    },4 :{
      top:"44.406vw",
      right:"27.671vw"
    },5 :{
      top:"58.535vw",
      right:"46.63vw"
    },6 :{
      top:"62.213vw",
      right:"63.12vw"
    },7 :{
      top:"68.406vw",
      right:"15.971vw"
    },
    8 :{
      top:"88.535vw",
      right:"36.03vw"
    },9 :{
      top:"99.213vw",
      right:"56.12vw"
    },
    10 :{
      top:"130.063vw",
      right:"13.043vw"
    },
    11 :{
      top:"130.58vw",
      right:"33.164vw"
    },12 :{
      top:"141.174vw",
      right:"59.386vw"
    },
  }

  let rankStyleMap={
    1 :{
      top:"21.5vw",
      right:"5vw"
    },
    2:{
      top:"22.5vw",
      right:"5vw"
    },3 :{
      top:"20.8vw",
      right:"4.3vw"
    },4 :{
      top:"24vw",
      right:"5vw"
    },5 :{
      top:"23.1vw",
      right:"4.5vw"
    },6 :{
      top:"24vw",
      right:"4vw"
    },7 :{
      top:"24vw",
      right:"5vw"
    },
    8 :{
      top:"23.5vw",
      right:"4vw"
    },9 :{
      top:"23.5vw",
      right:"4vw"
    },
    10 :{
      top:"24vw",
      right:"4.4vw"
    },
    11 :{
      top:"23vw",
      right:"4.4vw"
    },12 :{
      top:"23.5vw",
      right:"5vw"
    },
  }

  const list = computed(()=>{

    return props.users.map((item,index)=>{
      return {
        ...item,
        style:posMap[index+1],
        rankStyle:rankStyleMap[index+1]
      }
    })
  })
</script>

<template>
  <div class='tree-top-wrapper'>
    <div class="user-item" v-for="userItem in list" :key='userItem.id' :style='userItem.style'>
        <memberInfo :info='userItem' />
        <div class='rank-num' :style='userItem.rankStyle'>{{userItem.ranking}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,178.0444vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree3.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
    .rank-num{
      .btn-text(16px);
      .line-center(16px);
      position: absolute;
      display: inline-block;
    }
  }
</style>