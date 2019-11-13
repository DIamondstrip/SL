<template>
  <div class="myGift">
    <div>
      <Test>我的礼物</Test>
    </div>
    <van-tabs v-model="activeName">
      <hr />
      <!-- Tab切换=收到礼物 -->
      <van-tab title="收到" name="getGift">
        <!-- 礼物 -->
        <div class="getG">
          <ul>
            <!-- 此处数据应遍历赋值（li标签） -->
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
            </li>
            <li>
              <span class="span1">
                <van-icon name="point-gift" />
              </span>
              <span class="span2">火箭</span>
              <span class="span3">6</span>
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
            <li>
              <div class="mgLi">
                <!-- 头像 -->
                <div class="mgImg">
                  <img src />
                </div>
                <!-- 个人信息 -->
                <div class="mgMsg">
                  <p class="msg1">果捏捏</p>
                  <p class="msg2">
                    <i>赠送</i>
                    <span>XXXXX礼物</span>
                  </p>
                </div>
                <div class="msgDate">2019/8/12</div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </van-tab>
      <!-- Tab切换=送出礼物 -->
      <van-tab title="送出" name="putGift">
        <ul>
          <!-- 此处数据应遍历赋值（li标签） -->
          <li>
            <div class="mgLi">
              <!-- 头像 -->
              <div class="mgImg">
                <img src />
              </div>
              <!-- 个人信息 -->
              <div class="mgMsg">
                <p class="msg1">果捏捏</p>
                <p class="msg2">
                  <i>赠送</i>
                  <span>XXXXX礼物</span>
                </p>
              </div>
              <div class="msgDate">2019/8/12</div>
            </div>
            <hr />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Test from "../../components/Test";
export default {
  name: "sendGift",
  data() {
    return {
      activeName: ""
    };
  },
  methods: {},
  created() {
    this.activeName = this.$route.params.giftName;
  },
  computed: {},
  components: {
    Test
  }
};
</script>

<style scoped>
hr {
  margin: 0;
}
/* 礼物 */
.getG ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.getG ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.getG .span1 {
  font-size: 30px;
  display: inline-block;
  height: 35px;
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