<template>
  <div class="detail_info">
    <section class="detailDesc">{{detailData.detailDesc}}</section>
    <p class="detailKey">{{detailData.detailKey}}</p>
    <ul class="detail_show">
      <li v-for="(item,index) in detailData.detailList">
        <img :src="item" alt="" @load="detailImgLoad">
      </li>
    </ul>
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
  },
  methods:{
    detailImgLoad(){
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style>
.detail_info{
  padding: 10px;
  color:#555;
  font-size: 16px;
  margin-top: 10px;
  background-color: #fff;
}
.detailDesc{
  text-indent: 2em;
}
.detailKey{
  margin: 15px 0;
    text-indent:0;
    font-size: 20px;
    color: pink;
}
.detail_show{
  list-style: none;
  width: 100%;
}
.detail_show li{
  margin-bottom: 5px;
}
.detail_show img{
  width: 100%;
  vertical-align: middle;
}
</style>