<script setup >
import {ref,reactive} from "vue";
import {showToast} from '@utils/wechat';

const bookInfo = reactive({
  url:"",
  isbn:"123",
  pageNum:20,
  type:"aa",
  evaluate:""

})


async function uploadBook (){
  console.log(bookInfo)
}


</script>

<template>
  <div class='page'>
    <NavBar title='上传图书' />
    <div class="bg-top-wrapper">
        <TopCloud />
    </div>
    <div class="form-wrapper">
      <div class="form-item">
        <div class="label">封面:</div>
        <div class="value">
          <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-carema.png" alt="" class='upload-img'>
        </div>
      </div>
      <div class="form-item">
        <div class="label">ISBN:</div>
        <div class="value">
          <input class='input' v-model='bookInfo.isbn' type='text' placeholder='请输入ISBN' placeholder-style='font-size:15px;color:#959797;font-family:HYCuYuanJ'/>
        </div>
      </div>
      <div class="form-item">
        <div class="label">页数:</div>
        <div class="value">
          <input class='input' v-model='bookInfo.pageNum' type='text' placeholder='请输入页数' placeholder-style='font-size:15px;color:#959797;font-family:HYCuYuanJ'/>
        </div>
      </div>
      <div class="form-item">
        <div class="label">类型:</div>
        <div class="value">
          <input class='input' v-model='bookInfo.type' type='text' placeholder='请选择图书类型' placeholder-style='font-size:15px;color:#959797;font-family:HYCuYuanJ'/>
        </div>
      </div>
      <div class="form-item">
        <div class="label" style="align-self:flex-start">书评:</div>
        <div class="value">
          <textarea  class='text-area' v-model='bookInfo.evaluate'  maxlength='200' placeholder='请输入书评' placeholder-style='font-size:15px;color:#959797;font-family:HYCuYuanJ'></textarea>
          <div class='word-tooltip'>{{bookInfo.evaluate.length}}/200</div>
        </div>
      </div>
    </div>

    <div class="btn-wrapper">
      <div class="btn" @click='uploadBook'>上架此图书</div>
    </div>

  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';
.page{
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position:relative;
  .bg-top-wrapper{
    .pos-absolute(0,0,unset,0);
    z-index:0;
  }
  .form-wrapper{
    margin:16vw auto 0 auto;
    .box-size(345px,442px);
    background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-form-background.png") 0 0/100% 100% no-repeat;
    padding: 30px 0;
    .form-item{
      .flex-simple(flex-start,center);
      margin:0 0 18px 0;
      .label{
        text-align: right;
        .normal-font(15px,#3F3F3F);
        .line-center(15px);
        flex-basis: 72px;
        width:72px;
      }
      .value{
        height:unset;
        padding-left:20px;
        box-size:box-sizing;
        flex:1;
        position: relative;
        .upload-img{
          .box-size(87px,94px);
        }
        .text-area{
          .box-size(214px,140px);
          border:1px solid #D5D5D5;
          border-radius: 4px;
          padding:2px;
        }
        .word-tooltip{
          .box-size(214px,12px);
          .pos-absolute(unset,unset,6px,20px);
          .normal-font(12px,#1D1D1D);
          z-index:100;
          text-align: right;
          padding-right:6px;
        }
        // .input{
        //   .line-center(15px);
        //   .normal-font(15px,#3F3F3F);
        // }

      }
    }
  }
  .btn-wrapper{
    .box-size(100cvw,19.2vw,rgba(0,0,0,0.51));
    .flex-simple(center,center);
    .pos-absolute(unset,0,0,0);
    .btn{
      .box-size(58.667vw,13.867vw);
      background:url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/upload-book-btn.png") 0 0/100% 100% no-repeat;
      text-align:center;
      .bold-font(6.4vw,white);
      line-height:12vw;
    }
  }

}
</style>