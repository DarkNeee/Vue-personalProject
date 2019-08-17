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
                    <span class="wz van-ellipsis">                毛毛租-省心租办公室，就爱毛毛租</span>
                    <span class="wz" v-show="!bool">房源搜索</span>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data (){
        return {
            bool : true
        }
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
</style>

