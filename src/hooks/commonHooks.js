import {ref,unref,watchEffect,watch} from "vue";

export function useSystemInfo() {
  let systemInfo = uni.getSystemInfoSync();
  return {
    statusBarHeight:systemInfo.statusBarHeight,
    screenWidth: systemInfo.screenWidth,
    screenHeight: systemInfo.screenHeight,
  };
}



export function useScrollRequest(options={}){

  let lowerThreshold = ref(options.lowerThreshold || 100);
  let pageInfo = ref(
    options.pageInfo || {
      page:1
    }
  )
  let isRequest = ref(false);

  async function requestMore(){
      await request();
  }



  async function request(){
    if(unref(isRequest)){
    return ;
    }

    isRequest.value = true;

    await options.request();


    isRequest.value = false;

  }



  return {
    lowerThreshold,
    requestMore,
    request


  }

}