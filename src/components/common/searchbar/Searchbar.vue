<template>
    <div class="search">
    <div v-for="(item,index) in titleList" :key="index" :class="{active1:num===index}" @click="isActive1(index),tabToggle(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num:0
    }
  },
  methods:{
    isActive1(index){
      this.num = index
    },
    tabToggle(index){
      this.$emit('tabToggle',index)
    }
  },
  props:{
    titleList:Array
  },
}
</script>

<style>

.search{
  margin-top: 10px;
  height: 40px;
  display: flex;
  color:#333;
  line-height: 40px;
  text-align: center;
  background-color:#fff;
  z-index: 5;
  width: 100%;
}
.search div{
  flex: 1;
}
.active1{
  color: pink;
  position: relative;
}
.active1::after{
  content: "";
  background-color: pink;
  width: 60px;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>