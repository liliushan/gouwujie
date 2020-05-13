<template>
  <div class="home">
    <Navbar>
      <div slot="center">购物街</div>
    </Navbar>
    <Searchbar :titleList="['流行','新款','精选']" @tabToggle="test" ref="title1"   class="search_bar_first" v-show="isShow">   
    </Searchbar>
    <Scrollbar
      class="scrollDistance"
      ref="scrollbar"
      @scroll="show_hidden"
      :probeType="probeType"
      @uploadMore="uploadMore"
    >
      <!-- 轮播图 -->
      <Banner :bannerList="banner" :imageList=imageList  @getHeight="getHeight"></Banner>
      <!-- 信息 -->
      <Info :recommendList="recommend"></Info>
      <Searchbar :titleList="['流行','新款','精选']" @tabToggle="test" ref="title"></Searchbar>
      <Goodsbar :goodsList="goods[currentType].list"></Goodsbar>
    </Scrollbar>
    <!-- 组件是不能够直接添加点击事件的组件要添加事件必须跟上native修饰符 -->
    <Backtop @click.native="back" v-show="isShow"></Backtop>
  </div>
</template>

<script>
import { getHomeData, getHomeGOOds } from "../../network/home";

import Navbar from "components/common/navbar/Nav";
import Banner from "components/common/swiper/banner";
import Searchbar from "components/common/searchbar/Searchbar";
import Goodsbar from "components/common/goodsbar/Goodsbar";
import Scrollbar from "components/common/scrollbar/Scrollbar";
import Backtop from "components/common/backtop/Backtop";

import Info from "./info";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      probeType: 3,
      searchoffsetTop:'',
      saveY:0,
      imageList:[]
    };
  },
  components: {
    Navbar,
    Banner,
    Info,
    Searchbar,
    Goodsbar,
    Scrollbar,
    Backtop
  },
  created() {

    //  生命周期中我们一般不处理业务逻辑,只写主要代码
    this.getHomeData();
    this.getHomeGOOds("pop");
    this.getHomeGOOds("sell");
    this.getHomeGOOds("new");
  },
  mounted() {
    let refresh = this.debounce();
    this.$bus.$on("homeImgLoad", () => {
      //  接收到了事件总线传递过来的事件,并做了函数防抖处理,多次调用只执行一次处理函数
      refresh();
    });
  },
  methods: {
    /**
     *
     * 数据传递相关的事件
     *
     *
     */
    getHeight(){
      //  获取到了search的offsetTop
      this.searchoffsetTop = this.$refs.title.$el.offsetTop
    },
    test(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.title1.num = index //  将点击的索引赋值给num,因为num是控制我们searbar的当前元素的
      //  让两个组件的num保持一致,
      this.$refs.title.num =  index
    },
    back() {
      //  组件之间是可以相互访问的,我们可以通过$refs获取组件和元素,
      this.$refs.scrollbar.scroll.scrollTo(0, 0, 1000);
    },
    show_hidden(position) {
      if (Math.abs(position.y) > 500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      //  在vue开发中如果想要获取元素尽量不要使用document来获取,因为获取到的不一定是准确的比如有多个content我们不能确定获取的是哪个content
      //  组件中有个属性叫$el可以获取组件中的模板
      if(Math.abs(position.y) >= this.searchoffsetTop){
        this.isShow = true
      }
    },
    uploadMore() {
      //  下拉加载数据
      console.log("下拉加载数据");
      this.getHomeGOOds(this.currentType);
    },
    debounce() {
      //  函数防抖:多次触发事件,事件处理函数只执行一次,并且是在事件触发完成后执行
      //  原理:利用定时器延迟事件处理函数的执行,如果在定时器延时之前又触发了函数那么清除定时器,重新定时
      let timer = null;
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          //  refresh()重新获取高度
          this.$refs.scrollbar.scroll && this.$refs.scrollbar.scroll.refresh();
  
        }, 500);
      };
    },
    /**
     *
     * 网络请求相关的事件
     *
     * */

    getHomeData() {
      getHomeData().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        res.data.banner.list.forEach(value=>{
          this.imageList.push(value.image)
        })
        console.log(this.imageList)
      });
    },
    getHomeGOOds(type) {
      let page = this.goods[type].page + 1;
      getHomeGOOds(page, type).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
        //  重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        //  当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        this.$refs.scrollbar.scroll.finishPullUp();
      });
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.saveY = this.$refs.scrollbar.scroll.y
    next()  //  不调用next就无法去往下一个组件
  },
  beforeRouteEnter (to, from, next) {
    //  进入组件之前调用,不能够直接访问this实例,因为这个时候组件还没有被创建
    //  next()可以传入回调函数在组件被创建的时候传入实例
    next(vm => {
      //  先刷新better-scroll在滚动到保存的位置,不会出现回滚的问题
      //  原因:因为b etetr-scroll在计算滚动的高度的时候是根据content里面内容的
      vm.$refs.scrollbar.scroll.refresh()
      vm.$refs.scrollbar.scroll.scrollTo(0,vm.saveY,0)
  })
}
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.scrollDistance {
  position: absolute;
  top: 49px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.search_bar_first{
  position: relative;
  z-index: 5;
  margin: 0;
}
</style>