<template>
    <div class="friend">
        <div class="header">
            <router-link to="/search">
                <li class="fa fa-search" aria-hidden="true" @click="search"></li>
            </router-link>

            <li class="title">交友</li>
        
            <li class="isex" v-if="is_sex===1" @click="isex">只看异性</li>
            <li class="isex" v-else @click="allsex" style="background:#ccc">只看异性</li>
        </div>
        <van-tabs style="posi" v-model="active" :offset-top="50" sticky>
            <van-tab title="红人" class="hongren">
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item>
                        <img
                            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2926846062,2391162554&fm=26&gp=0.jpg"
                            alt
                            class="tpic"
                        />
                    </van-swipe-item>
                    <van-swipe-item>
                        <img
                            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
                            alt
                            class="tpic"
                        />
                    </van-swipe-item>
                </van-swipe>
                <ul class="content">
                    <!-- :to="'/details/'+item.id" 传递数据给详情页 -->
                    <li v-for="item of getdata" :key="item.uid">
                        <router-link :to="'/details/'+item.uid">
                            <img :src="item.avatar" alt />
                            <div class="mask">
                                <p>
                                    <span>{{item.nick}}</span>

                                    <span class="sex" v-if="item.sex==1" :class="{boy:true}">
                                        <i class="fa fa-mars" aria-hidden="true"></i>
                                        <em class="age">{{item.age}}</em>
                                    </span>
                                    <span class="sex" v-else :class="{girl:true}">
                                        <i class="fa fa-venus" aria-hidden="true"></i>
                                        <em class="age">{{item.age}}</em>
                                    </span>
                                    <em class="text">{{item.autograph}}</em>
                                </p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="活跃">内容 2</van-tab>
            <van-tab title="新面孔">内容 3</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import eventbus from "../../eventbus.js";
export default {
    data() {
        return {
            active: 0,
            is_sex:1
        };
    },
    components: {},
    methods: {
        search() {
            this.$router.push({ path: "/search" });
        },
        isex(){
            this.is_sex=2;
            this.$store.dispatch("friend/getdata",this.is_sex);//发请求
        },
        allsex(){
            this.is_sex=1;
            this.$store.dispatch("friend/getdata",this.is_sex);//发请求
        }
    },
    created() {
        this.$store.dispatch("friend/getdata",this.is_sex);//发请求
    },
    computed:{
        getdata(){// 获取Friend页面数据
            return this.$store.state.friend.items;
        }
    },
    mounted(){
        eventbus.$emit("showFooter", true);
    }
    
};
</script>
<style scoped>
.boy {
    background: blue;
}
.girl {
    background: palevioletred;
}
.header {
    position: fixed;
    top: 0;
    height: 50px;
    background: white;
    overflow: hidden;
    z-index: 1;
}
.header li {
    font-size: 20px;
    float: left;
    margin: 10px 20px;
}
.header .title {
    margin: 10px 50px 10px 105px;
}

.header .isex {
    background: linear-gradient(to right, #fe5267 60%, #ff8660);
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    width: 80px;
}
.friend {
    margin-bottom: 80px;
}
.hongren .tpic {
    width: 100%;
    height: 150px;
    display: block;
}
.hongren .content {
    overflow: hidden;
}
.hongren .content li {
    width: 50%;
    height: 250px;
    float: left;
    position: relative;
}
.hongren .content img {
    width: 100%;
    height: 100%;
    display: block;
}
.content .mask {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.hongren .content p {
    font-size: 16px;
    position: absolute;
    bottom: 15px;
    margin-left: 10px;
    width: 80%;
    font-style: normal;
    color: white;
    line-height: 25px;
}
.hongren .content .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 50px;
}
.content .sex {
    margin-left: 20px;
    padding: 3px 5px;
    /* background: blue; */
    border-radius: 5px;
    font-size: 12px;
}
.van-tabs--line .van-tabs__wrap {
    height: 1.17333rem;
    width: 100%;
    position: fixed;
}
.van-tabs {
    margin-top: 50px;
}
</style>
