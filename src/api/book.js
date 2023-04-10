import { showToast } from '../utils/wechat';
import http from './http';


// isbn扫码查询 scanIsbn
export async function scanIsbn(params){
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
    showToast(res?"上架图书成功":"上架图书失败");
    return res;
  }catch(err){
    console.log('err: ', err);
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
export async function getBookListByCategory(params){
  try{
    let res = await http.get("/getAllBookList",params);
    return res;
  }catch(err){
    console.log('err: ', err);
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


export async function getBookParentConfirm(params){
  try{
    let res = await http.get("/getBookParentConfirm",params);
    showToast(res ? "家长确认成功" :"家长确认失败");
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}

export async function getLentBookDetail(params){
  try{
    let res = await http.get("/getLentBookDetail",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



export async function getLentCancel(params){
  try{
    let res = await http.get("/getLentCancel",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getLentAgree(params){
  try{
    let res = await http.get("/getLentAgree",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}




export async function getLentRefuse(params){
  try{
    let res = await http.get("/getLentRefuse",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getLentRefuse2(params){
  try{
    let res = await http.get("/getLentRefuse2",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}
export async function getMyLibraryBookInfo(params){
  try{
    let res = await http.get("/getMyLibraryBookInfo",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}
export async function getMyBookOffShelf(params){
  try{
    let res = await http.get("/getMyBookOffShelf",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}


export async function getMyBookOnShelf(params){
  try{
    let res = await http.get("/getMyBookOnShelf",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}
