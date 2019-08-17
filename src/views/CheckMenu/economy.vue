<template>
    <div>
        <header>
            <div class="thetitle">
                <div>
                    <van-icon 
                    name="arrow-left" 
                    size = "27px"
                    v-show="!bool" />
                </div>
                <div class="uni-page-head__title" v-show="bool">
                        <span>王牌经纪人</span>
                </div>
            </div>
        </header>
        <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
          <van-card
        v-for="(item,index) in jinjiren"
        :key="index"
        class=" theList"
        @click="jump(index)"
        >
        <div slot="thumb">
        <van-image
            round
            width="68"
            height="68"
            :src = "manimg[index]"
        />
        </div>
        <div slot="desc">
            <div class="shopArea">
                <span class="AreaTitle">重点区域:</span>
              <span class="skill"  v-for="index in item.KeyArea"  :key="index" v-text="index"></span>
            </div>
            <div class="shopArea">
                <span class="AreaTitle">分析房源:</span>
            <span class="soloved"  v-for="index in item.analysis"  :key="index" v-text="index"></span>
            </div>
        </div>
        <div slot="title">
            <div class="e-man">
                {{item.name}}
            </div>
            <div class=" brian" >
                {{item.company}}
            </div>
        </div>
    </van-card>
    <div class="finall-di">
        <span>已加载完毕~</span><br>
        <span>这已是最底层了</span>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部信息", value: 0 },
        { text: "商区重点", value: 1 },
        { text: "分析领域", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "业绩排序", value: "c" }
      ],
      jinjiren: [],
      manimg: []
    };
  },
  async created() {
    let mybase = await this.$axios("http://localhost:3000/signin/login");
    this.jinjiren = mybase.data;
    let phto = mybase.data;
    // console.log(phto)
    let shou = [];
    for (let i = 0; i < phto.length; i++) {
      let du = phto[i].workphoto;

      shou.push(require("@/" + du));
    }
    // console.log(shou)
    this.manimg = shou;
  },
  methods: {
    jump(index) {
      let theid = index;
      this.$router.push({
        //核心语句
        path: "personalInf", //跳转的路径
        query: {
          id: theid
        }
      });
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
  top : 0;
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
.theList {
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: 1px;
  border: 1px solid #e1e1e1;
  position: relative;
  padding-bottom: 22px;
  margin-bottom: 12px;
  height: 83px;
}
.AreaTitle {
  color: #aaa;
}
.e-man {
  font-size: 16px;
  font-weight: bold;
}
.brian {
  position: absolute;
  top: 5px;
  right: 8px;
  font-size: 10px;
  color: #5890f5;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.skill {
  margin-left: 5px;
}
.soloved {
  margin-left: 5px;
}
.finall-di {
  height: 40px;
  font-size: 10px;
  text-align: center;
  color: #999;
  margin-bottom: 44px;
}
</style>
