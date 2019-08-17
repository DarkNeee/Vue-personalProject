<template>
<van-swipe :autoplay="3000" indicator-color="blue" style="height: 168px;">
  <van-swipe-item v-for="(item,index) in lunbo" :key="index" >
    <img v-lazy="item.banerPicUrl" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
  data() {
    return {
      lunbo : [],
    };
  },
  async created() {
    let lamb = await this.$axios(
      "https://www.easy-mock.com/mock/5d496c39b20a8503ca1a97f3/example/lamb"
    );
    this.lunbo = lamb.data.data.items;
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>

