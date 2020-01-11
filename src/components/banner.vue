<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="/images/img_1.jpg" alt=""/></van-swipe-item>
      <van-swipe-item><img src="/images/img_2.jpg" alt=""/></van-swipe-item>
      <van-swipe-item><img src="/images/img_3.jpg" alt=""/></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {};
  },
  components: {},
  updated() {},
  methods: {}
};
</script>

<style lang='scss'>
.van-swipe {
  width: 100%;
  height: 180px;
  .van-swipe__track{
    .van-swipe-item{
      img {
        width: 100%;
        height: 180px;
      }
    }
  }
}
</style>
