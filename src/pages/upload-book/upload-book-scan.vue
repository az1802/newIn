<script>
let opts;
export default {
  onLoad(options) {
    console.log('options: ', options);
    opts = options || {};
  }
}
</script>

<script setup >
import { ref, unref, onBeforeMount } from "vue";
import { scanCode, showToast, navigateTo } from '@utils/wechat';
import API from "@/api/index";

let isbnCode = ref("")


onBeforeMount(() => {
  console.log('opts: ', opts);

  if (opts?.scanCode) {
    isbnCode.value = opts.scanCode;
  }
})


async function scanIsbn() {
  try {
    let res = await scanCode();
    if (res) {
      // if(res&&res.scanType=="EAN_13"){
      isbnCode.value = res.result;

    } else {
      showToast("ISBN码识别错误")
    }
  } catch (err) {
    showToast("ISBN码识别错误")
  }
}

// 查询书本信息
async function queryIsbn() {
  console.log(unref(isbnCode));


  let userInfo = uni.getStorageSync("userInfo")
  console.log('userInfo: ', userInfo);

  uni.showLoading();
  let res = await API.Book.scanIsbn({
    params: {
      school_id: userInfo.school_id,
      student_id: userInfo.student_id,
      isbn: unref(isbnCode),
    }
  })

  res&&(uni.setStorageSync("isbnBookInfo",res));
  uni.hideLoading();

  navigateTo("/pages/upload-book/upload-book-info");
}

</script>

<template>
  <div class='page'>
    <NavBar title='扫描图书' />
    <img src="https://sunj-share.oss-cn-shenzhen.aliyuncs.com/bg_toolbar.png" class="bg-top" />
    <input type="text" v-model='isbnCode' class="isbn-input" placeholder='请输入ISBN条形号'
      placeholder-style='font-size:15px;color:##959797;font-family:HYCuYuanJ;font-weight:bold'>
    <div class="btn" @click='queryIsbn'></div>
    <div class="scan-code" @click='scanIsbn'>切换扫条形码</div>
    <!-- <div>isbn码结果:{{isbnCode}}</div> -->
  </div>
</template>

<style lang="less" scoped>
@import '@static/index.less';

.page {
  .full-screen();
  background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/bg_activity_2.jpg") 0 0/100% 100% no-repeat;
  position: relative;
  text-align: center;

  .bg-top {
    .box-size(100vw, 23.88vw);
    .pos-absolute(0, 0, unset, unset);
  }

  .isbn-input {
    .box-size(258px, 43px, white);
    display: inline-block;
    border-radius: 8px;
    line-height: 43px;
    margin: 50px auto 0 auto;
    text-align: left;
    padding-left: 17px;
  }

  .btn {
    .box-size(110px, 39px);
    line-height: 36px;
    margin: 50px auto 0 auto;
    background: url("https://sunj-share.oss-cn-shenzhen.aliyuncs.com/imgs/scan-code-btn.png") 0 0/100% 100% no-repeat;
    .bold-font();
  }

  .scan-code {
    .box-size(100px, 31px);
    border-radius: 16px;
    line-height: 31px;
    margin: 50px auto 0 auto;
    text-align: center;
    .bold-font(13px, white);
    border: 1px solid white;
  }
}</style>