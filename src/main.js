import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'



import axios from 'axios'
import VueAxios from 'vue-axios'

// vant组件库模块引入
import Vant from 'vant';  
import 'vant/lib/index.css';  

Vue.use(NavBar).use(Search).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Toast).use(Form).use(Field).use(Button).use(Popip);



// 设置Vue原型属性
Vue.prototype.appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA='

// 配置axios默认请求地址
axios.defaults.baseURL = 'http://www.kangliuyong.com:10002'
//axios拦截器 在请求之前执行
axios.interceptors.request.use(config =>{
  //处理post请求
  if(config.method=='post'){
    //序列化post请求参数
    let parmasString = '';
    for(let key in config.data){
      parmasString += `${key}=${config.data[key]}&`
    }
    config.data = parmasString.slice(0,-1);
  }

  return config;

})

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
