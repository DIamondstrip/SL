<template>
  <div class="app">
    <Test>我的关注</Test>
    <van-tabs v-model="activeName">
      <van-tab title="已关注" name="attention">
        <div class="container">
          <img />
          <div class="names">
            <li>
              <span>大呼呼呼</span>
              <i>♂26</i>
            </li>
            <p>2019/08/12&nbsp;&nbsp;&nbsp;&nbsp;关注</p>
          </div>
          <div class="attentions">
            <i>√</i>
            <span>已关注</span>
          </div>
        </div>
        <div class="container">
          <img />
          <div class="names">
            <li>
              <span>大呼呼呼</span>
              <i>♂26</i>
            </li>
            <p>2019/08/12&nbsp;&nbsp;&nbsp;&nbsp;关注</p>
          </div>
          <div class="attentions">
            <i>√</i>
            <span>已关注</span>
          </div>
        </div>
      </van-tab>

      <van-tab title="粉丝" name="b">
        <div class="container">
          <img />
          <div class="names">
            <li>
              <span>大呼呼呼</span>
              <i>♂26</i>
            </li>
            <p>2019/08/12&nbsp;&nbsp;&nbsp;&nbsp;关注你</p>
          </div>
          <div class="atten">
            <i>＋</i>
            <span>关注</span>
          </div>
        </div>
        <div class="container">
          <img />
          <div class="names">
            <li>
              <span>大呼呼呼</span>
              <i>♂26</i>
            </li>
            <p>2019/08/12&nbsp;&nbsp;&nbsp;&nbsp;关注你</p>
          </div>
          <div class="atten">
            <i>＋</i>
            <span>关注</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Test from "../../components/Test";
export default {
  data() {
    return {
      activeName: "attention"
    };
  },
  components: {
    Test
  }
};
</script>
<style scoped>
.app {
  width: 100%;
  margin-left: 30px;
}
.container {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}
.container img {
  display: inline-block;
  height: 50px;
  width: 50px;
  background: blue;
  border-radius: 50%;
}
.names {
  display: inline-block;
  margin-left: -80px;
  padding-bottom: 10px;
}
.names li {
  display: inline-block;
}
.names li span {
  font-size: 16px;
}
.names li i {
  display: inline-block;
  font-size: 6px;
  background: blue;
  color: white;
  margin-left: 10px;
  width: 40px;
  height: 18px;
  font-style: normal;
  border-radius: 10%;
  text-align: center;
}
.names p {
  font-size: 8px;
  color: #999999;
}
.attentions {
  display: inline-block;
  float: right;
  margin-right: 30px;
  font-size: 16px;
  color: #ffffff;
  background: #b2b2b2;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.attentions i {
  margin: 0 5px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  color: #b2b2b2;
  font-style: normal;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 4px;
}
.attentions span {
  border-radius: 10px;
}
.atten {
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
  display: inline-block;
  float: right;
  margin-right: 30px;
  font-size: 16px;
  color: #ffffff;

  width: 80px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.atten i {
  margin: 0 5px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  color: #b2b2b2;
  font-style: normal;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 4px;
}
</style>