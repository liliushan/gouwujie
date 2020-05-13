<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tab-bar {
  box-shadow: 0 -1px 2px rgba(0, 9, 0,.2);
  
  width: 100%;
  display: flex;
  background-color: pink;
  height: 49px;
  line-height: 49px;
  text-align: center;
  position: fixed;
  bottom: 0;
  color: #fff;
  z-index: 3;
}
</style>