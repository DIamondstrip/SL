<template>
  <div class="main">
    <section class="header">
      <div class="renzheng">已认证</div>
    </section>
    <section class="brief">
      <div class="xinxi">
        <div class="xinxi-zuo">
          <p class="name">
            {{ Mdata.nick }}
            <span class="sex">{{ Mdata.sex }}</span>
            <!-- <span class="sex"></span> -->
          </p>

          <p class="ID">ID:{{ Mdata.uid }}</p>
          <p class="autograph">{{ Mdata.autograph }}</p>
          <!-- 关注（点击跳转） -->
          <router-link to="/attFans/attention">
            <span class="guanzhu" style="margin-left: 0;">
              关注 &nbsp;
              <i class="inum">{{ Mdata.follow }}</i>
            </span>
          </router-link>
          <!-- 粉丝（点击跳转） -->
          <router-link to="/attFans/fans">
            <span class="guanzhu">
              粉丝 &nbsp;
              <i class="inum">{{ Mdata.fans }}</i>
            </span>
          </router-link>
          <!-- 来访（点击跳转） -->
          <router-link to="/laifang">
            <span class="guanzhu">
              来访 &nbsp;
              <i class="inum">{{ Mdata.visitor }}</i>
            </span>
          </router-link>
        </div>
        <div class="xinxi-you">
          <!-- <div class="HeadPortrait"> -->
          <van-image round width="81px" height="81px" :src="Mdata.avatar" />
          <!-- </div> -->
        </div>
      </div>
    </section>
    <section class="Conversation">
      <div class="shipin">
        <p class="spmore">视频聊天 &gt;</p>
        <van-switch v-model="checked" size="25px" />
      </div>
    </section>
    <section class="account">
      <div class="zhanghu">
        <!-- 我的账户（点击跳转） -->
        <router-link to="/myaccount">
          <van-button
            color="linear-gradient(to right, #fe4d68, #ff8a5f)"
            round
            style="font-size:14px"
            size="normal"
          >
            <i
              class="fa fa-credit-card-alt"
              aria-hidden="true"
              style="margin-right:10px"
            ></i>
            我的账户 ：{{ Mdata.uPrice }}
          </van-button>
        </router-link>
        <!-- 我的金币（点击跳转） -->
        <router-link to="/mycoins">
          <van-button
            color="linear-gradient(to right, #2b6ada, #32a6fd)"
            round
            size="normal"
            style="font-size:14px"
          >
            <i
              class="fa fa-money"
              aria-hidden="true"
              style="margin-right:10px"
            ></i>
            我的金币 ：{{ Mdata.goldCoin }}
          </van-button>
        </router-link>
      </div>
    </section>
    <section class="gift">
      <div class="mygift">
        <span>我的礼物</span>
        <span>&gt;</span>
      </div>

      <div class="gifts">
        <router-link to="/myGift/getGift">
          <a href="javascript:;" class="getgift">
            <van-icon name="balance-o" />收到的礼物：
            <span style="font-weight:600"></span>
          </a>
        </router-link>
        <router-link to="/myGift/putGift">
          <a href="javascript:;" class="putgift">
            <van-icon name="refund-o" />送出的礼物：
            <span style="font-weight:600"></span>
          </a>
        </router-link>
      </div>
    </section>
    <section class="bottom">
      <div class="bottomul">
        <div class="Dli">
          <router-link to="/idCard">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">证件上传</p>
            </div>
          </router-link>
          <router-link to="/account">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">账号安全</p>
            </div>
          </router-link>
          <router-link to="/photo">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">个人相册</p>
            </div>
          </router-link>
          <router-link to="blackList">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">黑名单</p>
            </div>
          </router-link>
        </div>
        <div class="Dli">
          <router-link to="ownset">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">设置</p>
            </div>
          </router-link>
          <router-link to="Editdata">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">编辑资料</p>
            </div>
          </router-link>
          <router-link to="usuproblem">
            <div class="xq">
              <div class="img"></div>
              <p style="font-size:10px;text-align:center">常见问题</p>
            </div>
          </router-link>
          <div class="xq">
            <div class="img"></div>
            <p style="font-size:10px;text-align:center">分享</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// 阻塞最下面tab栏
import eventbus from "../../eventbus";
export default {
  data() {
    return {
      checked: true,
      phone: "",
      Mdata: {},
      err: 0,
      msg: "",
      server_time: "2019-07-02 16:36:21"
    };
  },

  // 阻塞最下面tab栏
  mounted() {
    eventbus.$emit("showFooter", true);
    this.phone = JSON.parse(window.localStorage.getItem("userInfo")).tel;
    // this.$axios
    //   .post("/user/userinfo", "tel=13516783231")
    //   .then(response => {
    //     console.log(response.data.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    
    this.$axios({
      method: "post",
      url: "/user/userinfo",
      data: "tel=13516783231"
    })
      .then(response => {
        this.Mdata = response.data.data;
        console.log(this.Mdata);

        return this.Mdata;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.main {
  margin-bottom: 50px;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  background: white;
}
.brief {
  width: 100%;
  height: 183px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.Conversation {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
}
.account {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
}
.gift {
  width: 100%;
  height: 121px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mygift {
  width: 343px;
  height: 22px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.gifts {
  width: 343px;
  height: 55px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #f2f2f2;
}
.getgift {
  display: inline-block;
  font-size: 16px;
  color: black;
}
.putgift {
  display: inline-block;
  font-size: 16px;
  color: black;
}
.bottom {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
}

.renzheng {
  width: 66px;
  height: 28px;
  background: #ccc;
  margin-left: 15px;
  border-radius: 15px;
  text-align: center;
  line-height: 28px;
  font-size: 11px;
}
.xinxi {
  width: 343px;
  height: 154px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.xinxi-zuo {
  width: 217px;
  height: 154px;
}
.xinxi-you {
  width: 126px;
  height: 154px;
  display: flex;
  justify-content: flex-end;
}
.name {
  font-size: 16px;
  font-weight: 400;
  margin: 11px 0;
  color: black;
}
.sex {
  display: inline-block;
  width: 30px;
  height: 13px;
  border-radius: 10px;
  background: #ff5277;
  margin-left: 10px;
  font-size: 10px;
  text-align: center;
  line-height: 13px;
  color: white;
}
.ID {
  font-size: 11px;
  margin-bottom: 11px;
}
.autograph {
  font-size: 13px;
  /* margin-bottom: 11px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.guanzhu {
  font-size: 13px;
  margin-left: 25px;
  color: black;
}
.inum {
  font-weight: 600;
}
.HeadPortrait {
  width: 81px;
  height: 81px;
  border-radius: 50%;
  background: #ff5277;
  overflow: hidden;
}
.shipin {
  width: 343px;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.spmore {
  font-size: 14px;
}
.zhanghu {
  width: 343px;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.bottomul {
  width: 343px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Dli {
  width: 309px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
}
.xq {
  width: 52px;
  height: 76px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: salmon;
}
</style>
