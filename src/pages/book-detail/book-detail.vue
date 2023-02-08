<script setup>
import { ref ,unref,computed} from 'vue';
import { useSystemInfo } from '@hooks/commonHooks';
import BorrowBookDialog from './BorrowBookDialog.vue';

const systemInfo = useSystemInfo();

const bookDetail = ref({
  name: '',
  author: '',
  owners: [],
  pingjia: [],
});




let borrowBookDialog = ref(false);
function borrowBook() {
  console.log('借阅次数');

  borrowBookDialog.value=true
}

let ownerList = [];




function mockBookList(){
  let mockList=[]
  for(let i= 1 ; i<15;i++){
    mockList.push({
      name:"张恒"+i,
      id:i,
      grade:"三年级二班",
      avatarUrl:""
    })

  }
  ownerList = mockList;
}
mockBookList();
function transfromOwnerList(list) {
  let selArr = [],
    res = [];
  for (let i = 0; i < list.length; i++) {
    selArr.push(list[i]);
    if ((i + 1) % 4 == 0) {
      selArr.id=Math.random();
      res.push(selArr);
      selArr = [];
    }
  }
  if (selArr.length > 0) {
    selArr.id=Math.random();
    res.push(selArr);
  }
  return res;
}
let temp = transfromOwnerList(ownerList);
ownerList = ref(temp);

console.log('temp: ', unref(ownerList));


let showOwnerList = computed(()=>{
  if(showAll.value){
    console.log('unref(ownerList);: ', unref(ownerList));
    return unref(ownerList);
  }else{
    return unref(ownerList).length > 2 ? unref(ownerList).slice(0,2) : unref(ownerList);
  }
})
console.log('showOwnerList: ', showOwnerList);
let showAll = ref(false);

let selUserId = ref('');

function changeSelUserId(item) {
  selUserId.value = item.id;
}

const containerStyle = ref({
  height: `calc(100vh - 44px - ${systemInfo.statusBarHeight}px)`,
});



let borrowDays = ref('');




</script>

