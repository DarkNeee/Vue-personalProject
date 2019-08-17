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
            <span class="wz" v-show="bool">预约参观</span>
        </div>
    </div>
    </header>
    <van-cell-group class="biaodan">
    <van-field
        v-model="name"
        required
        clearable
        label="称谓"
        placeholder="请输入您的称谓"
    />

    <van-field
        v-model="password"
        label="手机号码"
        placeholder="请输入您的手机好吗"
        required
    />
    <van-field
    :value="located.address"
    label="参观地点："
    disabled
    />
    </van-cell-group>
    <div class="lde">
            <van-button 
    type="primary" 
    @click="showPopup"
    class="btn_tc"
    >
        提交
    </van-button>
    </div>

    <van-popup v-model="show">
        <div class="tishiSpace">
            <van-icon name="passed" class="icd" />
            <p class="xiaots">提交成功！</p>
            <van-button 
            type="default"
            @click="jump"
            class="took"
            >确定</van-button>
        </div>
    </van-popup>
    <div class="tishi">
        提示：请将您的信息填写完毕，填写完毕发送后，工作人员将会在24小时内给您通知。
    </div>

    </div>
</template>

<script>
export default {
    data (){
        return {
            bool:true,
            name : '',
            password : '',
            listId : '',
            located : {},
            show : false,
        }
    },
    methods : {
    jump(){
        this.$router.push({
        //核心语句
            path: "details" //跳转的路径
        });
    },
    getId() {
      this.listId = this.$route.query.id;
    },   
    showPopup() {
      this.show = true;
    },
    },
    async created() {
    this.getId();
    let mased = await this.$axios.get("https://www.easy-mock.com/mock/5d402b8f99acfe0359e01860/example/shopmenu");
    let sude = mased.data.data.items[this.listId];
    this.located = sude;

    // console.log(this.located)
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
    .biaodan{
        padding-top: 44px;
    }
    .tishi{
            width: 170px;
            color: #666;
            font-size: 12px;
            margin: auto;
    }
    .lde{
        margin-top: 7%;
        margin-left: 22%;
    }
    .btn_tc{
        width: 70%;
        background-color: #ffeb00;
        border-color: #ffeb00;
        color: #624d17;
        font-weight: 700;
    }
    .tishiSpace{
        width: 200px;
    }
    .icd{
        font-size: 140px;
        color: #58bc58;
        margin-left: 14%;
    }
    .xiaots{
         color: #624d17;
         text-align: center;
    }
    .took{
        width: 70px;
        margin-left: 30%;
        margin-bottom: 10px;
    }
</style>
