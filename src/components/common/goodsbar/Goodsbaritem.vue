<template>
  <div class="goods-bar-item" ref="goodsbaritem" @click="todetail">
    <img v-lazy="item.show.img"  @load="imgLoad" alt />
    <div>
      <p>{{item.title}}</p>
      <span>{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods:{
  imgLoad(){
  // load事件可以在元素加载完成后回调
  //  事件总线用于管理事件,可以看成将多个组件联系在一起的桥梁
  if(this.$route.path.indexOf('/home')){
    this.$bus.$emit('homeImgLoad')
  }else if(this.$route.path.indexOf('/detail')){
    this.$bus.$emit('detailImgLoad')
  }
},
todetail(){
  this.$router.push('/detail/' + this.item.iid)
}
  }
}
</script>

<style scoped>
.goods-bar-item {
  float: left;
  width: 50%;
  font-size: 12px;
  height: 307px;
  padding: 5px;
  box-sizing: border-box;
}
.goods-bar-item div {
  height: 20%;
  background-color: #fff;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
}
.goods-bar-item p {
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-bar-item img {
  width: 100%;
  height: 80%;
  vertical-align: middle;
  border-radius: 5px;
}
.goods-bar-item span {
  margin: 0 5px;
  color: pink;
}
</style>