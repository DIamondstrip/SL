<template>
  <div class="account">
    <div class="account-name">
      <p>真实姓名：</p>
      <input type="text" placeholder="请输入真实姓名" />
    </div>
    <div class="account-zfb">
      <p>支付宝账号：</p>
      <input type="text" placeholder="填写支付宝账号" />
      <button>保存</button>
    </div>
    <div class="account-msg">
      <p>注意事项：</p>
      <p>1. 请认真核对您的个人信息以及绑定的收款账户，请务必确认所填信息真实有效</p>
      <p>2. 如因您填写的账户有误而出现问题，后果均由您本人承担</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.account {
  padding: 20px;
}
.account-name p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.account-zfb p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.account input {
  width: 300px;
  height: 10px;
  background: #f2f2f2;
  border: none;
  font-size: 16px;
  padding: 22px;
  border-radius: 5px;
}
.account button {
  background: #b2b2b2;
  color: white;
  border: none;
  width: 345px;
  height: 50px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border-radius: 3px;
  margin: 30px 0 10px 0;
}
.account-msg p {
  font-size: 14px;
  color: #999999;
}
</style>