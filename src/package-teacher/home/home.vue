<script setup >
import {ref} from "vue";
import {navigateTo} from "@utils/wechat";
import UploadRankList from "../components/upload-rank-list.vue";
import ReadRankList from "../components/read-rank-list.vue";
import HotBook from "../components/hoot-book.vue"



const tabActive = ref("uploadBook");


 function toggleTab(value){
  tabActive.value = value
 }


  const uploadList = ref([1,2,3,4,5,6,7,8,9,10,11,12,13]);
  const readList = ref([1,2,3,4,5,6,7,8,9,10,11,12,13]);
  const hotList = ref([1,2,3,4,5,6,7,8,9,10,11,12,13]);

</script>

<template>
  <div class='page'>
    <TeacherNavBar :showBackIcon='false' title="二年级三班" >
      <template #back>
        <div @click='navigateTo("/package-teacher/general-setting/general-setting")' class='home-setting'>
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/teacher/home-icon-setting.png" alt="" class='img'>
        </div>
      </template>
    </TeacherNavBar>
    <div class='card-list'>
      <div class="card-item upload" @click='navigateTo("/package-teacher/total-borrow/total-upload")'>
        <div class="text ben">265</div>
        <div class="sub-text">总上传</div>
      </div>
      <div class="card-item borrow"  @click='navigateTo("/package-teacher/total-borrow/total-borrow")'>
        <div class="text ben">126</div>
        <div class="sub-text">总借阅</div>
      </div>
      <div class="card-item credit"  @click='navigateTo("/package-teacher/integral/integral")'>
        <div class="text">积分/信用</div>
        <div class="sub-text">排行榜</div>
      </div>
      <div class="card-item class" @click='navigateTo("/package-teacher/borrow-status/borrow-status")'>
        <div class="text">消息</div>
        <div class="sub-text">借阅状态</div>
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
          <scroll-view class='content' :show-scrollbar='false' enhanced scroll-y>
            <UploadRankList :list='uploadList'/>
          </scroll-view>
        </div>
        <div class="tab-content-item" v-show='tabActive=="borrowOut"'>
          <scroll-view class='content' :show-scrollbar='false' enhanced scroll-y>
            <UploadRankList :list='uploadList'/>
          </scroll-view>
        </div>
        <div class="tab-content-item" v-show='tabActive=="readBook"'>
          <scroll-view class='content' :show-scrollbar='false' enhanced scroll-y>
            <ReadRankList :list='readList'/>
          </scroll-view>
        </div>
        <div class="tab-content-item" v-show='tabActive=="hotBook"'>
          <scroll-view class='content' :show-scrollbar='false' enhanced scroll-y>
            <HotBook :list='hotList'/>
          </scroll-view>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/teacher-index.less';
.page{
  background-color: #F6F6F6;
  .home-setting{
    .box-size(33px,33px);
    .flex-simple(center,center);
    .img{
      .box-size(17px,16px);
    }
  }
  .card-list{
    .box-size(100vw,114px,white);
    .flex-simple(space-between,center);
    padding:4.267vw 3.2vw;
    .card-item{
      .box-size(21.6vw,21.6vw);
      padding:12px 9px;
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
        .bold-font(13px,white);
        &.ben::after{
          content:"本";
          .normal-font(10px,white);
          margin-left:2px;
        }
      }
      .sub-text{
        .normal-font(9px,white);
        margin-top:2px;
      }
    }
  }
  .rank-wrapper{
    margin-top:6px;
    background: white;
    .tabs{
      .box-size(100%,44px);
      padding:15px 23px;
      .flex-simple(space-between,center);
      border-bottom:1px solid #E9E9E9;
      .tab-item{
        .normal-font(14px,#2D2D2D);
        .line-center(14px);
        position:relative;
        &.active{
          .normal-font(14px,#FF8100);
          &::after{
            content:"";
            display: inline-block;
            .box-size(18px,2px,#FF8100);
            .pos-absolute(unset,unset,-15px,50%);
            transform: translateX(-50%);
          }
        }
      }
    }
    .tab-contents{
      .box-size(100%,calc(100vh - 43.733vw - 70px));
      .tab-content-item{
         .box-size(100%,100%);
        .content{
          .box-size(100%,100%);
        }
      }
    }
  }
}
</style>