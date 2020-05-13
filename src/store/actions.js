/*
  actions里面做复杂的逻辑处理和异步操作
  context其实就是store对象
*/

export default {
  addShop(context, payload) {
    return new Promise((resolve, reject) => {
      let res = context.state.shopList.find(item => item.iid === payload.iid)
      if (res) {
        context.commit('addCount', res)
        resolve('商品数量+1')
      } else {
        context.commit('addCar', payload)
        resolve('添加购物车成功')
      }
    })
  }
}