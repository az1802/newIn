<script setup >
const props = defineProps({
  list:{
    type:Array,
    default:[]
  }
})

</script>

<template>
  <div class='list'>
    <div class="img-item" v-for="item in props.list" :key='item'>
      <img src="" alt="" class='img'>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.list{
  height:22px;
  font-size:0px;
  .img-item{
    .box-size(21px,21px,#ccc);
    margin-left:-11px;
    border:1px solid white;
    border-radius:50%;
    display:inline-block;
    &:first-child{
      margin-left:0px;
    }
    .img{
      .box-size(21px,21px);
    }
  }
}
</style>