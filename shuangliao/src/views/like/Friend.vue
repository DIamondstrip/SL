<template>
  <div class="friend">
    <div class="header">
      <router-link to="/search">
        <li class="fa fa-search" aria-hidden="true" @click="search"></li>
      </router-link>

            <li class="title">交友</li>
            <li class="isex">只看异性</li>
        </div>
        <van-tabs style="posi" v-model="active" :offset-top="50" sticky>
            <van-tab title="红人" class="hongren">
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(bimg,index) of items.banner" :key="index">
                        <a :href="bimg.url">
                            <img :src="bimg.image" alt class="tpic" />
                        </a>
                    </van-swipe-item>
                </van-swipe>
                <ul class="content">
                    <li v-for="item of items.list" :key="item.uid">
                        <!-- :to="'/details/'+item.id'" 传递数据给详情页 -->
                        <router-link :to="'/details/'+item.uid">
                            <img :src="item.head_url" alt />
                            <div class="mask">
                                <p>
                                    <span>{{item.nickname}}</span>

                                    <span class="sex" v-if="item.gender==1" :class="{boy:true}">
                                        <i class="fa fa-mars" aria-hidden="true"></i>
                                        <em class="age">{{item.age}}</em>
                                    </span>
                                    <span class="sex" v-else :class="{girl:true}">
                                        <i class="fa fa-venus" aria-hidden="true"></i>
                                        <em class="age">{{item.age}}</em>
                                    </span>
                                    <em class="text">{{item.content}}</em>
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
import eventbus from '../../eventbus.js';
export default {
    data() {
        return {
            show: "",
            active: 0,
            items: {
                banner: [
                    {
                        image:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-28/2b45b2999f42df2aa3bf5003ea059e7c.png",
                        url_type: 1,
                        url: "http://m.travelbaby.cn/Lm/pay?uid=10010096",
                        title: "nan ",
                        target: 1
                    },
                    {
                        image:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2017-12-26/e4ed3f6058114525caaa4c2a639da7cc.jpg",
                        url_type: 1,
                        url: "http://m.travelbaby.cn/LmTest/rankListHot",
                        title: "男推荐",
                        target: 0
                    }
                ],
                list: [
                    {
                        uid: 10010005,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/4cdeffc62a7eb07bed96468169e50a67.jpg",
                        is_video: 1,
                        nickname: "哦",
                        gender: 1,
                        is_auth: 0,
                        age: 27,
                        constellation: "",
                        id: 62,
                        created: "2019-07-11 17:05:06",
                        content: "测试新版本动态发布",
                        type: 2,
                        praise_count: 0,
                        rated_count: 0,
                        city: "杭州",
                        pic: [
                            {
                                id: 79,
                                uid: 10010006,
                                did: 62,
                                url:
                                    "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f9425ef0b6fcfa72e07cd438a6fd82e0.jpg",
                                created: "2019-07-11 17:05:06",
                                status: 1,
                                updated: "2019-07-11 17:05:06"
                            },
                            {
                                id: 80,
                                uid: 10010006,
                                did: 62,
                                url:
                                    "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f9425ef0b6fcfa72e07cd438a6fd82e0.jpg",
                                created: "2019-07-11 17:05:06",
                                status: 1,
                                updated: "2019-07-11 17:05:06"
                            }
                        ],
                        video: {},
                        is_praise: 0,
                        is_rated: 0
                    },
                    {
                        uid: 10010022,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/60292b5e5f074f6d33eb39f761834c3e.jpg",
                        is_video: 1,
                        nickname: "隔壁滩",
                        gender: 2,
                        is_auth: 0,
                        age: 26,
                        constellation: "",
                        content: "ask的肌肤萨克结果问题"
                    },
                    {
                        uid: 10010074,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-28/069b6840ea405eb6ea12674f15ece1ac.jpg",
                        is_video: 1,
                        nickname: "一",
                        gender: 2,
                        is_auth: 0,
                        age: 18,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010130,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-27/e2083d831930f1dd60fea90e10b00f98.jpg",
                        is_video: 1,
                        nickname: "伊凡",
                        gender: 1,
                        is_auth: 0,
                        age: 29,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010125,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-26/f5e767ec983b953e216f4e4a065d0b2e.jpg",
                        is_video: 1,
                        nickname: "枭 路",
                        gender: 2,
                        is_auth: 0,
                        age: 25,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010123,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-25/c14283c4c1cf9a7e52f21ff61f45bcfe.jpg",
                        is_video: 1,
                        nickname: "刘涛",
                        gender: 2,
                        is_auth: 0,
                        age: 26,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010112,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-07-31/9702a7431b9c02326b7adc7b416847ad.jpg",
                        is_video: 1,
                        nickname: "不敢吃",
                        gender: 1,
                        is_auth: 0,
                        age: 27,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010109,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-07-31/759fc1ff5b69b5a7753e3fc34e8f4e31.jpg",
                        is_video: 1,
                        nickname: "白娘？子",
                        gender: 2,
                        is_auth: 0,
                        age: 20,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010104,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-03-05/5da946f991efa1ccb5ab3cabecafee74.jpg",
                        is_video: 1,
                        nickname: "女人",
                        gender: 1,
                        is_auth: 0,
                        age: 27,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    },
                    {
                        uid: 10010010,
                        head_url:
                            "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f61a7f62bfb0d067552db0450f315adf.jpg",
                        is_video: 1,
                        nickname: "广告路",
                        gender: 2,
                        is_auth: 0,
                        age: 24,
                        constellation: "",
                        content: "测试新版本动态发布测试新版本动态发布测试新版本动态发布",
                    }
                ],
                qr_code: ""
            },
            err: 0,
            msg: "",
            server_time: "2019-07-01 15:36:25"
        };
    },
    components: {},
    methods: {
        search() {
            this.$router.push({ path: "/search" });
        }
    },
  mounted() {
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
    background: linear-gradient(to right,#FE5267 60%,#FF8660);
    /* background: #ff7363; */
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
