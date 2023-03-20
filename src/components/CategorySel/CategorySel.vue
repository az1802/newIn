<script setup>

  const props = defineProps({
    list:{
      type:Array,
      default:()=>[]
    },
    value:{
      type:Array,
      default:()=>[0,0]
    }
  })




</script>

<template>
  <div class='category-sel'>类型选择</div>
</template>

<style lang="less" scoped>
.category-sel{
  display:inline-block;
  width:100%;
}

</style>