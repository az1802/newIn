import { showToast } from '../utils/wechat';
import http from './http';


export async function login(data) {
  // let res = await http.post("/login", data);
  return {};
}

// 非授权登录
export async function signUp(data){
  // let res = await http.post("signUp", data);
  // return res;


  return {
    id: "123"
  }
}

export async function bindUser(config){
  try{
    let res = await http.get("/bindingUser", config);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}

export async function getUserInfo(){

  return {
    identity:"student"
  }
}