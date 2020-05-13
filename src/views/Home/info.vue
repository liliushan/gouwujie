<template>
    <ul class="info">
      <li class="info-item" v-for="(item,index) in recommendList" :key="index">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </li>
    </ul>
</template>

<script>
export default {
  props:{
    recommendList:Array
  }
};
</script>

<style>
.info{
  display: flex;
  height: 100px;
  list-style: none;
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
}
.info-item{
  flex: 1;
  height: 100px;
  text-align: center;
}
.info-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
}
</style>