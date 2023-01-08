// import http from '@/api/http';


export function upperFirst(word) {
  if (!word) return word;
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}



export function cloneDeep(obj) {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      res[key] = cloneDeep(obj[key])
    } else {
      res[key] = obj[key];
    }
  }

  return res
}
export function maxBy(arr, fn) {
  let maxVal = -1, maxItem;
  arr.forEach(item => {
    if (fn(item) > maxVal) {
      maxVal = fn(item);
      maxItem = item

    }
  })

  return maxItem || '';

}
export function minBy(arr, fn) {
  let minVal = 100, minItem;
  arr.forEach(item => {
    if (fn(item) < minVal) {
      minVal = fn(item);
      minItem = item;
    }
  })
  return minItem || '';
}


export async function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export function noop() {

}
export function stop(e) {

  return false;
}

export async function showToast(msg = '', icon = 'none', duration = 1500) {
  if (!msg) return;

  return new Promise((resolve, reject) => {
    uni.showToast({
      title: msg,
      icon,
      duration,
      success() {
        resolve(true);
      },
      fail() {
        resolve(false);
      }
    })
  })
}

export async function tipSuccess(msg = '', duration = 1500) {
  return new Promise((resolve, reject) => {
    uni.showToast({
      title: msg,
      image: '/static/icon-selected.svg',
      mask: true,
      duration: duration,
      success() {
        resolve(true);
      },
      fail() {
        resolve(false);
      }
    })
  })
}

export async function showConfirmModal({ title = '', content = '', cancaelText = '取消', confirmText = "确定" }) {
  return new Promise(resolve => {
    uni.showModal({
      title,
      content,
      cancaelText,
      confirmText,
      icon: 'none',
      duration: 1500,
      success({ confirm, cancal }) {
        resolve(confirm);
      },
      fail() {
        resolve(false);
      }
    })
  })
}


export async function copyInfo(msg) {
  return new Promise((resolve, reject) => {
    uni.setClipboardData({
      data: String(msg),
      success() {
        showToast("已复制内容至剪切板")
      },
      fail() {
        showToast("复制内容至剪切板出错")
      }
    })
  })
}

export function throttle(fn, wait) {
  var isRun = false;
  return function () {
    var context = this;
    var args = arguments;
    if (!isRun) {
      isRun = true;
      setTimeout(() => {
        isRun = false;
      }, wait)
      fn.apply(context, args);
    }
  }
}




export async function makePhoneCall(phone) {
  return new Promise((resolve, reject) => {
    uni.makePhoneCall({
      phoneNumber: phone,
      success() { resolve(true) },
      fail() {
        // showToast("唤起电话失败")
        reject(false)
      }
    })
  })
}




export function duplicateRemove(...args) {
  let key = args[args.length - 1], arrs = args.slice(0, -1);
  let keyMap = {},res=[];
  arrs.forEach(arr => {
    arr.forEach((item) => {
      if (keyMap[item[key]]) {
        return;
      } else {
        keyMap[item[key]]=true
        res.push(item)
      }
    })
  })

  return res;
}



function genParamsStrs(pageOpts = {}) {
  let paramsStrs = [];
  for (let key in pageOpts) {
    paramsStrs.push(`${key}=${pageOpts[key]}`);
  }
  return paramsStrs;
}

export async function navigateTo(path, pageOpts = {}) {
  let pageStack = getCurrentPages();
  let curPage = pageStack[pageStack.length-1];
  if(!curPage || curPage&&path.indexOf(curPage.route)!==-1){
    return;
  }
  let paramsStrs = genParamsStrs(pageOpts);

  if (path) {
    return new Promise(resolve => {
      uni.navigateTo({
        url: paramsStrs.length == 0 ? path : `${path}?${paramsStrs.join("&")}`,
        success() {
          resolve(true)
        },
        fail(err) {
          console.log('err: ', err);
          resolve(false)
        }
      })
    })
  } else {
    throw new Error(`跳转路径不存在`)
  }
}

export async function redirectTo(path, pageOpts = {}) {
  let pageStack = getCurrentPages();
  let curPage = pageStack[pageStack.length-1];
  if(!curPage || curPage&&path.indexOf(curPage.route)!==-1){
    return;
  }
  let paramsStrs = genParamsStrs(pageOpts);

  if (path) {
    return new Promise(resolve => {
      uni.redirectTo({
        url: paramsStrs.length == 0 ? path : `${path}?${paramsStrs.join("&")}`,
        success() {
          resolve(true)
        },
        fail(err) {
          resolve(false)
        }
      })
    })
  } else {
    throw new Error(`跳转路径不存在`)
  }
}


export async function navigateBack(...args) {
  uni.navigateBack(...args)
}

export async function scanCode() {
 return new Promise((resolve,reject)=>{
   uni.scanCode({
    onlyFromCamera:false,
    scanType:["barCode"],
    success(res){
      console.log('res: ', res);
      if(res.errMsg=="scanCode:ok"){
        resolve(res);
      }else{
        resolve(false);
      }
    },
    fail(){
      resolve(false)
    }
   })
 })
}


// 微信默认登录
export async function wechatSignUp() {
  let codeMsg = await uni.login();
  let data = { code: codeMsg.code };
  let res = await API.User.signUp(data)
  let userId = res.id;
  if (userId) {
    uni.setStorageSync("userId", userId);
    // http.setHeaders({
    //   userId
    // })
  }
}