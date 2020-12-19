import Vue from 'vue'
import App from './App'

//导入axios框架
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})


/* axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
axios.all([axios({
  url: '/home/multidata'
}),axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))
 */
/* axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
}) */

//创建对应实例
/* const instance1 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout:  5000
})

instance1({
  url: '/home/multidata',
}).then(res =>{
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res =>{
  console.log(res);
})
 */

//封装request模块
import {request} from './network/request.js'

/* 第一种 */
/* request({
  url: '/home/multidata'
},res => {
  console.log(res);
},err => {
  console.log(res);
}) */

/* 第二种 */
/* request({
  baseConfig: {

  },
  success: function(res) {

  },
  failure: function(err) {

  }
}) */

/* 第三种\第四种 */
request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err => {
  console.log(err);
})