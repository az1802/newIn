import { showToast } from '../utils/wechat';
import http from './http';


// isbn扫码查询 scanIsbn
export async function scanIsbn(params){
  console.log('params: ', params);
  try{
    let res = await http.get("/scanIsbn",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


// 获取图书一级分类 getBookCategory
export async function getBookCategory(params){
  try{
    let res = await http.get("/getBookCategory",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getBookCategory2(params){
  try{
    let res = await http.get("/getBookCategory2",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function postBooksReview(params){
  try{
    let res = await http.post("/postBooksReview",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function manuallyUploadBooks(params){
  try{
    let res = await http.get("/manuallyUploadBooks",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getAllBookList(params){
  try{
    let res = await http.get("/getAllBookList",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function getBookListCategory(params){
  try{
    let res = await http.get("/getBookListCategory",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function getBookDetail(params){
  try{
    let res = await http.get("/getBookDetail",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getBorrowBook(params){
  try{
    let res = await http.get("/getBorrowBook",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}




export async function getPersonalBookList(params){
  try{
    let res = await http.get("/getPersonalBookList",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}