<template>
<div>
    <header>
        <div class="thetitle">
            <div>
                <van-icon 
                name="arrow-left" 
                size = "27px"
                v-show="!bool" 
                @click="jump"
                />
            </div>
            <div class="uni-page-head__title">
                <span class="wz" v-show="bool">毛毛租-省心租办公室，就爱毛毛租</span>
                <span class="wz" v-show="!bool">房源搜索</span>
            </div>
        </div>
    </header>
    <van-dropdown-menu class="dmenu">
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-card
        v-for="(item,index) in BList"
        :key="index"
        :tag="item.discountType"
        :desc="item.address"  
        :thumb="item.recommendPicUrl"
        :lazy-load = "load"
    >
    <div slot="tags">
        <van-tag plain
        class="taggets"
         type="success"
          v-for="index in 3" 
          :key="index"
          color="#ffe1e1" text-color="#ad0000"
          size = "medium"
          >{{item.lableList[index-1]}}</van-tag>
    </div>
    <div slot="footer">
        <van-button size="mini" @click="goToDetails(index)">
                详情
        </van-button>
    </div>
    <div slot="title">
        <div class="title_name">
            {{item.cmtName}}
        </div>
        <div class="pricesCheck">
            <del>￥ {{item.price}}</del>
            <div class="NowPrice">
                ￥ <span class="theprice">{{item.levelPrice}}</span>·起
            </div>
        </div>
        <div class="Thelocation">
            工位·月
        </div>
    </div>
    </van-card>
</div>
</template>

<script>
export default {
    data (){
        return {
            load : true,
            bool : false,
            value1: 0,
            value2: 'a',
            option1: [
                        { text: '全部商品', value: 0 },
                        { text: '新款商品', value: 1 },
                        { text: '活动商品', value: 2 }
                    ],
            option2: [
                        { text: '默认排序', value: 'a' },
                        { text: '好评排序', value: 'b' },
                        { text: '销量排序', value: 'c' },
                    ],
            BList : [],
            show : false
        }
    },
    methods : {
        jump(){
             this.$router.push({  //核心语句
             path:'Mymain',   //跳转的路径
            });
        },
        goToDetails(index){
            let theid = index;
             this.$router.push({  //核心语句
             path:'listMsg',   //跳转的路径
            query: {
                id: theid
            }
            });
        }
    },
    async created(){
    let shopList = await this.$axios('https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu')
    // console.log(shopList.data.data.items);
        this.BList = shopList.data.data.items;
        // console.log(this.BList.cityId)
    }
}
</script>

<style scoped>
      header {
        width: 100%;
    }
    .thetitle{
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
    .uni-page-head__title{
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
    .dmenu{
        padding-top: 44px
    }
    .taggets{
        margin-left: 5px;
        margin-top:4px;
    }
    .title_name{
        margin-bottom: 10px;
        color: #000;
        font-size: 13px;
        font-weight: 700;
    }
    .pricesCheck{
        position: absolute;
        top: 0;
        right: 5px;
    }
    del{
        /* position: relative; */
        margin-top: 4px;
        padding-right: 5px;
        font-size: 10px;
        color: #999;
        letter-spacing: 0;
        float: left;
    }
    .NowPrice{
        float: left;
        color: #ff5050;
        font-size: 10px;
    }
    .theprice{
        font-size: 15px;
    }
    .Thelocation{
        font-size: 10px;
        float: right;
        margin-right: 6px;
    }
</style>

