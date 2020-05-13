<template>
  <tabbar>
      <tabbaritem path="/home">首页</tabbaritem>
      <tabbaritem path="/category">分类</tabbaritem>
      <tabbaritem path="/cart">购物车</tabbaritem>
      <tabbaritem path="/mime">我的</tabbaritem>

    </tabbar>
</template>

<script>
import  tabbar from '../common/tabbar/Tabbar'
import tabbaritem from '../common/tabbar/Tabbaritem'
export default {
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style>

</style>