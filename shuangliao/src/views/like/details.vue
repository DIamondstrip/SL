<template>
    <div>
        <header class="top">
            <van-nav-bar
                fixed
                left-arrow
                class="nav"
                :border="false"
                title-active-color="rgba(255, 255, 255, 1)"
                @click-left="onClickLeft"
            >
                <van-icon name="ellipsis" slot="right" style="color:rgba(255, 255, 255, 1)" />
            </van-nav-bar>
            <img :src="getdata.avatar" alt />
            <div class="beijing">
                <div class="user">
                    <span class="name">{{getdata.nick}}</span>
                    <span class="sex" v-if="getdata.sex===1">
                        <i class="fa fa-mars" aria-hidden="true"></i>
                        <em class="age">{{getdata.age}}</em>
                    </span>
                    <span class="sex" v-if="getdata.sex===2">
                        <i class="fa fa-venus" aria-hidden="true"></i>
                        <em class="age">{{getdata.age}}</em>
                    </span>
                    <span class="renzheng">认证</span>
                    <!-- 关注 / 取消关注 -->
                    <van-button
                        class="guanzhu"
                        @click="guanzhu(getdata.isfollow)"
                        v-if="getdata.isfollow===0"
                        style="background:linear-gradient(to right, #fe4d68, #ff8660)"
                    >
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;关注
                    </van-button>
                    <van-button
                        class="guanzhu"
                        @click="guanzhu(getdata.isfollow)"
                        v-if="getdata.isfollow===1"
                        style="background:#aaa"
                    >
                        <i class="fa fa-minus-circle" aria-hidden="true"></i>&nbsp;取消关注
                    </van-button>

                    <p class="gold">200金币/分钟</p>
                    <p>
                        <span style="font-size:14px;">ID:</span>
                        <span>{{getdata.uid}}</span> ·
                        <span>{{getdata.address}}</span>
                        <span v-if="getdata.fans">·{{getdata.fans}}粉丝</span>
                    </p>
                    <p class="autograph">
                        <span style="font-size:14px;">签名:</span>
                        <span>{{getdata.autograph}}</span>
                    </p>
                </div>
            </div>
            <!-- 个人信息 -->
        </header>
        <!-- pohot -->
        <div class="photo">
            <router-link :to="'/photoalbum/'+getdata.uid" class="photolink">
                <van-cell title="相册" :border="false" is-link to class="phototitle" />
                <ul class="photomore">
                    <!-- 相册 -->
                    <li v-for="item of album">
                        <img :src="item.pImageurl" alt />
                    </li>
                </ul>
            </router-link>
        </div>
        <!-- pohot -->
        <!-- visit -->
        <div class="visit">
            <van-cell title="来访的人" :border="false" is-link to />
            <ul class="visit_p">
                <li v-for="item of getdata.visitors" :key="item.vUid">
                    <img :src="item.avatar" alt />
                </li>
            </ul>
        </div>
        <!-- visit -->
        <!-- gift -->
        <div class="getgift">
            <van-cell title="收到的礼物" :border="false" is-link to />
            <ul class="gifts">
                <li v-for="(item,index) of getdata.gifts" :key="index">
                    <img :src="item.url" alt />
                    <span class="gifts_count">{{item.oCount}}</span>
                </li>
            </ul>
        </div>
        <!-- 底部 -->
        <footer>
            <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                <div class="jinbi">
                    <p>
                        <span>金币:500</span>
                        <van-icon name="arrow" />
                    </p>
                    <!--  " -->
                    <van-button
                        round
                        style="background:linear-gradient(to right, #fe4d68, #ff8660);color:#fff;"
                        @click="sendgift($event)"
                    >赠送</van-button>
                </div>
                <ul class="pup_liwu" ref="ishow">
                    <li v-for="item of pop_gift" :key="item.gid" @click="selgift(item.gid,$event)">
                        <img :src="item.url" alt />
                        <span>{{item.gName}}</span>
                        <span>{{item.gPrice}}</span>
                    </li>
                </ul>
            </van-popup>
            <div class="liwu" @click="show=!show">
                <van-icon name="point-gift" />
            </div>
            <div class="message">
                <van-icon name="chat" />
            </div>
            <div class="shipin">视讯聊天(空闲中)</div>
        </footer>
    </div>
