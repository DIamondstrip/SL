<template>
  <div class="idCard">
    <!-- 身份证号输入 -->
    <div class="idNum">
      <p>身份证号：</p>
      <input type="text" placeholder="请输入本人身份证号码" />
    </div>
    <!-- 身份证上传 -->
    <div class="idUpload">
      <p>上传身份证：</p>
      <div class="uploader">
        <van-uploader />
        <van-uploader />
      </div>
      <div>
        <button>完成</button>
      </div>
    </div>
    <!-- 提示信息 -->
    <div class="idMsg">
      <p>上传要求：</p>
      <p>1. 请上传身份证清晰正反面照</p>
      <p>2. 审核通过后证件照无法修改，请上传您本人真实有效的身份证</p>
      <p>3. 若您上传虚假信息或盗用他人资料等，我司有权对您进行封号处理，情节严重将追究法律责任</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "idCard",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {}
};
</script>
<style scoped>
.idCard {
  padding: 20px;
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
.idNum input {
  width: 300px;
  height: 10px;
  background: #f2f2f2;
  border: none;
  font-size: 16px;
  padding: 22px;
  border-radius: 5px;
}
.uploader {
  padding-left: 30px;
  margin: 15px 0;
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