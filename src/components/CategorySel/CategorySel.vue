<script setup>
import {component,unref,ref,onBeforeMount} from "vue";

  const props = defineProps({
    categorylist:{
      type:Array,
      default:()=>{}
    },
    multiIndex:{
      type:Array,
      default:()=>[0,0]
    }
  })





  let mulArr = ref([[],[]])


  onBeforeMount(()=>{
    let list = Object.values(props.categorylist);
    let firstArr = list.map(item=>{
      return item.category
    })
    let secondArr = list[props.multiIndex[1]]?.children?.map(item=>{
      return item.category
    }) || []

    console.log('firstArr,secondArr: ', firstArr,secondArr);

    if(list.length){
      mulArr.value = [firstArr,secondArr]
      console.log('mulArr: ', mulArr);
    }
  })



  function multiPickerChange(e){
    props.multiIndex[0] = e.detail.value[0];
    props.multiIndex[1] = e.detail.value[1];
  }

  function multiPickerColumnChange(e){
    let column = e.detail.column;

    let firstArr = Object.values(props.categorylist).map(item=>{
      return item.category
    })
    let secondArr = Object.values(props.categorylist)[column]?.children.map(item=>{
      return item.category
    })

    mulArr.value = [firstArr,secondArr];
    props.multiIndex[0] = e.detail.value[0];
    props.multiIndex[1] = e.detail.value[1];

  }

</script>

<template>
  <div class='category-sel'>
    <picker mode="multiSelector" @change="multiPickerChange" @columnchange="multiPickerColumnChange" :value="props.multiIndex" :range="mulArr">
      <view class="picker">
        <!-- {{mulArr[0]&&mulArr[0][props.multiIndex[0]]}},{{mulArr[1]&&mulArr[1][props.multiIndex[1]]}} -->
      </view>
    </picker>
  </div>
</template>

<style lang="less" scoped>
.category-sel{
  display:inline-block;
  width:100%;
}

</style>