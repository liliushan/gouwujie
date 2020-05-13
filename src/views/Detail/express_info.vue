<template>
  <ul class="express_info">
    <li v-for="(item,index) in detailData.services" v-if="index>1">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
props:{
  detailData:Object
}
}
</script>

<style>
.express_info{
  margin-top: 15px;
  padding: 10px;
  display: flex;
  list-style: none;
  border-bottom: 1px solid #9999994f;
  line-height: 30px;
  height: 30px;
}
.express_info li{
  flex: 1;

}
.express_info li:nth-child(2){
  text-align: center;

}
.express_info li:nth-child(3){
  text-align:right;

}
</style>