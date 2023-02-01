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

  const list = computed(()=>{

    return props.users.map(item=>{
      return {
        ...item,
        style:{
          top:"100px",
          left:"20px"
        }
      }
    })
  })
</script>

<template>
  <div class='tree-top-wrapper'>
    <div class="user-item" v-for="userItem in list" :key='userItem.id' :style='userItem.style'>
        <memberInfo :info='userItem' />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
  .tree-top-wrapper{
    position: relative;
    .box-size(100vw,190vw);
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/class-pic-tree3.png") 0 0/100% 100% no-repeat;
    .user-item{
      position: absolute;
    }
  }
</style>