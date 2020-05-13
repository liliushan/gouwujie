<template>
  <div class="full-price">
    <div class="checkall">
      <input type="checkbox" :checked="xianshi" @click="quanxuan">
    </div>
    <div class="zongjia">合计￥{{fullprice}}</div>
    <div class="qujisuan" @click="jiezhuang">去计算({{fullcount}})</div>

  </div>
</template>

<script>

export default {
  data(){
    return {
      fullprice:0,
      fullcount:0,
      xianshi:false,
    }
  },
  components:{
  
  },
  created(){
    //  监听priceCd事件接收商品的总价和商品的数量
    this.$bus.$on('priceCd',(sum,check_length)=>{
      this.fullprice = sum
      this.fullcount = check_length
    }),
    //  接收全选按钮控制状态
    this.$bus.$on('isxianshi',(xianshi)=>{
      this.xianshi = xianshi
    })
  },
  methods:{
    //  全选功能
    quanxuan(){
      //  点击全选让状态取反
      this.xianshi = !this.xianshi
      for(let i = 0; i<this.$store.state.shopList.length;i++){
        //  让小按钮的状态和全选状态同步
        this.$store.state.shopList[i].isCheck = this.xianshi
      }
      //  将全选状态发出去
      this.$bus.$emit('test',this.xianshi)
      
    },
    jiezhuang(){
      this.$bus.$emit('jiezhuang')
    }
  }
}
</script>

<style>
.full-price{
  width: 100%;
  height: 49px;
  background-color:#eee;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  line-height: 49px;
}
.full-price .checkall{
  flex: 1;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.full-price .checkall input{
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.full-price .zongjia{
  flex: 3;
    text-align: center;
}
.full-price .qujisuan{
  flex: 2;
  text-align: center;
  background-color: darkorange;
  color: aliceblue;
}

</style>