<template>
  <div class="goods-bar" ref="goodsbar">
    
  <Goodsbaritem v-for="(item,index) in goodsList" :item="item"></Goodsbaritem>

  </div>
</template>

<script>
import Goodsbaritem from './Goodsbaritem'
export default {
  props:{
    goodsList:Array,
    default(){
      return []
    }
  },
  components:{
    Goodsbaritem,
  },

}
</script>

<style scoped>
.goods-bar{
  width: 354px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-top: 15px;
  background-color: #fff;
}
</style>