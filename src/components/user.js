// import http from './http';


export async function login(data) {
  // let res = await http.post("/login", data);
  return {};
}

// 非授权登录
export async function signUp(data){
  let res = await http.post("signUp", data);
  console.log('res: ', res);
  return res;


  return {
    id: "123"
  }
}

export async function getUserInfo(){


  return {
    identity:"student"
  }
}