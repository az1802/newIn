
import { showToast } from '../utils/wechat';
import http from './http';

export async function getRanking(params){
  try{
    let res = await http.get("/index/sharebooksapi/getRanking",params);
    return res;
  }catch(err){
    showToast(err);
  }
  return false;
}



 export async  function getBookCategoryAll(params){
  try{
    let res = await http.get("/index/sharebooksapi/getBookCategoryAll",params);
    return res;
  }catch(err){
    console.log('err: ', err);
    showToast(err);
  }
  return false;
 }