<template>
  <div class="detail">
    <Detailnav @diantidaohang="diantidaohang" ref="Detailnav"></Detailnav>
    <Scrollbar class="detail_height" ref="detailImgLoad" @scroll="scroll">
      <div class="detail_swiper"><Banner :imageList= "topSwiperData"></Banner></div>
      <Goodsinfo :detailData="detailData"></Goodsinfo>
      <Expressinfo :detailData="detailData"></Expressinfo>
      <Business :detailData="detailData"></Business>
      <Detailinfo :detailData="detailData" @detailImgLoad="detailImgLoad"></Detailinfo>
      <Deatilparams :detailData="detailData" ref="paramsTop"></Deatilparams>
      <Comment :detailData="detailData" ref="commentTop"></Comment>
      <Goodsbar :goodsList="goodsList" class="tuijian" ref="recommentTop"></Goodsbar>
      <div class="bottom_show">人家是有底线的~~~</div>
    </Scrollbar>
    <Cars @addCar="addCar"></Cars>
    <Backtop @click.native="back_top" v-show="isShow" ref="bt"></Backtop>
    <!--<Toast :mes="mes" :flag="flag"></Toast>-->
  </div>
</template>

<script>
import Detailnav from "./detailnav";
import Cars from "./cars";
import Goodsinfo from "./goods_info";
import Expressinfo from "./express_info";
import Deatilparams from "./detail_params";
import Comment from "./comment";
import Detailinfo from "./detail_info";
import Banner from "components/common/swiper/banner";
import { get_detail_data } from "../../network/detail";
import parseData from "./parseData";
import Business from "./business";
import Backtop from "components/common/backtop/Backtop";
import Scrollbar from "components/common/scrollbar/Scrollbar";
import { getHomeGOOds } from "../../network/home";
import Goodsbar from "components/common/goodsbar/Goodsbar";
//import Toast from "components/common/toast/Toast";
export default {
  //  因为所有的组件都是渲染在router-view中的,router-view被keep-alive包裹,keep-alive包裹的组件不会被销毁,但是我们的详情页面应该是每个item对应一个detail,因此我们不需要保存状态,而是让组件销毁重新创建,根据iid获取不同的数据
  name: "detail",
  data() {
    return {
      iid: this.$route.params.iid,
      detailData: {}, //  子组件需要接收的是什么数据类型那么我们默认值就给什么类型,
      goodsList: [],
      topList: [0], //  距离顶部的列表,
      fun: "", //  防抖汉书
      scrollY: 0,
      isShow:false,
      carInfo:{},
      //mes:'',
      //flag:false
      topSwiperData:[]
    };
  },
  components: {
    Detailnav,
    Goodsinfo,
    Business,
    Expressinfo,
    Scrollbar,
    Detailinfo,
    Deatilparams,
    Comment,
    Goodsbar,
    Cars,
    Backtop,
    Banner
    //Toast
  },
  created() {
    get_detail_data(this.iid).then(res => {
      //  解析从服务器请求回来的复杂的数据,将需要用到的数据做一个整合
      let data = res.result;
      this.detailData = new parseData(
        data.columns,
        data.itemInfo,
        data.shopInfo,
        data.detailInfo,
        data.itemParams,
        data.rate
      );
      this.topSwiperData = data.itemInfo.topImages
    });
    //  请求30条数据做为推荐
    getHomeGOOds(1, "pop").then(res => {
      this.goodsList = res.data.list;
      console.log(res)
    });
  },
  mounted() {
    //  详情页和首页同时监听了imgLoad事件那么图片加载完成就都会执行这个事件,但是我们详情页面的图片加载完成为什么首页需要刷新？这就是不合理的，因此我们想要的是详情页图片加载完成就刷新详情页，首页不做刷新
    this.$bus.$on("detailImgLoad", () => {
      this.$refs.detailImgLoad.scroll.refresh();
    });
    this.fun = this.debounce();
  },
  methods: {
    detailImgLoad() {
      //  等图片加载完成利用refresh通知better-scroll重新刷新高度,但是这样会频繁调用刷新20次,可能会影响浏览器的效率
      this.$refs.detailImgLoad.scroll.refresh();
      this.fun();
    },
    diantidaohang(index) {
      this.$refs.detailImgLoad.scroll.scrollTo(0, -this.topList[index], 0);
    },
    debounce() {
      let timer = null;
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          //  等图片加载完成后获取距离顶部的距离
          this.topList.push(
            this.$refs.paramsTop.$el.offsetTop,
            this.$refs.commentTop.$el.offsetTop,
            this.$refs.recommentTop.$el.offsetTop
          );
        }, 500);
      };
    },
    scroll(position) {
      this.scrollY = Math.abs(position.y);
      if (this.scrollY >= this.topList[0] && this.scrollY < this.topList[1]) {
        this.$refs.Detailnav.current = 0;
      } else if (
        this.scrollY >= this.topList[1] &&
        this.scrollY < this.topList[2]
      ) {
        this.$refs.Detailnav.current = 1;
      } else if (
        this.scrollY >= this.topList[2] &&
        this.scrollY < this.topList[3]
      ) {
        this.$refs.Detailnav.current = 2;
      } else if (this.scrollY >= this.topList[3]) {
        this.$refs.Detailnav.current = 3;
      }
      if(Math.abs(position.y) > 1000){
        this.isShow = true
      }else {
        this.isShow = false
      }
    },
    back_top() {
      this.$refs.detailImgLoad.scroll.scrollTo(0, 0, 1000);
    },
    addCar(){ 
      this.carInfo.iid = this.iid
      this.carInfo.title = this.detailData.title
      this.carInfo.price = this.detailData.lowNowPrice
      this.carInfo.image = this.detailData.topImages
      //  将多个组件需要使用的数据存放在vuex中,我们应该等商品添加到购物车后在执行toast
      this.$store.dispatch('addShop',this.carInfo).then(res=>{
        this.$toast.show('添加购物车成功~~~')
      })
    
    }
  }
};
</script>

<style>
.detail {
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #f5f5f5;
}
.detail_swiper {
  height: 375px;
  background-color: pink;
  text-align: center;
  line-height: 375px;
  font-size: 30px;
}

.detail_height {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 0;
}
.bottom_show {
  height: 50px;
  background-color: #fff;
  color: palevioletred;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}
</style>