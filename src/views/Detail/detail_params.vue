<template>
  <div class="params">
    <div class="params_context" v-for="(item,index) in detailData.rule">
      <div class="params-left">{{item[0]}}</div>
      <div class="params-right">
        <span>{{item[1]}}</span>
        <span>{{item[2]}}</span>
        <span>{{item[3]}}</span>
      </div>
    </div>
    <div class="params_info" v-for="(item,index) in detailData.info">
      <span class="miaoshu">{{item.key}}</span>
      <span class="neirong">{{item.value}}</span>
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

<style>
.params{
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
}

  .params_context{
    height: 49px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 14px;
    line-height: 49px;
    display: flex;
  }
  .params-left{
    flex: 1;
  }
  .params-right{
    flex:3;
    display: flex;
  }
.params-right span{
  flex: 1;
  text-align: center;
}
.params_info{
    height: 49px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 14px;
    line-height: 49px;
    display: flex;

}
.miaoshu{
  flex: 1;
}
.neirong{
  flex: 3;
  margin-left: 40px;
  overflow: hidden;
}
</style>