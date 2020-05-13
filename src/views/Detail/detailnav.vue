<template>
  <div class="detail-nav">
    <div class="detail-nav-right">
      <div @click="goback"> < </div>
    </div>
    <div class="detail-nav-center">
      <div v-for="(item,index) in navtitle" :class="{active_detail_nav:index===current}" @click="editcurrent(index)">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navtitle:['商品','参数','评论','推荐'],
      current:0
    }
  },
  methods:{
    editcurrent(index){
      this.current = index
      this.$emit('diantidaohang',index)
    },
    goback(){
      this.$router.back()
    }
  }
};
</script>

<style>
.detail-nav {
  height: 49px;
  background-color: #fff;
  line-height: 49px;
  font-size: 18px;
  display: flex;
  text-align: center;
  position: relative;
  z-index: 11;

}
.detail-nav-right{
  width: 20%;
}
.detail-nav-right div{
  font-size: 30px;
}
.detail-nav-center{
  width: 70%;
  display: flex;
}
.detail-nav-center div{
  flex: 1;
}
.active_detail_nav{
  color: pink;
}
</style>