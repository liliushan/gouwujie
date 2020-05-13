<template>
  <div class="cart-list">
    <Cartlistitem v-for="item in list" :item="item"></Cartlistitem>
  </div>
</template>

<script>
import Cartlistitem from './cartlistitem'
export default {
  data(){
    return {
      list: this.$store.state.shopList
    }
  },
  components:{
    Cartlistitem
  }
 
}
</script>

<style>
.cart-list ul{
  list-style: none;
}
</style>