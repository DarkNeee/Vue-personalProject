<template>
<div>
     <router-view>
     </router-view>
     <van-tabbar v-model="active">
    <van-tabbar-item   
    v-for="(f, index) in formValue"
    :key="index"
    :icon="f.iconFace"
    @click="taget(index)"
    :url ="f.url"
    >
    {{f.FormName}}
    </van-tabbar-item>
    </van-tabbar>
</div>
    
</template>

<script>
export default {
    name : 'topMain',
    data () {
        return {
            active : 0,
            formValue :[
                {
                    FormName : '首页',
                    iconFace : 'home-o',
                    url : '#/Mymain'
                },
                {
                    FormName : '王牌经纪人',
                    iconFace : 'manager-o',
                    url : '#/economy'
                },
                {
                    FormName : '合作',
                    iconFace : 'friends-o',
                    url : '#/cooperation'
                }
            ],
        }
    },
    methods : {
        taget (index){
            this.active = index;
        }
    },
}
</script>

<style>

</style>
