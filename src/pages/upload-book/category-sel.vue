<script setup>
import {component,unref,ref,onBeforeMount,watch} from "vue";

  const props = defineProps({
    categorylist:{
      type:[Array,Object],
      default:()=>[]
    },
    multiIndex:{
      type:Array,
      default:()=>[0,0]
    }
  })





  let mulArr = ref([[],[]]);


  watch(()=>props.categorylist,nval=>{

    let firstArr = nval.map(item=>{
      return item.category
    })
    let secondArr = nval[props.multiIndex[1]]?.children?.map(item=>{
      return item.category
    }) || []


    if(nval.length){
      mulArr.value = [firstArr,secondArr]
    }

  })


  onBeforeMount(()=>{
    console.log(props.categorylist,props)


  })



  function multiPickerChange(e){
    props.multiIndex[0] = e.detail.value[0];
    props.multiIndex[1] = e.detail.value[1];
  }

  function multiPickerColumnChange(e){
    console.log('e: ', e);
    let value = e.detail.value;
    let column = e.detail.column;
    if(column==0){
      let secondArr = props.categorylist[value]?.children?.map(item=>{
        return item.category
      }) || [];
      mulArr.value[1]= secondArr;
      props.multiIndex[0] = value;
    }else{
      props.multiIndex[1] = value;
    }
  }

</script>

<template>
  <div class='category-sel'>
    <picker mode="multiSelector" @change="multiPickerChange" @columnchange="multiPickerColumnChange" :value="props.multiIndex" :range="mulArr">
      <view class="picker">
        {{mulArr[0]&&mulArr[0][props.multiIndex[0]]}},{{mulArr[1]&&mulArr[1][props.multiIndex[1]]}}
      </view>
    </picker>
  </div>
</template>

<style lang="less" scoped>
.category-sel{
  display:inline-block;
  width:100%;
  background:#FCF5B8;
}

</style>