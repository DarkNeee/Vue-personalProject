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
                <span class="wz" v-show="!bool">房源信息</span>
            </div>
        </div>
    </header>
    <van-swipe :autoplay="3000" indicator-color="blue" style="height: 168px; padding-top: 44px;">
        <van-swipe-item v-for="(item,index) in listShop.picList" :key="index" >
             <img v-lazy="item.picUrl" style="  background-position: center;" />
        </van-swipe-item>
    </van-swipe>
    <div class="TheName">
        <p class="shopName">
            {{listShop.cmtName}}
        </p>
        <p class="shopLocation">
        <van-icon name="location-o"  class="loc"/> {{listShop.address}}
        </p>
    </div>
    <div  class="Title">
            价格
    </div>
    <div class="shopPrice">
       <del class="before"> 原价：￥ {{listShop.price}}</del><br>
        现价：<span class="nowp">￥{{listShop.levelPrice}}</span>·起
        <span class="month">工位·月</span>
          
    </div>
    <div class="servers">
        <div class="Title">
            服务配套
        </div>
        <van-grid>
        <van-grid-item
        v-for="(wei,index) in server_inf"
        :key="index"
        :icon="wei.icon"
        :text="wei.ser"
        />
        </van-grid>
    </div>
    <div class="yuyue">
         <van-button 
         type="warning" 
         size = "large"
         @click="goToYuyue"
         >立即预约</van-button>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false,
      listId: "",
      listShop : {},
      server_inf :[
            {
              ser : '交通便利',
              icon : 'logistics'
            },
            {
              ser : '购物区',
              icon : 'goods-collect-o'
            },
            {
              ser : '专业管理',
              icon : 'manager-o'
            },
            {
              ser : '环境优美',
              icon : 'flower-o'
            },
            {
              ser : '主题活动',
              icon : 'point-gift-o'
            },
            {
              ser : '休息区',
              icon : 'wap-home'
            },
            {
              ser : '电话区',
              icon : 'phone-o'
            },
      ]
    };
  },
  methods: {
    jump() {
      this.$router.push({
        //核心语句
        path: "details" //跳转的路径
      });
    },
    getId() {
      this.listId = this.$route.query.id;
    },
    goToYuyue(){
          this.$router.push({
        //核心语句
        path: "Markin", //跳转的路径
        query: {
                id: this.listId
        }
      });
    }
  },
  async created() {
    this.getId();
    let mased = await this.$axios.get("https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu");
    let sude = mased.data.data.items[this.listId];
    this.listShop = sude;

    // console.log(this.listShop)
  }
};
</script>

<style scoped>
header {
  width: 100%;
}
.back{
    position: absolute;
    left: 5px;
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
.wz{
    text-align: center;
}
img{
    width: 100%;
    height: 100%;
}
.TheName {
    padding: 20px 16px;
    background: #fff;
    margin-bottom: 10px;
    border-bottom: #999 solid 1px;
}
.shopName{
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-size: 17px;
}
.shopLocation{
    font-size: 14px;
    color: #999;
    font-weight: 700;
}
.loc{
    color: goldenrod;
}
.shopPrice{
    padding: 20px 16px;
    background: #fff;
    margin-bottom: 10px;
    font-size: 14px;
    border-bottom: 1px #999 solid
}
.before{
    font-size: 14px;
}
.nowp{
    color: #ff5050;
    font-size: 18px;

}
.Title{
    font-size: 18px;
    font-weight: 700;
    margin: 13px 10px;
}
</style>
