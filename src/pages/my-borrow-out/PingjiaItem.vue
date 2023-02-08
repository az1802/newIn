<script setup lang='ts'>


</script>

<template>
  <div class='pingjia-wrapper'>
    <div class='fenshu-wrapper'>
      <div class="left">
        <div class="fenshu">
          <div class="item" v-for='item in [1,2,3,4,5]'></div>
        </div>
        <div class="text">超赞，无可挑剔</div>
      </div>
      <div class="time">
        2018/06/28
      </div>
    </div>
    <div class="content">
      张芳婷很守时，图书借给她，还给我没有任何损坏，
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.pingjia-wrapper{
  .box-size(100%,unset);
  .fenshu-wrapper{
    .box-size(100%,15px);
    .line-center(15px);
    .flex-simple(space-between,center);
    .left{
      flex:1;
      .flex-simple(flex-start);
      .fenshu{
        .flex-simple(flex-start);
        display: inline-flex;
        font-size:0px;
        .item{
          .box-size(23px,15px);
          background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/ic_star_small_red.png") 0 0/100% 100% no-repeat;
          margin-left:-5px;
        }
      }
      .text{
        .line-center(12px);
        .normal-font(12px,#EF8100);
        margin-left:11px;
      }
    }
    .time{
      .line-center(12px);
      .normal-font(12px,#646A6D);
    }
  }
  .content{
    line-height:17px;
    .normal-font(13px,#63696D);
    margin-top:14px;
  }
}
</style>