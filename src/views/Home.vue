<template>
  <div class="home">
    <h1>首页</h1>
    <van-swipe :autoplay="3000" height="240">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <span>当前获取的数据是：{{$store.state.number}}</span>
    <van-button :loading="loading" type="primary" @click="addOne">按钮</van-button>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Button } from 'vant';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  computed: {
    ...mapState({ loading: (state) => state.myLoading.effect.oneAsync }),
  },
  methods: {
    ...mapActions(['oneAsync']),
    addOne() {
      this.oneAsync(1);
    },
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
  },
};
</script>

<style lang="scss" scoped>
span {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
