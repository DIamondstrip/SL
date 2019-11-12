<template>
  <div id="app">
    <Test>我的金币</Test>
    <div class="header">
      <div class="deposit">
        <span>￥29.99</span>
        <i>累计总提现</i>
      </div>
      <span>|</span>
      <div class="deposit">
        <span>￥29.99</span>
        <i>累计总提现</i>
      </div>
    </div>
    <p>当前余额</p>
    <div class="coins">
      <i>￥</i>
      <span>2000</span>
    </div>
    <div class="inputs">
      <input placeholder="请输入提现金额" />
      <button class="all">全提</button>
    </div>
    <div class="buttons">
      <router-link to="/Withdraw">
        <button>立即提现</button>
      </router-link>
      <br />
    </div>
    <div class="explain">
      <p>提取说明</p>
      <p>1、提现金额最小为50RMB</p>
      <p>2、提现数字为50的整数倍</p>
      <p>3、提现到账时间为1~3工作日</p>
      <p>4、换算比例为100金币=1RMB</p>
      <p>5、充值、平台赠送等非收益金币不可提取</p>
    </div>
    <div class="massage">
      <p>账号信息</p>
      <button>修改</button>
    </div>
    <div class="names">
      <p>真实姓名：陈*涵</p>
      <p>支付宝账号：62386425478197**** ***21</p>
    </div>
    <div class="explains">
      <p>注意事项</p>
      <p>1、请认真核对个人信息及绑定的账户，请务必确认所填信息真实有效</p>
      <p>2、如由您本人填写账号出现的问题，均由你本人承担</p>
    </div>
  </div>
</template>
<script>
import eventbus from "../../eventbus";
import Test from "../../components/Test";

export default {
  components: {
    Test
  },
  mounted() {
    eventbus.$emit("showFooter", false);
  }
};
</script>
<style scoped>
#app {
  width: 90%;
}
.header {
  width: 100%;
  height: 60px;
  background: #e5e5e5;
  margin-top: 20px;
  text-align: center;
  position: relative;
}
.header i {
  display: block;
  font-size: 6px;
  font-style: normal;
  margin-top: 3px;
  color: #999999;
}
.header > span {
  margin-bottom: -10px;
  position: absolute;
  top: 22px;
  color: #999999;
  font-size: 16px;
}

.deposit span {
  display: block;
  font-size: 16px;
  margin-top: 13px;
}
.deposit {
  display: inline-block;
  width: 47%;
}
.coins {
  width: 100%;
}
.coins i {
  font-size: 12px;
  font-style: normal;
}
.coins span {
  font-size: 20px;
  font-weight: 800;
}
.inputs {
  width: 100%;
  border-radius: 3px;
}
.inputs button {
  font-size: 12px;
  width: 17%;
  display: inline-block;
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  height: 38px;
  padding-bottom: 2px;
}
p {
  font-size: 12px;
  margin-top: 14px;
  width: 100%;
}
input {
  font-size: 12px;
  width: 80%;
  height: 36px;
  margin-top: 5px;
  display: inline-block;
  border: none;
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
  padding-left: 7px;
}
.buttons {
  width: 100%;
}
.buttons button {
  margin-top: 15px;
  width: 100%;
  height: 35px;
  background: #b2b2b2;
  border: none;
  display: block;
  font-size: 14px;
  color: white;
}

.explain {
  width: 100%;
  margin-top: 5px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 22px;
}
.explain p {
  font-size: 6px;
  margin-top: 5px;
  color: #999999;
}
.massage {
  width: 100%;
}
.massage p {
  font-size: 12px;
  margin-top: 18px;
  display: inline-block;
  width: 80%;
}
.massage button {
  font-size: 12px;
  width: 17%;
  display: inline-block;
  height: 25px;
  border-radius: 12px;
  border: 0;
}
.names {
  width: 100%;
}
.names p {
  margin-top: 5px;
}
.explains {
  width: 100%;
  margin-top: 5px;
}
.explains p {
  font-size: 6px;
  margin-top: 5px;
  color: #999999;
}
</style>
