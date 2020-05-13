<template>
  <div class="cart_list_item">
    <div class="car-left">
      <input type="checkbox" @click="check_" :checked="dx" />
      <img :src="item.image[0]" alt />
    </div>
    <div class="car-right">
      <p>{{item.title}}</p>
      <p>{{item.title}}</p>
      <span class="pp">￥{{item.price}}</span>
      <span>x{{item.count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      dx: false
    };
  },
  created() {
    //  让小按钮的状态和全选状态同步
    this.$bus.$on("test", xianshi => {
      this.dx = xianshi;
      //  重新计算总价格
      let sum = this.$store.state.shopList
        .reduce((preValue, item) => {
          return preValue + parseFloat(item.price) * item.count;
        }, 0)
        .toFixed(2)
        if(xianshi){
          //  全选为true的时候传入总价格
          this.$bus.$emit("priceCd", sum)
        }else{
          //  全选为false的时候传入0
          sum = 0
          this.$bus.$emit("priceCd", sum);
        }
    });
  },
  methods: {
    check_() {
      //  每一次点击让对象的isCheck属性取反
      this.item.isCheck = !this.item.isCheck; 
      //  并且让单选按钮取反,让商品的状态和表单显示保持一致
      this.dx = !this.dx;
      //  计算所有选中商品的价格
      let sum = this.$store.state.shopList
        .filter(item => item.isCheck === true)
        .reduce((preValue, item) => {
          return preValue + parseFloat(item.price) * item.count;
        }, 0)
        .toFixed(2)
      //  计算所有选中商品的数量
     let check_length = this.$store.state.shopList
        .filter(item => item.isCheck === true)
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
        //  利用事件总线将总价格和商品的数量传入fullprice进行展示
      this.$bus.$emit("priceCd", sum, check_length);

      //  检查是否有没有选中的元素,如果有没有选中的元素将xianshi设置为false,不激活全选按钮,如果都选中了那么将xianshi设置为true激活全选按钮
      let xianshi = null;
      for (let i = 0; i < this.$store.state.shopList.length; i++) {
        if (this.$store.state.shopList[i].isCheck === false) {
          xianshi = false;
          break;
        } else {
          xianshi = true;
        }
      }
      //  将状态发过去控制是否激活全选按钮
      this.$bus.$emit("isxianshi", xianshi);
    }
  }
};
</script>

<style>
.cart_list_item {
  width: 100%;
  height: 120px;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
}
.car-left {
  width: 30%;
  height: 100px;
  float: left;
  position: relative;
}
.car-left input {
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
}
.car-left img {
  width: 100%;
  height: 100%;
}
.car-right {
  width: 70%;
  height: 100px;
  float: right;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  font-size: 18px;
}
.car-right p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
.car-right p:nth-child(2) {
  font-size: 14px;
}
.car-right span:first-child {
  float: left;
}
.car-right .pp {
  color: pink;
}
.car-right span:last-child {
  float: right;
}
</style>