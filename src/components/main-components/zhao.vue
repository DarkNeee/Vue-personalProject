<template>
    <div>
    <van-search 
    class="searchFor"
    v-model="value"
    placeholder="省心租办公室，就爱毛毛租"
    shape="round"
     :label= Mycity
    style="padding-top : 44px 
            background-color: #f8f8f8;
            border-radius: 21px;"
    @click="jump"
    >
    </van-search>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    jump() {
      this.$router.push({
        //核心语句
        path: "ChooseCity" //跳转的路径
      });
    }
  },
  computed: {
    Mycity() {
      return this.$store.state.city;
    }
  }
};
</script>

<style  scoped>
</style>


