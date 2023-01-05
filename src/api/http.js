import axios from "axios";
import settle from "axios/lib/core/settle";
import buildURL from "axios/lib/helpers/buildURL.js";
import { uploadLogRecord } from './log'
// const { VITE_BASE_URL = "https://shilai.zhiyi.cn/v1.7", VITE_TIME_OUT = 10 * 1000 } = import.meta.env;
const { VITE_BASE_URL = "https://test.shilai.zhiyi.cn/v1.6", VITE_TIME_OUT = 10 * 1000 } = {}


// 自定义适配器来适配uniapp语法
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: config.method.toUpperCase(),
      url:
        config.baseURL +
        buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
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

  },
}

const http = axios.create(baseConfig);

http.interceptors.response.use(function (response) {
  // 此处可以查看url 做响应的数据埋点,日志记录
  // TODO 根据不同的status对数据做不同的处理 然后返回.
  if (response.data.errcode == 0) {
    return response.data.data || response.data;
  } else {
    return Promise.reject(response.data.errmsg || "服务错误");;
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
