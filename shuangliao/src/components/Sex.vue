<template>
  <div class="sex">
    <Test class="top" style="z-index: 5; border-bottom:none;"></Test>
    <h3>性别选择</h3>

    <section>
      <div class="pic">
        <div class="left" @click="touch1" :class="sex">
          <div class="nv">
            <img src="../../public/img/nv1.png" alt="" class="nv1" ref="nv1" />
            <img src="../../public/img/nv2.png" alt="" class="nv2" ref="nv2" />
          </div>
          <p>女士</p>
        </div>

        <div class="right" @click="touch2" :class="sex">
          <div class="nan">
            <img
              src="../../public/img/nan1.png"
              alt=""
              class="nan1"
              ref="nan1"
            />
            <img
              src="../../public/img/nan2.png"
              alt=""
              class="nan2"
              ref="nan2"
            />
          </div>
          <p>男士</p>
        </div>
      </div>
    </section>

    <button class="sex_done" ref="anniu" @click="complete">完成</button>
  </div>
</template>

<script>
// import eventbus from '../eventbus';
import Test from "./Test";
export default {
  name: "sex",
  data() {
    return {
      sex: "",
      phone: ""
    };
  },
  components: {
    Test
    // eventbus
  },
  mounted() {
    // eventbus.$emit('showFooter',false)
    // 写的路由，挂载时接收传递过来的参数
    this.phone = this.$route.params.phone;
    console.log(this.phone);
  },
  methods: {
    touch1() {
      this.sex = "female";
      this.$refs.nv2.style.display = "block";
      this.$refs.nan2.style.display = "none";
      this.$refs.anniu.style.background =
      "linear-gradient(to right, #fe4c68, #ff8a5f)";
      console.log(this.sex);
    },
    touch2() {
      this.sex = "male";
      this.$refs.nv2.style.display = "none";
      this.$refs.nan2.style.display = "block";
      this.$refs.anniu.style.background =
      "linear-gradient(to right, #fe4c68, #ff8a5f)";
      console.log(this.sex);
    },
    complete() {
      // 转跳到填写资料的页面,携带用户手机号和性别 (注：转跳到的页面用route.params 或者route.query接收)
      this.$router
        .push({
          name: "datacomplete",
          params: {
            phone: this.phone,
            sex:this.sex
          }
        })
        .catch(e => {});
    }
  }
};

// bind绑定 http://www.mamicode.com/info-detail-1581625.html
//路由传参推荐参考  https://www.cnblogs.com/zhangruiqi/p/9412539.html
</script>

<style scope>
.nan,
.nv {
  width: 92.5px;
  height: 92.5px;
}
.nv2 {
  display: none;
}
.nan2 {

  display: none;
}
.sex {
  width: 80%;
  overflow: hidden;
}

.top{
  margin-top:20px;
}
.sex h3{
  margin-top:20px;
  margin-left:20px;
}
.sex .pic{
  width:260px;
  height:148px;
  margin:30px auto 0;
  position: relative;
}
.sex .pic img{
  width:92.5px;
  height:92.5px;
  position:absolute
}
.sex .pic p{
  width:100%;
  height:57px;
  text-align: center;
  line-height:57px;
}
.sex .pic .left{
  width:95px;
  height:100%;
  float: left;
}
.sex .pic .right{
  width:95px;
  height:100%;
  float: right;
}
.sex_done {
  display: block;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 50px;
  width: 90%;
  margin: 84px auto 0px;
}
</style>

