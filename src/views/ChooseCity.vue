<template>
    <div>
    <header>
    <div class="thetitle">
        <div>
            <van-icon 
            name="arrow-left" 
            size = "27px"
            v-show="bool" 
            @click="jump"
            />
        </div>
        <div class="uni-page-head__title" v-show="bool">
                <span>城市选择</span>
        </div>
    </div>
    </header>
    <div class="box">
    <van-cell-group>
    <van-field
        required
        clearable
        label="城市名："
        placeholder="请输入您所在的城市"
        @change="track"
    />
    </van-cell-group>
        <van-button type="warning"
        class="btn"
        @click="jump"
        >确定</van-button>
    </div>
    </div>
</template>

<script>
export default {
  name: "getCity",
  data() {
    return {
      bool: true
    };
  },
  methods: {
    track(e) {
      this.$store.dispatch("setCityName", e.target.value);
    },
    jump() {
      this.$router.push({
        //核心语句
        path: "Mymain" //跳转的路径
      });
    }
  },
  computed: {
    cityL() {
      return this.$store.getters.getCity;
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  padding-bottom: 44px;
}
.thetitle {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 12px 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  background-color: #fff;
  z-index: 998;
  -webkit-transition-property: all;
  transition-property: all;
  top: 0;
}
.uni-page-head__title {
  font-weight: 700;
  font-size: 16px;
  opacity: 1;
  flex: 1;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.btn{
    width: 40%;
    margin-top: 20px;
    margin-left: 110px;
}
</style>

