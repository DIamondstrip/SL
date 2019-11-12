<template>
  <div class="app">
    <Test>提取明细</Test>
    <ul>
      <li class="firstch">
        <span>提取</span>
        <i>-100</i>
      </li>
      <li class="lastch">
        <span>2019/08/12 12:26</span>
        <i>进行中</i>
      </li>
    </ul>
    <ul>
      <li class="firstch">
        <span>提取</span>
        <i>-100</i>
      </li>
      <li class="lastch">
        <span>2019/08/12 12:26</span>
        <i>已到账</i>
      </li>
    </ul>
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
.app {
  width: 100%;
}
.app ul {
  margin-top: 12px;
  margin-left: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.firstch span {
  font-size: 20px;
}
.firstch i {
  font-size: 20px;
  color: red;
  font-style: normal;
  float: right;
  margin-right: 15px;
}
.lastch span {
  font-size: 18px;
  color: #999999;
}
.lastch i {
  font-size: 18px;
  color: #999999;
  font-style: normal;
  float: right;
  margin-right: 15px;
}
</style>
