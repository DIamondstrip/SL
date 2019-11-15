<template>
    <div>
        <header class="top">
            <van-nav-bar
                fixed
                left-arrow
                class="nav"
                :border="false"
                title-active-color="rgba(250, 248, 248, 1)"
                @click-left="onClickLeft"
            >
                <van-icon name="ellipsis" slot="right" style="color:rgba(250, 248, 248, 1)" />
            </van-nav-bar>
            <img
                src="http://img3.utuku.china.com/650x0/ent/20190605/6b779f7d-1297-4974-a2c4-b15089661d2a.jpg"
                alt
            />
            <div class="beijing">
                <div class="user">
                    <span class="name">momomo</span>
                    <span class="sex">♀26</span>
                    <span class="renzheng">认证</span>
                    <van-button type="info" class="guanzhu">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;关注
                    </van-button>
                    <p class="gold">200金币/分钟</p>
                    <p>
                        <span style="font-size:14px;">ID:</span>
                        <span>我叫张泽禹·我是张泽禹·略略略</span>
                    </p>
                    <p>
                        <span style="font-size:14px;">签名:</span>
                        <span>我还是张泽禹发送方服务顾问</span>
                    </p>
                </div>
            </div>
            <!-- 个人信息 -->
        </header>
        <!-- pohot -->
        <div class="photo">
            <router-link to="/photoalbum">
            <van-cell title="相册" :border="false" is-link to />
            <ul class="photomore">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </router-link>
        </div>
        <!-- pohot -->
        <!-- visit -->
        <div class="visit">
            <van-cell title="来访的人" :border="false" is-link to />
            <ul class="visit_p">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <!-- visit -->
        <!-- gift -->
        <div class="getgift">
            <van-cell title="收到的礼物" :border="false" is-link to />
            <ul class="gifts">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <!-- 底部 -->
        <footer>
            <div class="liwu">
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
import Vue from "vue";
import eventbus from "../../eventbus";
export default {
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        onClickRight() {
            Toast("按钮");
        }
    },
    mounted() {
        eventbus.$emit("showFooter", false);
        //  let indexId = this.$route.params.id;
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
    background: none;
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
    width: 100%;
    height: 127px;
    background: linear-gradient(
        to top,
        rgb(250, 248, 248),
        rgba(255, 255, 255, 0.014)
    );
}
/* 个人信息 */
.user {
    width: 359px;
    height: 127px;
    /* background: white; */

    margin-left: 14px;
    border-bottom: 1px solid lightgray;
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
    width: 90px;
    height: 40px;
    background: linear-gradient(to right, #fe4d68, #ff895f);
    border: none;
    border-radius: 40px;
    font-size: 16px;
    line-height: 40px;
    float: right;
    margin-right: 10px;
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
    width: 359px;
    height: 160px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid #ccc;
}
.photomore {
    /* height: 100%; */
    /* margin-bottom: 10px; */
    overflow-x: auto;
    white-space: nowrap;
}
.photomore li {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: #ff895f;
    display: inline-block;
    margin-left: 15px;
    margin-top: 15px;
    /* margin-bottom: 15px; */
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
    background: #fe4d68;
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
    background: #fe4d68;
    display: inline-block;
    margin-left: 15px;
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
</style>
