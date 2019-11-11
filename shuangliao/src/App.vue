<template>
  <div id="app">
  <router-view class="main"></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
      data: {
  items: {
    "banner": [
      {
        "image": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-28/2b45b2999f42df2aa3bf5003ea059e7c.png",
        "url_type": 1,
        "url": "http://m.travelbaby.cn/Lm/pay?uid=10010096",
        "title": "nan ",
        "target": 1
      },
      {
        "image": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2017-12-26/e4ed3f6058114525caaa4c2a639da7cc.jpg",
        "url_type": 1,
        "url": "http://m.travelbaby.cn/LmTest/rankListHot",
        "title": "男推荐",
        "target": 0
      }
    ],
    "list": [
      {
        "uid": 10010005,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/4cdeffc62a7eb07bed96468169e50a67.jpg",
        "is_video": 1,
        "nickname": "哦",
        "gender": 2,
        "is_auth": 0,
        "age": 27,
        "constellation": "",
        "id": 62,
        "created": "2019-07-11 17:05:06",
        "content": "测试新版本动态发布",
        "type": 2,
        "praise_count": 0,
        "rated_count": 0,
        "city": "杭州",
        "pic": [
          {
            "id": 79,
            "uid": 10010006,
            "did": 62,
            "url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f9425ef0b6fcfa72e07cd438a6fd82e0.jpg",
            "created": "2019-07-11 17:05:06",
            "status": 1,
            "updated": "2019-07-11 17:05:06"
          },
          {
            "id": 80,
            "uid": 10010006,
            "did": 62,
            "url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f9425ef0b6fcfa72e07cd438a6fd82e0.jpg",
            "created": "2019-07-11 17:05:06",
            "status": 1,
            "updated": "2019-07-11 17:05:06"
          }
        ],
        "video":{},
        "is_praise": 0,
        "is_rated": 0
      },
      {
        "uid": 10010022,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/60292b5e5f074f6d33eb39f761834c3e.jpg",
        "is_video": 1,
        "nickname": "隔壁滩",
        "gender": 2,
        "is_auth": 0,
        "age": 26,
        "constellation": ""
      },
      {
        "uid": 10010074,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-28/069b6840ea405eb6ea12674f15ece1ac.jpg",
        "is_video": 1,
        "nickname": "一",
        "gender": 2,
        "is_auth": 0,
        "age": 18,
        "constellation": ""
      },
      {
        "uid": 10010130,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-27/e2083d831930f1dd60fea90e10b00f98.jpg",
        "is_video": 1,
        "nickname": "伊凡",
        "gender": 2,
        "is_auth": 0,
        "age": 29,
        "constellation": ""
      },
      {
        "uid": 10010125,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-26/f5e767ec983b953e216f4e4a065d0b2e.jpg",
        "is_video": 1,
        "nickname": "枭 路",
        "gender": 2,
        "is_auth": 0,
        "age": 25,
        "constellation": ""
      },
      {
        "uid": 10010123,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-12-25/c14283c4c1cf9a7e52f21ff61f45bcfe.jpg",
        "is_video": 1,
        "nickname": "刘涛",
        "gender": 2,
        "is_auth": 0,
        "age": 26,
        "constellation": ""
      },
      {
        "uid": 10010112,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-07-31/9702a7431b9c02326b7adc7b416847ad.jpg",
        "is_video": 1,
        "nickname": "不敢吃",
        "gender": 2,
        "is_auth": 0,
        "age": 27,
        "constellation": ""
      },
      {
        "uid": 10010109,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-07-31/759fc1ff5b69b5a7753e3fc34e8f4e31.jpg",
        "is_video": 1,
        "nickname": "白娘？子",
        "gender": 2,
        "is_auth": 0,
        "age": 20,
        "constellation": ""
      },
      {
        "uid": 10010104,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-03-05/5da946f991efa1ccb5ab3cabecafee74.jpg",
        "is_video": 1,
        "nickname": "女人",
        "gender": 2,
        "is_auth": 0,
        "age": 27,
        "constellation": ""
      },
      {
        "uid": 10010010,
        "head_url": "https://liaomeiapp.oss-cn-shanghai.aliyuncs.com/2018-01-12/f61a7f62bfb0d067552db0450f315adf.jpg",
        "is_video": 1,
        "nickname": "广告路",
        "gender": 2,
        "is_auth": 0,
        "age": 24,
        "constellation": ""
      }
    ],
    "qr_code": ""
  },
  "err": 0,
  "msg": "",
  "server_time": "2019-07-01 15:36:25"
}
    }
  },
    components:{
      Footer
    }
}
</script>
<style>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main {
    flex: 1;
  }
</style>
