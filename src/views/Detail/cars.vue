<template>
  <div class="cars">
    <span>客户</span>
    <span>店铺</span>
    <span @click="addCar">加入购物车</span>
    <span>购买</span>
  </div>
</template>

<script>
export default {
  methods:{
    addCar(){
      this.$emit('addCar')
    }
  }
}
</script>

<style>
.cars{
  width: 100%;
  height: 59px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right:0 ;
  display: flex;
  font-size: 16px;
  line-height: 59px;
  text-align: center;
}
.cars span:nth-child(1){
  flex: 1;
}
.cars span:nth-child(2){
  flex: 1;
}
.cars span:nth-child(3){
  flex: 2;
  color: #fff;
  background-color:  khaki;
}.cars span:nth-child(4){
  flex: 2;
   background-color: pink;
   color: #fff;
}

</style>