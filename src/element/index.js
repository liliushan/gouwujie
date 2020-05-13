import {Button,Carousel,CarouselItem} from 'element-ui'

let element = {
  install:function(Vue){
    Vue.use(Button)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    }
  }
export default element