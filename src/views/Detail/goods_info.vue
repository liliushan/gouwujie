<template>
  <div class="goods_info">
    <div class="title">{{detailData.title}}</div>
    <div class="price">
      <span>{{detailData.lowNowPrice}}</span>
      <span>{{detailData.oldPrice}}</span>
      <span>{{detailData.discount}}</span>
    </div>
    <div class="express">
      <span v-for="item in detailData.columns">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailData:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 18px;
  color: #333;
  text-indent: 2em;
  padding: 10px;
}
.price{
    padding:10px;
    font-size: 16px;
    position: relative;
}

.price span:first-child{
  color: pink;
  font-size: 26px;
  margin-right: 15px;
}
.price span:nth-child(2){
  text-decoration: line-through;
  margin-right: 5px;
} 
.price span:nth-child(3){
  display: inline-block;
  width: 60px;
  height: 20px;
  color: #fff;
  background: linear-gradient(to right, red , yellow);
  text-align: center;
  line-height: 20px;
  position: absolute;
  left: 50%;
  top: 10px;
  border-radius: 8px;
  margin-left: 5px;
} 
.express{
  display: flex;
  text-align: left;
  line-height: 30px;
  padding: 10px;
  font-size: 16px;
  color: #666;
  border-bottom: 1px solid #9999994f;
}
.express span{
  flex: 1;
}
.express span:nth-child(2){
  text-align: center;
}
.express span:nth-child(3){
  text-align: right;
}


</style>