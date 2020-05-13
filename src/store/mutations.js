/*
  mutations里面的方法只做单一的事件，比如只修改商品数量,将商品添加到购物车
*/
import Vue from 'vue'
export default {
  addCar(state,payload){
    Vue.set(payload,'count',1)  //  添加一个属性
    Vue.set(payload,'isCheck',false)
    Vue.set(state.shopList,state.shopList.length,payload)
  },
  addCount(state,res){
    //  商品数量加1
    res.count++
  }
}