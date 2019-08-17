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
                        <span>合作</span>
                </div>
            </div>
        </header>
        <div class="personalphoto"></div>
        <van-cell>
        <div slot="title">
        <div class="grolytitle">
          公司名称
        </div>
        </div>
        <div slot="default">
        <span class=" groly">
         上海回燕信息科技有限公司
        </span>
      </div>
        </van-cell>
        <van-cell>
        <div slot="title">
            <div class="grolytitle">
                合作信息 
            </div>
        <div slot="label">
            <p class="xuanyan">
                商业管理咨询;办公机器和设备出租;为商品和服务的买卖双方提供在线市场;税务申报服务;为需要资金的企业匹配潜在投资人的商业中介服务;为商业或广告目的编制网页索引;商业中介服务;通过网站提供商业信息;商业企业迁移;广告空间出租
         
 
            </p>
        </div>
        </div>
        </van-cell>
        <van-cell>
        <div slot="title">
        <div class="grolytitle">
          联系电话
        </div>
        </div>
        <div slot="default">
        <span class=" groly">
         188****7258
        </span>
      </div>
        </van-cell>
        <van-cell>
        <div slot="title">
        <div class="grolytitle">
          旗下商区
        </div>
        </div>
        <div slot="label">
        <van-grid :column-num="3">
            <van-grid-item
            v-for="(item,index) in TList"
            :key="index"
            >
            <van-image :src="item.recommendPicUrl" />
            <div class="artical" >
                {{item.cmtName}}
            </div>
            </van-grid-item>
        </van-grid>
      </div>
        </van-cell>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      TList: []
    };
  },
  async created() {
    let shopList = await this.$axios(
      "https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu"
    );
    this.TList = shopList.data.data.items;
    // console.log(this.TList)
  }
};
</script>

<style scoped>
header {
  width: 100%;
}
.thetitle {
  position: fixed;
  top: 0;
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
.grolytitle {
  font-size: 18px;
  font-weight: 700;
}
.groly {
  font-size: 14px;
  color: #999;
}
.la {
  margin-top: 10px;
}
.biaoqian {
  margin-left: 12px;
}
.xuanyan {
  font-size: 14px;
  color: #999;
}
</style>

