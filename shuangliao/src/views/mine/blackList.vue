<template>
  <div>
    <Test>黑名单</Test>
    <div class="blackList">
      <ul>
        <!-- 此处数据应遍历赋值（li标签） -->
        <li class="li">
          <div class="blLi">
            <!-- 头像 -->
            <div class="blimg">
              <img src />
            </div>
            <!-- 个人信息 -->
            <div class="blmsg">
              <p class="msg1">
                <i>果捏捏</i>
                <span>♂26</span>
              </p>
              <p class="msg2">2019/8/12</p>
            </div>
            <button>移除</button>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Test from "../../components/Test";
export default {
  name: "blackList",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Test
  }
};
</script>

<style scoped>
.blackList {
  padding: 20px;
}
.blLi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 头像 */
.blimg {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}
.blackList button {
  width: 70px;
  height: 35px;
  border-radius: 25px;
  border: none;
  font-size: 18px;
  text-align: center;
  line-height: 35px;
  color: white;
  background: linear-gradient(to right, #fe4c68, #ff8a5f);
}
/* 信息 */
.blmsg {
  margin-left: -100px;
}
.msg1 i {
  color: black;
  font-size: 18px;
  font-style: normal;
}
.msg1 span {
  display: inline-block;
  font-size: 12px;
  width: 30px;
  height: 15px;
  background: #3979fd;
  /* 女#ff5277 */
  border-radius: 2px;
  color: white;
  margin-left: 5px;
  text-align: center;
  line-height: 15px;
}
.msg2 {
  color: #999;
  font-size: 14px;
  margin-top: -5px;
}
</style>