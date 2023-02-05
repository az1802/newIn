<script setup >
  import {ref }  from "vue"

  const bookDetail = ref({
    name:"",
    author:"",
    owners:[],
    pingjia:[]
  })


  function borrowBook(){
    console.log("借阅次数")
  }


  let ownerList = [];

  let borrowDays = ref('');


  function transfromOwnerList(list){
    let selArr = [],res=[];
    for(let i= 0 ; i<list.length;i++){
      selArr.push(list[i]);
      if((i+1)%4==0){
        res.push(selArr);
        selArr = [];
      }
    }
    if(selArr.length>0){
      res.push(selArr);
    }
    return res;
  }

  let showOwnerList = ref(transfromOwnerList(ownerList));
  let showAll = ref(false);


  let selUserId = ref('');

  function changeSelUserId(item){
    selUserId.value = item.id;
  }

</script>

<template>
  <div class='page'>
    <NavBar title='' />
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
            <div class="label">借阅次数</div>
            <div class="value">12</div>
          </div>
        </div>
      </div>
    </div>

    <div class='book-owner-list'>
      <div class="own-list">
        <div class="owner-group" v-for='(ownerGroup,index) in showOwnerList' :key='index'>
          <div class="user-item" v-for='item in ownerGroup' :key='item.id' :class='[selUserId==item.id ? "active" :""]' @click='changeSelUserId(item)'>
            <img src="" alt="" class='img'>
            <div class="name">{{item.name}}</div>
            <div class="class">一年级三班</div>
          </div>
        </div>
      </div>
    </div>

    <div class='borrow-days'>
      <div class="title">请填写借阅天数</div>
      <div class="input-wrapper">
        <input type="text" v-model='borrowDays' placeholder='借阅天数' />
      </div>
    </div>

    <div class="btn-wrapper">
      <div class="btn" @click="borrowBook">借阅此书</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_1.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .book-info {
    .flex-simple(flex-start,center);
    .box-size(365px,185px);
    margin:0 auto;
    background: url("https://shilai-images.oss-cn-shenzhen.aliyuncs.com/staticImgs/package-static/package-payment/buyFanpiao/Borrow-Board.png") 0 0/100% 100% no-repeat;
    .book-img {
      .box-size(96px,131px);
      background: url('https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/yellow-book-bg.png')
        0 0/100% 100% no-repeat;
      .img {
        .box-size(70px,93px,#ccc);
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
        margin-top: 30px;
        .form-item {
          .flex-simple(flex-start,center);
          margin-bottom: 10px;
          .label {
            .normal-font(13px,#959797);
          }
          .value {
            .normal-font(13px,#646a6d);
          }
        }
      }
    }
  }
}

.btn-wrapper {
  .box-size(100cvw,19.2vw,rgba(0,0,0,0.51));
  .flex-simple(center,center);
  .pos-absolute(unset,0,0,0);
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