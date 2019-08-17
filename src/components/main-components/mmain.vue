<template>
<div>
    <van-grid :column-num="3">
  <van-grid-item
    v-for="(value,index) in click_btn"
    :key="index"
    :icon="value.icon"
    :text="value.title"
    @click="jump"
  />
</van-grid>
<div class="works"> 
    <div class="thetitle">
        <span class="icon">|</span>
        <span class="holly">品牌联合办公</span>
         <van-grid :column-num="3">
        <van-grid-item
            v-for="(value,index) in TList"
            :key="index"
        >
        <van-image :src="value.picList[1].picUrl" />
        <div class="artical" >
            {{value.lableList[2]}}
        </div>
        </van-grid-item>
        </van-grid>
    </div>
</div>
<div class="works"> 
    <div class="thetitle">
        <span class="icon">|</span>
        <span class="holly">核心商圈</span>
    </div>
    <van-button round type="danger" 
    v-for="(item,index) in btn_inf" 
    :key="index" 
    class="theArea"
    size = 'small'
    @click="jump"
    >{{item.cbdName}}
    </van-button>
</div>
<div class="works"> 
    <div class="thetitle">
        <span class="icon">|</span>
        <span class="holly">王牌经纪人</span>
    </div>
    <van-card
        v-for="(item,index) in jinjiren"
        :key="index"
        class=" theList"
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
                <span class="skill" v-for="index in item.KeyArea"  :key="index" v-text="index"></span>
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
</div>
</template>

<script>
export default {
  data() {
    return {
      click_btn: [
        {
          title: "写字楼",
          icon: "column"
        },
        {
          title: "地铁站楼盘",
          icon: "send-gift"
        },
        {
          title: "热门楼盘",
          icon: "fire"
        }
      ],
      btn_inf: [],
      TList: [],
      jinjiren: [],
      manimg: []
    };
  },
  async created() {
    let btn_val = await this.$axios(
      "https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/citylist"
    );
    // console.log(btn_val.data.data[2].cbdList);
    this.btn_inf = btn_val.data.data[2].cbdList;
    let shopList = await this.$axios(
      "https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu"
    );
    // console.log(shopList.data.data.items);
    this.TList = shopList.data.data.items;
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
    jump() {
      this.$router.push({
        //核心语句
        path: "details" //跳转的路径
      });
    }
  }
};
</script>

<style scoped>
.works {
  padding: 17px 9px 4px 9px;
}
.thetitile span i {
  font-weight: bold;
  display: inline-block;
  font-size: 15px;
}
.theArea {
  width: 101px;
  background-color: #fff;
  line-height: 28px;
  border-radius: 14px;
  border: 1px solid #ddd;
  text-align: center;
  margin-left: 10px;
  margin-top: 18px;
  font-size: 13px;
  color: #333;
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
.artical {
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
}
.skill {
  margin-left: 5px;
}
.soloved {
  margin-left: 5px;
}
.icon{
    font-size: 16px;
    font-weight: 700;
    color: #ffbe5e;
}
.holly{
    font-size: 16px;
    font-weight: 700;
    padding-left: 4px;
}
.finall-di{
    height: 40px;
    font-size: 10px;
    text-align: center;
    color: #999;
    margin-bottom: 44px;
}
</style>

