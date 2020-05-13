<template>
  <div class="toast" v-show="flag">
      {{mes}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:false,
      mes:''
    }
  },
  methods:{
   show(mes){
     this.flag = true
     this.mes = mes
     setTimeout(()=>{
       this.flag = false
       this.mes = ''
     },1500)
   }
  }
}
</script>

<style>
.toast{
  padding: 10px;
  background-color:rgba(0, 0, 0, 0.384);
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 8px;
      z-index: 999;
}
</style>