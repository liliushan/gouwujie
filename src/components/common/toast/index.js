import Toast from './Toast.vue'
let obj = {

}
obj.install =Vue=>{
  //  创建组件构造器,组件构造器其实是一个构造函数,可以用new 创建组件并且组件拥有传入的所有参数
  let construcor = Vue.extend(Toast)
  //  创建一个组件对象
  let  toast = new construcor()
  //  因为toast最终是显示在页面上的因此需要将对象挂在到元素上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
  
}

export default obj