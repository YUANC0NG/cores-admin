import axios from "axios";
import { history } from "umi";

const request = axios.create({
  baseURL: "/api", // 设置基础URL
  timeout: 10000, // 设置超时时间
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 424) {
      // 如果是424错误，跳转到登录页
      history.push("/login");
    }
    return Promise.reject(error);
  }
);

export default request;
