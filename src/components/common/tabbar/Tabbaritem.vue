<template>
  <div class="tab-bar-item" @click="toggle" :style='activeColor'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String, 
    color:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      //  每次使用组件的时候都传入path  $route.path获取的是当前活跃的路由
      return this.$route.path === this.path 
    },
    activeColor(){
      return this.isActive ? {color:this.color} : {}
    }
  },
  methods: {
    toggle() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
}
</style>