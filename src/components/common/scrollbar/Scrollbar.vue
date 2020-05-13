<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      scroll:'',
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:true //  开启下拉加载更多的功能
    })
    this.scroll.on('scroll',position=>{
      //  发送自定义事件让父组件可以获取到滚动的距离,利用这个距离控制元素是否显示和隐藏
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      //  下拉加载更多事件
      this.$emit('uploadMore')
    })
  }
}
</script>

<style scoped>
</style>