<template>
  <div class="page">
    <BorrowBookDialog v-model:show='borrowBookDialog' />
    <NavBar title="" />
    <scroll-view
      :show-scrollbar="false"
      enhanced
      scroll-y
      class="container"
      :style="containerStyle"
    >
      <div class="book-info">
        <div class="book-img">
          <img src="" alt="" class="img" />
        </div>
        <div class="info">
          <div class="name">神笔马良</div>
          <div class="form">
            <div class="form-item">
              <div class="label">作者：</div>
              <div class="value">洪汛涛</div>
            </div>
            <div class="form-item">
              <div class="label">类型：</div>
              <div class="value">儿童文学</div>
            </div>
            <div class="form-item">
              <div class="label">页数：</div>
              <div class="value">106</div>
            </div>
            <div class="form-item">
              <div class="label">借阅次数：</div>
              <div class="value">12</div>
            </div>
          </div>
        </div>
      </div>
      <ContentBlock>
        <div class="title">拥有此书的同学</div>
        <div class="book-owner-list">
          <div
            class="owner-group"
            v-for="(ownerGroup, groupIndex) in showOwnerList"
            :key="ownerGroup.id"
          >
            <div
              class="user-item"
              v-for="item in ownerGroup"
              :key="item.id"
              :class="[selUserId == item.id ? 'active' : '']"
              @click="changeSelUserId(item)"
            >
              <div class="avatar-wrapper">
                <img src="" alt="" class="img" />
                <img v-if="selUserId == item.id " src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/switch-user-bg.png" alt="" class='active-img'>
              </div>
              <div class="name">{{ item.name }}</div>
              <div class="class">一年级三班</div>
            </div>
          </div>
        </div>
        <div class="bottom-wrapper" v-if="ownerList.length>2">
          <div class="bottom" v-if="!showAll">
            <div class="text" @click='showAll=true'>显示全部</div>
            <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Lend-icon-Arrow.png" @click='showAll=true' alt="" class="img down" />
          </div>
          <div class="bottom" v-if="showAll">
            <div class="text" @click='showAll=false'>收起全部</div>
            <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Lend-icon-Arrow.png" alt="" class="img up" @click='showAll=false' />
          </div>
          </div>

      </ContentBlock>

      <ContentBlock>
        <div class="borrow-days">
          <div class="title">请填写借阅天数</div>
          <div class="borrow-input-wrapper">
            <input type="text" v-model="borrowDays" placeholder="请输入" class='input'  placeholder-style='font-size:13px;color:#646A6D;font-family:HYCuYuanJ'/>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock :bottomRattan='false'>
        <div class="borrow-days">
          <div class="title">精彩书评</div>

        </div>
      </ContentBlock>
      <div class="bottom-placeholder"></div>
    </scroll-view>

    <div class="btn-wrapper">
      <div class="btn" @click="borrowBook">借阅此书</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page {
  .full-screen();
  background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_1.jpg')
    0 0/100% 100% no-repeat;
  position: relative;
  .container {
    .box-size(100%,unset);
    .bottom-placeholder{
      .box-size(58.667vw,13.867vw);
    }
  }
  .book-info {
    .flex-simple(flex-start,center);
    .box-size(365px,206px);
    margin: 0 auto;
    background: url('https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/Borrow-Board.png')
      0 0/100% 100% no-repeat;
    font-size: 0px;
    padding: 40px 0 0 40px;
    .book-img {
      .box-size(91px,130px);
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/Bookreview-picture-default.png')
        0 0/100% 100% no-repeat;
      .img {
        .box-size(63px,93px,#ccc);
        border-radius: 0px;
        margin: 10px 0 0 17px;
      }
    }
    .info {
      margin-left: 20px;
      flex: 1;
      .name {
        .bold-font(18px,#3f3f3f);
      }
      .form {
        margin-top: 20px;
        .form-item {
          .flex-simple(flex-start,center);
          margin-bottom: 10px;
          .label {
            .normal-font(13px,#959797);
            .line-center(13px);
          }
          .value {
            .normal-font(13px,#646a6d);
            .line-center(13px);
          }
        }
      }
    }
  }
  .title{
    .line-center(15px);
    .bold-font(15px,#3F3F3F);
    text-indent: 25px;
  }
  .book-owner-list{
    .box-size(100%,unset);
    padding:0 25px;
    margin-top:14px;
    .owner-group{
      .box-size(100%,unset);
      .flex-simple(flex-start,center);
      margin-bottom:20px;
      .user-item{
        .box-size(calc(25% - 19.5px));
        .flex-simple(center,center);
        flex-direction: column;
        display: inline-flex;
        margin-right:23px;
        &:last-child{
          margin-right:0px;
        }
        // &.active{
        //   border:1px solid red;
        // }
        .avatar-wrapper{
          .box-size(45px,45px,#ccc);
          border-radius: 50%;
          position:relative;
          .img,{
            .box-size(45px,45px,#ccc);
            border-radius: 50%;
          }
          .active-img{
            .box-size(45px,45px);
            border-radius: 50%;
            .pos-absolute(0,0,unset,unset);
            opacity:0.5;
          }
        }

        .name{
          margin-top:7px;
          .bold-font(13px,#646A6D);
        }
        .class{
          margin-top:5px;
          .normal-font(10px,#959797);
        }
      }
    }
  }
  .bottom-wrapper{
    .box-size(100%,15px);
    .flex-simple(flex-end,center);
    padding-right:25px;
    .bottom{
      .flex-simple(flex-start,center);
      display:inline-flex;
      .line-center(15px);
      .text{
        .line-center(13px);
        .bold-font(13px,#3F3F3F);
      }
      .img{
        .box-size(15px,23px);
        margin-left:10px;
        &.down{
          transform:rotate(-90deg);
        }
        &.up{
          transform:rotate(90deg);
        }
      }
    }
  }

  .borrow-input-wrapper{
    .box-size(200px,29px,#F2D3A4);
    .line-center(29px);
    position:relative;
    margin-left:25px;
    margin-top:14px;
    border-radius:6px;
    overflow: hidden;
    &:after{
      content:"天";
      .pos-absolute(unset,0,0,unset);
      .line-center(29px);
      .normal-font(13px,#646A6D);
      padding-right:13px;
    }
    .input{
      .box-size(100%,29px);
      padding:0 20px 0 11px;

    }
  }

}

.btn-wrapper {
  .box-size(100cvw,19.2vw,rgba(0,0,0,0.51));
  .flex-simple(center,center);
  .pos-absolute(unset,0,0,0);
  z-index:10000;
  .btn {
    .box-size(58.667vw,13.867vw);
    background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-btn.png')
      0 0/100% 100% no-repeat;
    text-align: center;
    .bold-font(6.4vw,white);
    line-height: 12vw;
  }
}
</style>
