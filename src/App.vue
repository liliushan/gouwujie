<template>
  <div id="app">
    <Fulltabbar></Fulltabbar>
    <!-- exclude必须配合组件的name属性才生效 -->
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import  Fulltabbar from './components/content/Fulltabbar'
export default {
  name: 'App',
  components: {
    Fulltabbar,
  }
}
</script>

<style scoped>
@import "./assets/css/base.css";
@import "./assets/css/font/iconfont.css";

</style>
