<template>
  <div class="code_container">
    <Test></Test>
    <h3 class="code_title">输入验证码</h3>
    <div class="code_phone">{{ userphone }}</div>
    <div class="code_body">
      <!-- 验证码明文显示 -->
      <van-password-input
        :value="value"
        :mask="false"
        :length="6"
        :gutter="15"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        ref="CodeInput"
        style="border:1px solid #ccc"
      />

      <!-- 提示信息 -->
      <span ref="tipsCode">{{ tipsCode }}</span>

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        :maxlength="6"
        delete-button-text="×"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>

    <!-- button按钮 -->
    <!-- <button class="code_btn" @click="getcode" v-bind:class="bg" :disabled="codeDisabled">{{ text }}</button> -->
    <van-button type="warning" class="code_btn"  @click="getcode" v-bind:class="bg" :disabled="codeDisabled">{{ text }}</van-button>
    <button
      class="code_btn code_btn3"
      @click="submit"
      v-bind:class="bg2"
      :disabled="submitDisabled"
    >{{ text2 }}</button>
  </div>
</template>

<script>
import eventbus from '../eventbus'
import Test from "./Test";
// 引入axios
// import axios from './axios' 报错  ??????????????????????????????????
const axios = require("axios");
// 引入md5 ????????????????????????????????????
// import md5 from 'js-md5'
export default {
  name: "codeinput",
  // 接收父组件给我传的数据，同时要处理:用props初始化data中变量
  props: ["userphone"],
  data() {
    return {
      value: "",
      showKeyboard: true,
      // 是否禁用按钮
      codeDisabled: false,
      time: 6,
      bg: "code_btn1",
      text: "重新获取验证码",
      phone: this.userphone,
      yzmCode: "",
      tipsCode: "",
      bg2: "code_btn3",
      submitDisabled: false,
      text2: "登录"
    };
  },
  computed: {
    computedUserPhone() {
      return this.userphone;
    }
  },
  watch: {
    userphone: function(val) {
      //监听props中的属性
      this.phone = val;
    }
  },
  mounted() {
    // 写的路由，挂载时接收传递来的参数
    // this.phone = this.$route.params.phone;
    console.log(this.phone);
    eventbus.$emit('showFooter',false)
  },
  components: {
    Test,
    axios
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    submit() {
      this.text2 = "登录中...";
      // 点击登录后，登录按钮和发送验证码按钮被禁用
      this.submitDisabled = true;
      this.codeDisabled = true;
      // 登录和发送验证码按钮背景变灰色
      this.bg1 = "code_btn2";
      this.bg2 = "code_btn4";

      // 输入为空
      if (this.value === "") {
        this.tipsCode = "请输入验证码";
        this.text2 = "登录";
        // 按钮变回正常状态
        // 点击登录后，登录按钮和发送验证码按钮 取消禁用
        this.submitDisabled = false;
        this.codeDisabled = false;
        // 登录和发送验证码按钮背景变灰色
        this.bg1 = "code_btn1";
        this.bg2 = "code_btn3";
      } else {
        const codeReg = new RegExp(/^\d{6}$/); //验证码规则
        if (codeReg.test(this.value)) {
          // 请求后端，给用户发送手机验证码
          axios({
            method: "post",
            url: "/user/register",
            // data:{} json数据
            // params{} 拼接字符串到地址栏
            params: {
              tel: this.phone,
              verify: this.value
            }
          })
            .then(response => {
              let res = response.data
              // console.log(response.data);
              // 如果返回的ok,转跳首页，同时存本地存储---->这里还有再加个if,判断是否是新用户，若是则转跳到选择性别页面，若不是就转跳到首页next
              if (res.code == 10004) { //登陆成功，且是老用户
                // console.log(this.$router);
                // 存本地存储
                window.localStorage.setItem("userInfo", JSON.stringify(res.data)); 
                this.$router.push("/").catch(e => {});
              } else if (response.data.code == 10010) {//登陆成功，且是新用户
                // 存本地存储
                // 直接存储data 对象 json 序列化一下？？？变string
                window.localStorage.setItem("userInfo", JSON.stringify(res.data)); 
                // 转跳到选择性别的页面
                // this.$router.push("/sex").catch(e => {});
                // 转跳到选择性别的页面,携带用户手机号 (注：转跳到的页面用route.params 或者route.query接收)
                // this.$router.push("/code/" + this.phone);
                this.$router
                  .push({
                    name: "sex",
                    params: {
                      phone: this.phone
                      // tipsCode:this.value
                    }
                  })
                  .catch(e => {});

                // 错误
              } else if (response.data.code == 10005) {
                this.tipsCode="登录失败,验证码可能过期了，请重新获取一下哦";
                // 登录按钮和发送验证码按钮取消禁用
                this.submitDisabled = false;
                this.codeDisabled = false;
                // 登录和发送验证码按钮背景变正常色
                this.bg1 = "code_btn1";
                this.bg2 = "code_btn3";
              } else if (response.data.code == 10007) {
                this.tipsCode="验证码错误，请重新输入";
                // 登录按钮和发送验证码按钮取消禁用
                this.submitDisabled = false;
                this.codeDisabled = false;
                // 登录和发送验证码按钮背景变正常色
                this.bg1 = "code_btn1";
                this.bg2 = "code_btn3";
              } else if (response.data.code == 10002) {
                this.tipsCode="手机号格式不正确";
                // 登录按钮和发送验证码按钮取消禁用
                this.submitDisabled = false;
                this.codeDisabled = false;
                // 登录和发送验证码按钮背景变正常色
                this.bg1 = "code_btn1";
                this.bg2 = "code_btn3";
              }
            })
            .catch(err => {
              console.log(err);
              this.tipsCode = "请求失败：请重新获取验证码";
              this.text2 = "登录";
              this.value = "";
              // 登录按钮和发送验证码按钮取消禁用
              this.submitDisabled = false;
              this.codeDisabled = false;
              // 登录和发送验证码按钮背景变正常色
              this.bg1 = "code_btn1";
              this.bg2 = "code_btn3";
            });
          // 输入不符合正则规则
        } else {
          this.tipsCode = "请输入正确的验证码";
          this.text2 = "登录";
          this.value = "";
          // 登录按钮和发送验证码按钮 取消禁用
          this.submitDisabled = false;
          this.codeDisabled = false;
          // 登录和发送验证码按钮背景 变正常色
          this.bg1 = "code_btn1";
          this.bg2 = "code_btn3";
        }
      }
    },
    getcode() {
      // 重新获取验证码
      axios
        .get("/sms/sendsms", {
          //传参
          params: {
            // Origin:"*",
            tel: this.phone
          }
        })
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(error => {
          console.log("简写形式");
          console.log(error);
        });

      // 验证码倒计时
      this.bg = "code_btn2";
      this.time = 10;
      let timer = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(timer);
          this.text = "重新发送";
          this.bg = "code_btn1";
        } else {
          this.text = `${this.time}秒后重新发送`;
          this.codeDisabled = true;
          this.bg = "code_btn2";
        }
      }, 1000);
      this.bg = "code_btn1";
      // 清除输入框内容
      this.value = "";
    }
  }
};

      // 可以封装下axios,不然每个页面需要的时候都要重新请求
      // const url = " ";
      // console.log("url", url);

      
// axios.post('http://easy-mock.com/mock/59bb998de0dc663341abbf37/http:/easy-mock.com/new/example/1/post/axios',{
//   //传参
//   name:'nice'
// })
//   .then((response)=>{
//     console.log('简写形式')
//     console.log(response.data);
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

// 父子组件互相通信 https://segmentfault.com/a/1190000018008914
// Vue中用props给data赋初始值遇到的问题解决  https://www.jb51.net/article/151465.htm
</script>

<style scoped>
.main {
  width: 80%;
}
.code_title {
  margin: 30px 0 0;
  text-align: center;
}
.code_phone {
  text-align: center;
}
.code_body {
  width: 100%;
}

/* 验证码输入 */

/* 按钮-重新获取验证码 */
.code_btn {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  height: 56px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 18px;
  
  width: 80%;
}


.code_btn2 {
  background-color: #b2b2b2;
  color: aliceblue;
}

.code_btn3 {
  background-color: #3ae443;
  color: aliceblue;
}

.code_btn4 {
  background-color: #b2b2b2;
  color: aliceblue;
}

/* 输入验证码过程的提示信息 */
span {
  font-size: 14px;
}
</style>
