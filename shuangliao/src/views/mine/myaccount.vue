<template>
  <div class="box">
    <Test>我的明细</Test>
    <span>余额</span>
    <p>2000金币</p>
    <span>套餐</span>
    <div class="contain">
      <div class="meal">
        <i>套餐一</i>
        <em>100金币</em>
      </div>
      <b>
        <span>￥</span>
        <i>9.99</i>
      </b>
    </div>

    <div class="contain">
      <div class="meal">
        <i>套餐一</i>
        <em>100金币</em>
      </div>
      <b>
        <span>￥</span>
        <i>9.99</i>
      </b>
    </div>

    <div class="contain">
      <div class="meal">
        <i>套餐一</i>
        <em>100金币</em>
      </div>
      <b>
        <span>￥</span>
        <i>9.99</i>
      </b>
    </div>

    <div class="contain">
      <div class="meal">
        <i>套餐一</i>
        <em>100金币</em>
      </div>
      <b>
        <span>￥</span>
        <i>9.99</i>
      </b>
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
.box {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
span {
  font-size: 15px;
  color: #b8b8b8;
  display: inline-block;
  padding-top: 15px;
}
p {
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 1px solid #b8b8b8;
}
i {
  font-size: 18px;
  font-style: normal;
}
em {
  font-size: 14px;
}
.contain {
  background: #e5e5e5;
  margin-top: 20px;
  width: 100%;
  height: 70px;
  border-radius: 4px;
  padding-top: 8px;
}

.meal {
  display: inline-block;
  width: 50%;
  margin: 10px;
}
.meal > i {
  display: block;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
}
.meal em {
  display: block;
  font-style: normal;
  margin-top: 3px;
  color: #999999;
}
.contain b {
  margin-left: 60px;
  display: inline-block;

  width: 80px;
  border-radius: 18px;
  text-align: center;
  vertical-align: super;
  padding-bottom: 4px;
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
}
.contain b span {
  padding-left: 4px;
  padding-right: 6px;
  padding-top: 0px;
  color: white;
  font-size: 12px;
}
.contain b i {
  color: white;
  font-weight: normal;
}
</style>
