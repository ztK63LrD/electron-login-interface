// 统一管理我们项目用户的相关接口
import http from '@renderer/utils/http'
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
}

// 登录接口的方法
export const reqLogin = (data: any) =>
  http.post<any, any>(API.LOGIN_URL, data)
 
