<template>
  <div>
    <Test>上传证件</Test>
    <div class="idCard">
      <!-- 身份证号输入 -->
      <div class="idNum">
        <p>身份证号：</p>
        <p v-if="valueShow2" class="input">{{numShow}}</p>
        <input
          class="input"
          type="text"
          placeholder="请输入本人身份证号码"
          v-model.trim="value"
          v-if="valueShow1"
        />
      </div>
      <!-- 身份证上传 -->
      <div class="idUpload">
        <p>上传身份证：</p>
        <div class="uploader">
          <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
        </div>
        <div>
          <button @click="finish" ref="btnRef">{{butValue}}</button>
        </div>
      </div>
      <!-- 提示信息 -->
      <div class="idMsg">
        <p>上传要求：</p>
        <p>1. 请上传身份证清晰正面照</p>
        <p>2. 审核通过后证件照无法修改，请上传您本人真实有效的身份证</p>
        <p>
          3.
          若您上传虚假信息或盗用他人资料等，我司有权对您进行封号处理，情节严重将追究法律责任
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from "../../eventbus";
import Test from "../../components/Test";
export default {
  name: "idCard",
  data() {
    return {
      value: "",
      fileList: [],
      valueShow1: true,
      valueShow2: false,
      numShow: "",
      butValue: "完成"
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 按钮点击事件
    finish() {
      if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value)) {
        this.$notify({ background: "green", message: "上传成功" });
        this.butValue = "已上传";
        this.valueShow1 = false;
        this.valueShow2 = true;
        this.numShow = this.value;
      } else {
        this.$toast({ type: "fail", message: "请输入正确的18位身份证号" });
        this.value = "";
        this.$refs.btnRef.style = "background:#b2b2b2";
      }
    }
  },
  computed: {},
  components: {
    Test
  },
  mounted() {
    eventbus.$emit("showFooter", false);
  },
  updated() {
    if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value)) {
      this.$refs.btnRef.style = "background:green";
    }
  }
};
</script>
<style scoped>
.idCard {
  padding: 20px;
  margin-top: -20px;
}
.idNum p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.idUpload p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.idNum .input {
  width: 300px;
  height: 10px;
  background: #f2f2f2;
  border: none;
  font-size: 14px;
  padding: 20px;
  border-radius: 5px;
  line-height: 3px;
}
.uploader {
  padding-left: 30px;
  margin: 14px 0;
}
.idUpload button {
  background: #b2b2b2;
  color: white;
  border: none;
  width: 345px;
  height: 50px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border-radius: 3px;
}
.idMsg {
  margin: 20px;
}
.idMsg p {
  font-size: 14px;
  color: #999999;
}
</style>
