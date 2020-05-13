<template>
  <div class="business">
    <div class="business-logo">
      <img :src="detailData.shopLogo" alt="">
    </div>
    <div class="business-name">{{detailData.shopName}}</div>
    <div class="business-score">
      <div class="left">
        <div class="xiaoliang">
          <span>{{detailData.shopCsells}}</span>
          <span>总销量</span>
        </div>
        <div class="shop_num">
          <span>{{detailData.shopGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <div v-for="item in detailData.shopScore">{{item.name}} <span>{{item.score}}</span> </div>
      </div>
    </div>
    <div class="go_business">进店逛逛</div>
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

<style>
.business{
  overflow: hidden;
  color: #666;
}
.business-logo{
  width: 60px;
  height: 60px;
  padding: 10px;
  margin-top: 5px;
  overflow: hidden;
  float: left;
}
.business-logo img{
  width: 100%;
  height: 100%; 
    border-radius: 50%;
        vertical-align: middle;
}
.business-name{
  float: left;
  height: 80px;
  line-height:80px;
  font-size: 20px;
  margin-left: 10px;
}
.business-score{
  width: 100%;
  display: flex;
  padding: 10px;
}
.business-score .left{
  flex: 1;
  display: flex;
}
.business-score .right{
  flex: 1;
}
.xiaoliang,.shop_num{
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.xiaoliang span:nth-child(2),.shop_num span:nth-child(2){
  margin-top: 10px;
  font-size: 18px;
}

.business-score .right div{
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 18px;
  margin-top: 10px;
}
.business-score .right span{
  margin-left: 12px;
}
.business-score .right span:nth-child(1){
  color: yellowgreen;
}
.go_business{
  width: 180px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #c3c3c3;
  border-radius: 10px;
  color: #fff;
  margin: 5px auto ;
  
}
</style>