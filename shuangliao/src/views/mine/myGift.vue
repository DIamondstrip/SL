<template>
  <div class="myGift">
    <div>
      <Test>我的礼物</Test>
    </div>
    <van-tabs v-model="activeName">
      <hr />
      <!-- Tab切换=收到礼物 -->
      <van-tab title="收到"
               name="getGift">
        <!-- 礼物 -->
        <div class="getG">
          <ul>
            <!-- 此处数据应遍历赋值（li标签） -->
            <li v-for="(getL1,index) in getList1"
                :key="index">
              <span class="span1">
                <img :src="getL1.url" />
              </span>
              <span class="span2">{{getL1.gName}}</span>
              <span class="span3">{{getL1.oCount}}</span>
            </li>
          </ul>
        </div>
        <!-- 提示信息 -->
        <div class="msgG">
          <hr />
          <div>
            <p class="p1">如何获得礼物：</p>
            <p class="p2">视频、文字聊天、别人访问你的主页时，都有机会获得</p>
          </div>
          <hr />
        </div>
        <!-- 赠送者 -->
        <div class="manG">
          <ul>
            <!-- 此处数据应遍历赋值（li标签） -->
            <li v-for="(getL2,index) in getList2"
                :key="index">
              <div class="mgLi">
                <!-- 头像 -->
                <div class="mgImg">
                  <img :src="getL2.avatar" />
                </div>
                <!-- 个人信息 -->
                <div class="mgMsg">
                  <p class="msg1">{{getL2.nick}}</p>
                  <p class="msg2">
                    <i>赠送</i>
                    <span>{{getL2.gName}}礼物</span>
                  </p>
                </div>
                <div class="msgDate">{{getL2.oTime}}</div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </van-tab>
      <!-- Tab切换=送出礼物 -->
      <van-tab title="送出"
               name="putGift">
        <ul>
          <!-- 此处数据应遍历赋值（li标签） -->
          <li v-for="(sendL,index) in sendList"
              :key="index">
            <div class="mgLi">
              <!-- 头像 -->
              <div class="mgImg">
                <img :src="sendL.avatar" />
              </div>
              <!-- 个人信息 -->
              <div class="mgMsg">
                <p class="msg1">{{sendL.nick}}</p>
                <p class="msg2">
                  <i>赠送</i>
                  <span>{{sendL.gName}}礼物</span>
                </p>
              </div>
              <div class="msgDate">{{sendL.oTime}}</div>
            </div>
            <hr />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import eventbus from '../../eventbus'
import Test from '../../components/Test'
export default {
  name: 'sendGift',
  data() {
    return {
      activeName: '',
      getList1: [],
      getList2: [],
      sendList: [],
      user: ''
    }
  },
  methods: {},
  created() {
    this.activeName = this.$route.params.giftName
  },
  mounted() {
    eventbus.$emit('showFooter', false)
    this.user = JSON.parse(window.localStorage.getItem('userInfo'))
    //发送异步请求 （收到礼物）
    this.$axios({
      method: 'post',
      url: '/gift/usergifts',
      params: { tel: this.user.tel, state: '1' }
    })
      .then(response => {
        // console.log("收到礼物", response.data.data);
        this.getList1 = response.data.data.gifts
        this.getList2 = response.data.data.users
      })
      .catch(error => {
        console.log('出错啦！', error)
      })

    //发送异步请求 （送出礼物）
    this.$axios({
      method: 'post',
      url: '/gift/usergifts',
      params: { tel: '13516783231', state: '2' }
    })
      .then(response => {
        // console.log("送出礼物", response.data.data);
        this.sendList = response.data.data
      })
      .catch(error => {
        console.log('出错啦！', error)
      })
  },
  computed: {},
  components: {
    Test
  }
}
</script>

<style scoped>
hr {
  margin: 0;
}
/* 礼物 */
.getG ul {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
}
.getG ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.getG .span1 img {
  display: block;
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}
.getG .span2 {
  color: #999;
  font-size: 12px;
}
.getG .span3 {
  color: #ff3e5d;
  font-size: 8px;
}
/* 提示信息 */
.msgG div {
  padding: 0 20px;
}
.msgG .p1 {
  color: black;
  font-size: 12px;
  line-height: 30px;
}
.msgG .p2 {
  color: #999;
  font-size: 12px;
  line-height: 30px;
}
/* 赠送者 */
.mgLi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.mgLi p {
  line-height: 20px;
}
.mgImg {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}
.msg1 {
  color: black;
  font-size: 16px;
}
.msg2 i {
  color: #999;
  font-size: 14px;
}
.msg2 span {
  color: #80a3fe;
  font-size: 14px;
  margin-left: 5px;
}
.mgMsg {
  margin-left: -80px;
}
.msgDate {
  color: #999;
  font-size: 14px;
}
</style>
