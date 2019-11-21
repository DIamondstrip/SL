<template>
  <div>
    <Test></Test>
    <ul>
      <li class="title">完善资料</li>
      <li class="head">
        <!-- <span><button>+</button></span> -->
        <div class="imginfo">
          上传头像
          <van-uploader
            :after-read="afterRead"
            id="uploadavatar"
            v-model="fileList"
            :max-count="1"
            result-type="dataUrl"
          />
          <!-- <UploadAvatar ></UploadAvatar> -->
        </div>
      </li>
      <li class="name">
        昵称
        <span>
          {{ usernickname }}
          <button @click="editnickname()">&gt;</button>
        </span>
        <!-- <EditAvatar></EditAvatar> -->
      </li>
      <li class="born">
        出生日期
        <span>
          {{ date }}
          <button is-link @click="showdate">&gt;</button>
        </span>
      </li>
      <li class="button_c">
        <button
          @click="SubmitData"
          v-bind:class="bgbtn"
          :disabled="codeDisabled"
        >
          完成
        </button>
      </li>
    </ul>
    <!-- nickname 称昵弹窗 -->
    <div
      class="van-popup van-popup--bottom"
      style="z-index: 2012;"
      id="nickname111"
      v-bind:style="isActive ? nickname : active"
    >
      <div class="van-contact-edit">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>姓名</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                maxlength="30"
                placeholder="请填写姓名"
                class="van-field__control"
                ref="usernicknamecomfire"
              />
            </div>
            <div ref="Itip">{{ inputtip }}</div>
          </div>
        </div>

        <div class="van-contact-edit__buttons">
          <button
            class="van-button van-button--danger van-button--normal van-button--block"
            @click="savenickname"
          >
            <span class="van-button__text">保存</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 日期弹窗 -->
    <van-popup v-model="show_date" position="bottom" :style="{ height: '40%' }">
      <!-- 弹窗内容 -->
      <van-datetime-picker
        v-model="currentDate"
        title="日期"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="date_onCancel"
        @confirm="date_onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import Test from "./Test";
import eventbus from '../eventbus'
// 引入axios
const axios = require("axios");

export default {
  components: {
    Test
  },
  name: "datacomplete",
  data() {
    return {
      // 是否禁用按钮
      codeDisabled: false,
      // 完成按钮的颜色
      bgbtn: "complete_btn1",
      // 提示
      inputtip: "",
      // 图片数据
      phototi:[{url:""}],
     
      // 日期数据
      show_date: false,
      currentDate: new Date(),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      url: "file", //文件解析后的 file 对象
      date: "",
      phone: "",
      sex: "",
      usernickname: "",
      isActive: true,
      nickname: {
        // position: "absolute",
        // left: "0px",
        // bottom: "-210px",
        display:'none',
        transition: "all 1s ease-in"
      },
      active: {
        position: "absolute",
        left: "0px",
        bottom: "0px",
        transition: "all 1s ease-in"
      }
    };
  },

  mounted() {
    eventbus.$emit('showFooter',false)
    // 挂载时接收路由传递过来的参数

    this.sex = this.$route.params.sex;
    this.phone= JSON.parse(window.localStorage.getItem('userInfo')).tel;
    console.log(this.phone);
    console.log(this.sex);
  },
  methods: {
    // 图片上传
     afterRead(file) {
      this.uploadImg(file.file);},
    uploadImg(file) {
      let formdata1 = new FormData();// 创建form对象
      // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('file',file);
      formdata1.append("file", file);
      console.log
      this.axios //是因为在main.js写在vue实例里
      this.axiosAjax
        .post("/file/imageupload", formdata1)
        .then(res => {   
          console.log(res); //res 为接口返回值
          this.phototi[0].url=res.data.data
        })
        .catch(() => {console.log(error)});
    },
    // 日期有关事件
    showdate() {
      this.show_date = true;
    },
     date_onConfirm(type) {
    let year =type.getFullYear();
    let month =type.getMonth() + 1;
    let day =type.getDate();
    if (month < 10) {
    month = "0" + month;
    }
    if (day < 10) {
    day = "0" + day;
    }
    this.date = year + "-" + month + "-" + day;
      this.show_date = false
    },
    date_onCancel() {
    this.show_date = false
    },

    editnickname() {
      //编辑称昵,从底部向上滑出
      this.isActive = false;
    },
    savenickname() {
      if (this.$refs.usernicknamecomfire.value === "") {
        this.inputtip = "输入不能为空，请输入称昵";
        this.isActive = false;
      } else {
        //编辑称昵,从页面消失，回到初始状态
        this.isActive = true;
        console.log(this.$refs.usernicknamecomfire.value);
        this.usernickname = this.$refs.usernicknamecomfire.value;
        this.inputtip = "";
      }
    },
    SubmitData() {
         this.$axios({
      method: "post",
      url: "/editUserInfo",
     data:{
            tel:this.phone,
            nick:this.usernickname,
            sex:this.sex,
            birthday:this.date,
          //   address:this.city,
          //   autograph:this.own_write,
           avatar:this.phototi[0].url,
      }
     
    })
      .then(response => {
        console.log(response.data)
        this.$router.push("/");
      })  
      .catch(function(error) {

        console.log(error);
      });
  
    },



    // }
  }
};
</script>

<style scoped>
/* 总体样式布局 --王昕晨 */
.main {
  width: 80%;
}
ul {
  margin-left: 30px;
  margin-right: 30px;
}
ul li {
  border-bottom: 0.5px solid #cbc7c4;
  text-align: left;
  font-size: 15px;
  padding: 30px 0;
  color: #b2b2b2;
}
ul li span {
  float: right;
}
ul li span button {
  background: none;
  border: none;
}
/* 图片添加按钮样式及定位 --王昕晨 */
ul .head span {
  /* height: 50px;  */
  position: relative;
}

/* yhr 上传头像的样式，颜色未改变未灰色*/
.imginfo {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
ul .head #uploadavatar .van-uploader__upload {
  width: 50px;
  height: 50px;
  background: #cbc7c4;
  color: white;
  border-radius: 25px;
  font-size: 17px;
  font-weight: 900;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
}
.van-uploader__input {
  border-radius: 50%;
  background: #cbc7c4;
}

.uploadavatar {
  border-radius: 50%;
  background: #cbc7c4;
}

/* 称昵弹出的保存按钮 */
.van-button__text {
  color: aliceblue;
}

/* 输入的span信息 */
span {
  color: #b2b2b2;
}

ul .button_c button.complete_btn1 {
  background-color: #ee0a24;
}

ul .button_c button.complete_btn2 {
  background-color: #b2b2b2;
  color: aliceblue;
}

/* ------------------------------------- */
ul .title {
  font-size: 25px;
  font-weight: 900;
  border-bottom: none;
  color: black;
}
ul .button_c {
  border-bottom: none;
}
ul .button_c button {
  width: 100%;
  border: none;
  color: white;
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;
}
</style>
