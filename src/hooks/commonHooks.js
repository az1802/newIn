export function useSystemInfo() {
  let systemInfo = uni.getSystemInfoSync();
  return {
    statusBarHeight:systemInfo.statusBarHeight
  };
}