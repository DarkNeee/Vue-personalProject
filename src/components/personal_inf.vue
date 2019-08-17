<template>
    <div>
    <header>
        <div class="thetitle">
            <div class="back">
                <van-icon 
                name="arrow-left" 
                size = "27px"
                v-show="!bool" 
                @click="jump"
                />
            </div>
            <div class="uni-page-head__title">
                <span class="wz" v-show="bool">毛毛租-省心租办公室，就爱毛毛租</span>
                <span class="wz" v-show="!bool">经纪人基本信息</span>
            </div>
        </div>
    </header>

    <van-cell>
          <div class="personalphoto">
    <div class="manName">
      <span>姓名：{{jingjiren.name}}</span>
    </div>
    <van-image
      width="100"
      height="100"
      lazy-load
      round
      :src="manimg"
    />
    </div>
    </van-cell>
    <van-cell>
      <div slot="title"
      >
        <div class="grolytitle">
          获得荣誉
        </div>
      </div>
      <div slot="default">
        <span class=" groly">
          {{jingjiren.company}}
        </span>
      </div>
    </van-cell>
        <van-cell>
      <div slot="title">
        <div class="grolytitle">
          专精区域
        </div>
      </div>
      <div slot="label">
        <p class="la">
            <van-tag plain 
            class="biaoqian"
           type="primary"
           v-for="index in jingjiren.KeyArea" 
           :key="index" 
           size = "large"
           >{{index}}</van-tag>
        </p>
      </div>
    </van-cell>
    <van-cell>
      <div slot="title">
        <div class="grolytitle">
          房源专精方向 
        </div>
      </div>
      <div slot="label">
        <p class="la">
            <van-tag plain 
            class="biaoqian"
           type="success"
           v-for="index in jingjiren.analysis" 
           :key="index" 
           size = "large"
           >{{index}}</van-tag>
        </p>
      </div>
    </van-cell>
    <van-cell>
      <div slot="title">
        <div class="grolytitle">
          个人宣言 
      </div>
      <div slot="label">
        <p class="xuanyan">
          {{jingjiren.Introduction}}
        </p>
      </div>
      </div>
    </van-cell>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false,
      listId: "",
      jingjiren: {},
      manimg: ""
    };
  },
  methods: {
    jump() {
      this.$router.push({
        //核心语句
        path: "Mymain" //跳转的路径
      });
    },
    getId() {
      this.listId = this.$route.query.id;
    }
  },
  async created() {
    this.getId();
    let mybase = await this.$axios("http://localhost:3000/signin/login");
    this.jingjiren = mybase.data[this.listId];
    let phto = mybase.data[this.listId];
    // console.log(this.jingjiren);
    let du = phto.workphoto;
    let shou = require("@/" + du);
    this.manimg = shou;
  }
};
</script>

<style scoped>
header {
  width: 100%;
}
.thetitle {
  position: fixed;
  left: 0;
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
.personalphoto {
  padding-top: 54px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.manName {
  flex: 1;
  text-align: center;
  line-height: 100px;
  font-weight: 700;
}
.grolytitle {
  font-size: 18px;
  font-weight: 700;
}
.groly {
  font-size: 15px;
  color: #999;
}
.la{
  margin-top: 10px;
}
.biaoqian {
  margin-left: 12px;
}
.xuanyan{
  font-size: 14px;
  color: #999;
}
</style>
