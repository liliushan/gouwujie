<template>
  <div class="nav-bar">
    <div class="nav-right"><slot name="right"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-left"><slot name="left"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  width: 100%;
  height: 49px;
  background-color: pink;
  line-height: 49px;
  box-shadow: 0 2px 2px rgba(0, 9, 0,.2);
}
.nav-right{
  width: 25%;
  height: 49px;
  float: left;
}
.nav-center{
  width: 50%;
  height: 49px;
  float: left;
  font-size: 24px;
  color: #fff;
  text-align: center;
}
.nav-left{
  width: 25%;
  height: 49px;
  float: left;
}
</style>