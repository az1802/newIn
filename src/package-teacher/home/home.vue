<script setup >
import {ref} from "vue";
import RankList from "../components/rank-list.vue"

const tabActive = ref("uploadBook");


 function toggleTab(value){
  tabActive.value = value
 }

</script>

<template>
  <div class='page'>
    <TeacherNavBar :showBackIcon='false' title="二年级三班" />
    <div class='card-list'>
      <div class="card-item upload">
        <div class="text">265本</div>
        <div class="sub-text">总上传</div>
      </div>
      <div class="card-item borrow">
        <div class="text">126本</div>
        <div class="sub-text">总借阅</div>
      </div>
      <div class="card-item credit">
        <div class="text">积分/信用</div>
        <div class="sub-text">排行榜</div>
      </div>
      <div class="card-item class">
        <div class="text">班级</div>
        <div class="sub-text">学生状态</div>
      </div>
    </div>

    <div class='rank-wrapper'>
      <div class="tabs">
        <div class="tab-item" :class='[tabActive=="uploadBook" ? "active":""]' @click='toggleTab("uploadBook")'>上传排行</div>
        <div class="tab-item" :class='[tabActive=="borrowOut" ? "active":""]' @click='toggleTab("borrowOut")'>借阅排行</div>
        <div class="tab-item" :class='[tabActive=="readBook" ? "active":""]' @click='toggleTab("readBook")'>阅读量排行</div>
        <div class="tab-item" :class='[tabActive=="hotBook" ? "active":""]' @click='toggleTab("hotBook")'>最火书籍</div>
      </div>
      <div class="tab-contents">
        <div class="tab-content-item" v-show='tabActive=="uploadBook"'>
          <scroll-view class='content'>
            <RankList type='upload'/>
          </scroll-view>
        </div>
        <div class="tab-content-item" v-show='tabActive=="borrowOut"'>2</div>
        <div class="tab-content-item" v-show='tabActive=="readBook"'>
          <scroll-view class='content'>
            <RankList type='read'/>
          </scroll-view>
        </div>
        <div class="tab-content-item" v-show='tabActive=="hotBook"'>4</div>
      </div>

    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  background-color: #F6F6F6;
  .card-list{
    .box-size(100vw,114px,white);
    .flex-simple(space-between,center);
    padding:4.267vw 3.2vw;
    .card-item{
      .box-size(21.6vw,21.6vw);
      &.upload{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/cad-zi.png") 0 0/100% 100% no-repeat;
      }
      &.borrow{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/cad-lan.png") 0 0/100% 100% no-repeat;
      }
      &.credit{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/cad-cs.png") 0 0/100% 100% no-repeat;
      }
      &.class{
        background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/cad-ls.png") 0 0/100% 100% no-repeat;
      }
      .text{
        .bold-font(22px,white);
      }
      .sub-text{
        .normal-font(16px,white);
      }
    }
  }
  .rank-wrapper{
    margin-top:6px;
    background: white;
    .tabs{
      .box-size(100%,40px);
      padding:23px;
      .flex-simple(space-between,center);
      border-bottom:1px solid #E9E9E9;
      .tab-item{
        .normal-font(14px,#2D2D2D);
        position:relative;
        height:100%;
        &.active{
          .normal-font(14px,#FF8100);
          &::after{
            content:"";
            display: inline-block;
            .box-size(18px,2px,#FF8100);
            .pos-absolute(unset,unset,-23px,50%);
            transform: translateX(-50%);
          }
        }
      }
    }
    .tab-contents{
      .tab-content-item{
        .content{
          .box-size(100%,100%);
        }
      }
    }
  }
}
</style>