</template>
<script>
import eventbus from "../../eventbus";
export default {
    data() {
        return {
            msgarr: [],
            show: false,
            gid: null
        };
    },
    created() {
        //发请求,把id传给后端,查找匹配的数据
        this.$nextTick(function() {
            this.$store.dispatch("details/getdata", this.$route.params.id); //TA人信息页
            this.$store.dispatch("details/album", this.$route.params.id); //相册
            this.$store.dispatch("details/pop_gift"); //底部弹出层 礼物
        });
    },
    computed: {
        getdata() {
            // 获取detail页面数据
            return this.$store.state.details.detailobj;
        },
        album() {
            //详情页 TA人相册
            return this.$store.state.details.album;
        },
        pop_gift() {
            // 底部弹出层 礼物
            return this.$store.state.details.pop_gift;
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        onClickRight() {
            Toast("按钮");
        },
        guanzhu(id) {
            let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
            let data = this.qs.stringify({
                tel: userInfo.tel,
                uid: this.getdata.uid
            });
            // 关注 和 取消关注
            if (id === 0) {
                // id为0  未关注
                this.getdata.isfollow = 1;
                this.$axios.post("/fans/follow", data);
            } else {
                // id 为 1 关注了 再次点击 取消关注
                this.getdata.isfollow = 0;
                this.$axios.post("/fans/cancelfollow", data);
            }
        },
        selgift(id, event) {
            // 弹出层 挑选礼物
            if (event.target.nodeName === "LI") {
                event.target.style.border = "1px red solid";
            } else {
                event.target.parentNode.style.border = "1px red solid";
            }
            this.gid = id; //礼物id 给gid, 赠送礼物 post请求要用
        },
        sendgift(event) {
            let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
            if (this.gid) {
                let data = this.qs.stringify({
                    tel: userInfo.tel,
                    gid: this.gid,
                    oDuid: this.$route.params.id
                });
                this.$axios.post("/gift/send", data).then(result => {
                    alert("礼物" + this.gid + result.data.data); //提示赠送成功
                    // console.log(event)
                    let arr = this.$refs.ishow.children;
                    for (let i = 0; i < arr.length; i++) {
                        arr[i].style.border = "none";
                    }
                    this.gid = null;
                });
            } else {
                alert("请选择要赠送的礼物");
            }
        }
    },
    mounted() {
        eventbus.$emit("showFooter", false);
    }
};
</script>
<style scoped>
.top {
    width: 100%;
    height: 375px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.top img {
    width: 100%;
    height: 375px;
    z-index: -1;
    position: absolute;
}
.nav {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
    color: #ddd;
}
.van-icon-ellipsis:before {
    color: white;
    font-size: 22px;
}
.van-icon-arrow-left:before {
    color: white;
    font-size: 22px;
}
.beijing {
    position: relative;

    width: 100%;
    height: 200px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
    );
    border-bottom: 1px solid lightgray;
}
/* 个人信息 */
/* 签名 */
.autograph {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
}
.user {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 95%;
    height: 127px;
    padding-left: 14px;
}
.user .name {
    font-weight: bold;
    color: black;
}
.user .sex {
    color: white;
    background: #ff5277;
    display: inline-block;
    width: 40px;
    height: 20px;
    font-size: 14px;
    border-radius: 4px;
    margin: 0px 5px;
    text-align: center;
}
.user .renzheng {
    color: white;
    background: #ffa132;
    display: inline-block;
    width: 40px;
    height: 20px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
}
.user .guanzhu {
    height: 40px;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 40px;
    font-size: 16px;
    line-height: 40px;
    float: right;
    margin-top: 5px;
}
.user .guanzhu .fa {
    font-size: 20px;
    line-height: 40px;
}
.user .gold {
    text-align: center;
    width: 110px;
    height: 26px;
    background: gray;
    color: white;

    text-align: centers;
}
.user p {
    margin-left: 20px;
    font-size: 16px;
    margin-bottom: 3px;
}
.photo {
    width: 100%;
    height: 180px;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid #ccc;
}
.phototitle {
    padding: 0 15px;
}
.phoot .photolink {
    display: block;
    width: 100px;
    height: 100%;
}
.photomore {
    height: 123px;
    overflow-x: auto;
    white-space: nowrap;
}
.photomore li {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: inline-block;
    margin-left: 15px;
    margin-top: 15px;
    overflow: hidden;
}
.visit {
    width: 359px;
    height: 120px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid #ccc;
}
.visit_p {
    overflow-x: auto;
    white-space: nowrap;
    height: 100%;
}
.visit_p li {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    margin-left: 15px;
    margin-top: 15px;
}
.getgift {
    width: 359px;
    height: 130px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 50px;
}
.gifts {
    height: 100%;
    overflow-x: auto;
    white-space: nowrap;
}
.gifts li {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #ccc;
    border: 1px solid #ccc;
    display: inline-block;
    margin-left: 15px;
    position: relative;
}
.gifts li img {
    width: 50px;
    height: 50px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.gifts .gifts_count {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fe4d68;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-weight: 600;
}
footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    border-top: 1px solid #ddd;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #fe4d68;
}
.liwu {
    flex: 1;
    border-right: 1px solid #ddd;
}
.message {
    flex: 1;
}
.shipin {
    flex: 2;
    font-size: 20px;
    color: #fff;
    background: linear-gradient(to right, #fe4d68, #ff8660);
}
/* 底部弹出层 */
.jinbi {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    border-bottom: 1px solid #ccc;
}
.pup_liwu {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
}
.pup_liwu li {
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    line-height: 14px;
}
.pup_liwu li img {
    width: 60px;
    height: 60px;
}
</style>
