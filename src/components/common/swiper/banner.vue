<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in imageList" :key="index">
        <img :src="item" alt @load="getHeight" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    },
    imageList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          //  控制圆点
          el: ".swiper-pagination"
        },
        loop: true, // 控制循环
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    getHeight() {
      this.$emit("getHeight");
    }
  }
};
</script>

<style>
.banner {
  height: 100%;
}
.banner img {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.swiper-container {
  --swiper-pagination-color: #fff; /* 两种都可以 */
  height: 100%;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -160px;
}
</style>