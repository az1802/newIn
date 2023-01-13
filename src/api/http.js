import axios from "axios";
import settle from "axios/lib/core/settle";
import buildURL from "axios/lib/helpers/buildURL.js";


// const { VITE_BASE_URL = "https://shilai.zhiyi.cn/v1.7", VITE_TIME_OUT = 10 * 1000 } = import.meta.env;
const { VITE_BASE_URL = "https://wxapi.gameedu.net/index/sharebooksapi", VITE_TIME_OUT = 10 * 1000 } = {}


// 自定义适配器来适配uniapp语法
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: config.method.toUpperCase(),
      url:
      config.baseURL +
      buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data || {},
      dataType: config.dataType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data || {},
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config,
        };
        settle(resolve, reject, response);
      },
    });
  });
};


const baseConfig = {
  baseURL: VITE_BASE_URL,
  timeout: VITE_TIME_OUT,
  headers: {
    auth:"1CeYdRxaHC2J2AIowodfOHRaD67FL1nm"
  },
}

const http = axios.create(baseConfig);

http.interceptors.response.use(function (response) {
  if (response.status==200&&response.data.code == 0) {
    return response.data.data || response.data;
  } else {
    return Promise.reject(response.data.message || "服务错误");;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 设置通用请求头
http.setHeaders = (headers) => {
  for (const key in headers) {
    http.defaults.headers[key] = headers[key];
  }
}

export default http;
