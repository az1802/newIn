import { showToast } from '../utils/wechat';
import http from './http';


export async function login(data) {
  let res = await http.post("/login", data);
  return {};
}

// 非授权登录
export async function signUp(data){
  let res = await http.post("signUp", data);
  return res;


  return {
    id: "123"
  }
}

export async function bindUser(params){
  try{
    let res = await http.get("/bindingUser", params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function addBindUser(params){
  try{
    let res = await http.get("/addBindingUser", params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}

export async function getBindUserlist(params){
  try{
    let res = await http.get("/getUserTypeList",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}

export async function switchCurBindUser(params){
  try{
    let res = await http.get("/switchIdentity",params);
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


export async function unbinding(params){
  try{
    let res = await http.get("/unbinding",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function updateUserInfo(params){
  try{
    let res = await http.get("/updateUserInfo",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function changeStudentPass(params){
  try{
    let res = await http.get("/changeStudentPass",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}

export async function getBanjiRanking(params){
  try{
    let res = await http.get("/getBanjiRanking",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getMessage(params){
  try{
    let res = await http.get("/getMessage",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function getMyScore(params){
  try{
    let res = await http.get("/getMyScore",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function getMyCreditScore(params){
  try{
    let res = await http.get("/getMyCreditScore",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}





export async function getMyLibrary(params){
  try{
    let res = await http.get("/getMyLibrary",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getSwitchMylibraryTheme(params){
  try{
    let res = await http.get("/getSwitchMylibraryTheme",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}




export async function getMyBorrowList(params){
  try{
    let res = await http.get("/getMyBorrowList",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}





export async function getMyLentList(params){
  try{
    let res = await http.get("/getMyLentList",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}
