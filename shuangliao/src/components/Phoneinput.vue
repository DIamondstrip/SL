<template>
  <div class="login_container">
    <Test></Test>
    <h3 class="login_title">验证码登录</h3>

    <!-- 登录页面主体内容 -->
    <div class="login_body">
      <!-- 双向绑定 -->
      <!-- 可以通过v-model绑定键盘当前输入值 -->
      <van-field
        readonly
        clickable
        :value="value"
        @touchstart.native.stop="show = true"
        placeholder="请输入您的手机号码"
      />
      <!-- 输入手机时的提示信息 -->
      <span ref="tips">{{tips}}</span>

      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="11"
        delete-button-text="×"
        @blur="show = false"
      />
      <!-- 确认后要禁用状态 disabled-->

      <!-- button按钮 -->
      <button @click="toLogin" class="login_done_btn">获取验证码</button>

      <a href="#" class="wechat_icon">
        <!-- 手机号登录中自定义icon -->
        <van-icon class-prefix="my-icon" name="extra" />微信登录
      </a>

      <!-- 勾选用户协议 -->
      <div class="=protocol">
        <div id="protocol_text">
          <input id="selct" name="selct" type="radio" class="selct" />
          勾选代表您已满18岁并同意
          <a href="#" target="_blank">《用户协议》</a>和
          <a href="#" target="_blank">《隐私政策》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Test from "./Test";
// 引入axios
// import axios from './axios' 报错
const axios = require("axios");

export default {
  name: "phoneinput",
  data() {
    return {
      show: false,
      value: "",
      selected: false,
      tips: "",
      phone: "",
      appear: ""
    };
  },
  components: {
    Test
  },
  methods: {
    // sendMsgtoParent(){
    //   this.appear=false;
    //   this.$emit('switchcomps',this.appear)
    // },
    //login登录方法
    toLogin() {
      //其他的校验逻辑

      // 登录验证
      if (this.value === "") {
        this.tips = "手机号码不能为空";
      } else {
        const reg = new RegExp("^[1]{1}[3,4,5,7,8,9]{1}[0-9]{9}$"); //规则
        if (reg.test(this.value)) {
          // 保存输入的手机号
          this.phone = this.value;
          // 组件更改-- 改变store中的appear数据
          // console.log(this);
          // function changelogin() {
          //   // return this.$store.dispatch("changelogin", this.phone); 读取不到？？？？
          // }

          // this.appear=false;
          // 子向父组件传值
          this.$emit("switchcomps", {
            appear: false,
            phone: this.phone
          });


          // 输入完手机号，像后端发起请求，获取验证码
          axios.get('/sms/sendsms',{
            //传参
            params:{
              // Origin:"*",
              tel:this.phone
            }
          })
            .then((response)=>{
              console.log(response.data);
              return response.data;
            })
            .catch((error)=>{
              console.log('简写形式')
              console.log(error)
            })
        } else {
          this.tips = "手机号码有误，请重新输入";
        }
      }

      //...
      //获取未登录的时候跳到登录页面的redirect地址
      // const redirect = this.$route.query.redirect;
      // if (redirect) {
      //   //存在回跳地址就回跳
      //   this.$router.push(redirect);
      // } else {
      //   //否则就跳到默认的首页
      //   this.$router.push({
      //     name: "login"
      //   });
      // }
      // input输入框清空
      // this.value = "";
    }
  }
};
</script>


<style scoped>
.login_container {
  position: relative;
}
.main {
  margin: 5%;
}
.login_title {
  text-align: left;
  margin: 20px 0;
}
.login_body {
  margin: 0 10%;
}
.login_btn {
  margin: 55px 0 0;
}
/* 勾选协议 */
.protocol {
  position: fixed;
  bottom: -216px;
}
#protocol_text {
  font-size: 14px;
}
/* 切换微信登录 */
.my-icon {
  font-family: "my-icon";
}
.wechat_icon {
  font-size: 14px;
}

.my-icon-extra::before {
  content: "\e626";
}

/* button */
.login_done_btn {
  margin-left: 4px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 50px;
  width: 100%;
}

/* 输入手机号过程提示信息 */
span {
  font-size: 14px;
  color: red;
}
</style>
