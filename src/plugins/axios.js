import Vue from 'vue';
import axios from 'axios';
import vm from '../main'
// Add a request interceptor
//添加一个请求的拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //设置通用请求头
    //设置通用baseUrl http://api.douban.com
    //强制设置提交方式 post
    //config === 配置    //axios({配置})
    //config.headers ={'x-Requested-with':'XMLHttpRequest'}

    //修改bLoading = true
    vm.bLoading = true;

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
//添加一个响应的拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    //修改bLoading = false
    vm.bLoading = false;
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

Vue.prototype.axios = axios;//实例属性
window.axios = axios;//全局API

export default axios;