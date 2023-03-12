/*
 * @Author: sunjie
 * @Date: 2022-02-08 14:33:59
 * @LastEditors: sunj
 * @LastEditTime: 2022-02-10 16:45:48
 * @FilePath: /new-fanpiao-uniapp/src/api/index.js
 */
// 将所有的接口请求都通过这个统一输出

import * as  User from "./user";
import * as  Book from "./book";
const API = {
  User,
  Book
}

export default API;