<template>
  <div class="cart">
    <Navbar>
      <div slot="center">购物车</div>
  </Navbar>
    <Scrollbar class="cartScroll" ref="cartScroll">
      <Cartlist></Cartlist>
    </Scrollbar>
    <Fullprice></Fullprice>
    <!--<Toast :mes="mes" :flag="flag"></Toast>-->
  </div>
</template>

<script>
import Scrollbar from "components/common/scrollbar/Scrollbar";
import Navbar from 'components/common/navbar/Nav'
//import Toast from "components/common/toast/Toast";
import Cartlist from './cartlist'
import Fullprice from './fullprice'
export default {
  name:'cart',
  data(){
    return {
      //mes:'',
      //flag:false
    }
  },
  components:{
    Navbar,
    Cartlist,
    Scrollbar,
    Fullprice,
    //Toast
  },
  //  不能使用mounted和created去刷新高度因为我们使用了keep-alive组件只会创建一次那么刷新的代码只会执行一次
  activated(){
    this.$refs.cartScroll.scroll.refresh()
  },
  created(){
    this.$bus.$on('jiezhuang',()=>{
      console.log('收到')
       let a = this.$store.state.shopList.filter(item=>{
        return item.isCheck ===true
      }).length
      if(a===0){
        this.$toast.show('还没有添加商品哦~~~')
      }
    })
  }
}
</script>

<style>
.cart{
  height: 100vh;
  position: relative;
}
.cartScroll{
  position: absolute;
  top: 49px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>