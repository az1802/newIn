export function useSystemInfo() {
  let systemInfo = uni.getSystemInfoSync();
  console.log('systemInfo: ', systemInfo);
  return {
    statusBarHeight:systemInfo.statusBarHeight,
    screenWidth: systemInfo.screenWidth,
    screenHeight: systemInfo.screenHeight,
  };
}