<template>
  <div>
    <!-- 头部 -->
    <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1; border-bottom:1px solid #ccc">
      <div class="van-nav-bar__left">
        <!-- <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"> -->
            <van-icon name="down" class="pb_icon" />
          <!---->
        <!-- </i> -->
      </div>
      <div class="van-nav-bar__title van-ellipsis">手机号绑定</div>
      <div class="van-nav-bar__right"></div>
    </div>

    <!-- input框 -->
    <input type="text" placeholder="请输入手机号"/>
    <input type="text" class="obtain_code" placeholder="请输入验证码" />
    <button class="obain_btn">立即获取</button>
    <button class="done">完成</button>
  </div>
</template>

<script>
export default {
  name: "PhoneBind"
};
</script>

<style scope>
.main {
  width: 80%;
}
.van-nav-bar__left .pb_icon{
    transform:rotate(90deg);
    font-size: 24px;
    color:black;
}
.van-doc-nav-bar{
    margin-bottom: 10px;
}
input {
  border: 1px solid #f2f2f2;
  margin: 5px 0;
  background: #f2f2f2;
  outline: none;
  height: 55px;
  width: 100%;
  border-radius: 10px;
  padding: 5px 0;
}
.obtain_code {
  width: 70%;
}
button {
  margin-left: 4px;
  height: 65px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 18px;
}
.obain_btn {
  margin-top: 10px;
  width: 28%;
  background: linear-gradient(to right, red, orange);
}
.done {
  margin-top: 50px;
  width: 100%;
}
</style>