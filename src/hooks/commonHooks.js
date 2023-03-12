export function useSystemInfo() {
  let systemInfo = uni.getSystemInfoSync();
  return {
    statusBarHeight:systemInfo.statusBarHeight,
    screenWidth: systemInfo.screenWidth,
    screenHeight: systemInfo.screenHeight,
  };
}