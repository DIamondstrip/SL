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
            :after-read="onRead2"
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
        <button @click="SubmitData">完成</button>
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

// 引入axios
const axios = require("axios");

export default {
  components: {
    Test
  },
  name: "datacomplete",
  data() {
    return {
      // 图片数据
      fileList: [],
      imginfo: "",
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
        position: "absolute",
        left: "0px",
        bottom: "-210px",
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
    // 挂载时接收路由传递过来的参数
    this.phone = this.$route.params.phone;
    this.sex = this.$route.params.sex;
    console.log(this.phone);
    console.log(this.sex);
  },
  methods: {
    // 图片上传
    // onRead2方法会接收一个file参数，需要将file.file中的参数传到数据库，
    onRead2(file) {
      console.log("1:",file);
      console.log("2:", file.file
      );
      console.log("3:",file.content);
      // onRead2方法会接收一个file参数，获取关于上传头像的信息
      this.imginfo = file.file;
    },
    // 日期有关事件
    showdate() {
      this.show_date = true;
    },
    date_onConfirm(type) {
      this.date = type.toLocaleString().split(" ")[0];
      this.show_date = false;
      console.log(this.date);
    },
    date_onCancel() {
      this.show_date = false;
    },
    editnickname() {
      //编辑称昵,从底部向上滑出
      this.isActive = false;
    },
    savenickname() {
        //编辑称昵,从页面消失，回到初始状态
        this.isActive = true;
      console.log(this.$refs.usernicknamecomfire.value);
      this.usernickname = this.$refs.usernicknamecomfire.value;
    },
    SubmitData() {
      // 所有资料填写完毕，将相应信息传给后端，同时转跳到首页
      axios
        .post("/user/register", {
          //传参
            params: {
                tel: this.phone,
                nick:this.usernickname,
                sex:this.sex
            }
        })
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
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
.van-button__text{
    color: aliceblue
}

/* 输入的span信息 */
span{
    color: #b2b2b2;
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
  background: #b2b2b2;
  color: white;
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;
}
</style>
