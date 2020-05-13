import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {store} from './store/index'
import toast from './components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
//  创建事件总线
Vue.prototype.$bus = new Vue()
Vue.use(element)
Vue.use(toast)
//  fastclick.attach()解决移动端点击元素延迟300毫秒才执行点击事件的特性
fastclick.attach(document.body)
//  使用图片懒加载
Vue.use(VueLazyLoad,{
  //  vue中的js引入图片，必须require进来 或者引用网络地址
  loading: require('./assets/img/1.jpg')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
