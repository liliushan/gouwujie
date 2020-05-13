import Vue from 'vue'
import Router from 'vue-router'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
let Home = () => import('views/Home/home')
let Category = () => import('views/Category/category')
let Cart = () => import('views/Cart/cart')
let Mime = () => import('views/Mime/mime')
let Detail = () => import('views/Detail/detail')
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mime',
      component: Mime
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
  ],
  mode: 'history'
})
export default router
