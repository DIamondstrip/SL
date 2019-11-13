<template>
  <div class="friend">
    <div class="header">
      <router-link to="/search">
        <li class="fa fa-search" aria-hidden="true" @click="search"></li>
      </router-link>

      <li class="title">交友</li>
      <li class="isex">只看异性</li>
    </div>
    <van-tabs style="posi" v-model="active" :offset-top="50" sticky>
      <van-tab title="红人" class="hongren">
        <!-- <img
                    src="http://img5.imgtn.bdimg.com/it/u=1896971167,2172042544&fm=26&gp=0.jpg"
                    alt
                    class="tpic"
                />-->
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="http://img4.imgtn.bdimg.com/it/u=554524385,3117980747&fm=26&gp=0.jpg"
              alt
              class="tpic"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://img3.imgtn.bdimg.com/it/u=3270093658,3792012375&fm=11&gp=0.jpg"
              alt
              class="tpic"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://img3.imgtn.bdimg.com/it/u=167574130,2350013027&fm=26&gp=0.jpg"
              alt
              class="tpic"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://img1.imgtn.bdimg.com/it/u=2723952473,3479651652&fm=26&gp=0.jpg"
              alt
              class="tpic"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://img4.imgtn.bdimg.com/it/u=2455744093,1174321665&fm=26&gp=0.jpg"
              alt
              class="tpic"
            />
          </van-swipe-item>
        </van-swipe>
        <ul class="content">
          <li>
            <!-- :to="'/details/'+item.id'" 传递数据给详情页 -->
            <router-link to="/details">
              <img
                src="http://img5.imgtn.bdimg.com/it/u=2827627847,3828691354&fm=26&gp=0.jpg"
                alt
              />
              <div class="mask">
                <p>
                  <span>username</span>
                  <span class="sex">
                    <i class="fa fa-mars" aria-hidden="true"></i>
                    <em class="age">23</em>
                    <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
                  </span>
                  <br />
                  <em>测试文体测试文体测试文体</em>
                </p>
              </div>
            </router-link>
          </li>

          <li>
            <img
              src="http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg"
              alt
            />
            <div class="mask">
              <p>
                <span>username</span>
                <span class="sex">
                  <i class="fa fa-mars" aria-hidden="true"></i>
                  <em class="age">23</em>
                  <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
                </span>
                <br />
                <em>测试文体测试文体测试文体</em>
              </p>
            </div>
          </li>
          <li>
            <img
              src="http://img5.imgtn.bdimg.com/it/u=2827627847,3828691354&fm=26&gp=0.jpg"
              alt
            />
            <div class="mask">
              <p>
                <span>username</span>
                <span class="sex">
                  <i class="fa fa-mars" aria-hidden="true"></i>
                  <em class="age">23</em>
                  <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
                </span>
                <br />
                <em>测试文体测试文体测试文体</em>
              </p>
            </div>
          </li>
          <li>
            <img
              src="http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg"
              alt
            />
            <div class="mask">
              <p>
                <span>username</span>
                <span class="sex">
                  <i class="fa fa-mars" aria-hidden="true"></i>
                  <em class="age">23</em>
                  <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
                </span>
                <br />
                <em>测试文体测试文体测试文体</em>
              </p>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="活跃">内容 2</van-tab>
      <van-tab title="新面孔">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import eventbus from "../../eventbus";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {},
  methods: {
    search() {
      this.$router.push({ path: "/search" });
    }
  },
  mounted() {
    eventbus.$emit("showFooter", true);
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  height: 50px;
  background: white;
  overflow: hidden;
  z-index: 1;
}
.header li {
  font-size: 20px;
  float: left;
  margin: 10px 20px;
}
.header .title {
  margin: 10px 50px 10px 105px;
}

.header .isex {
  background: #ff7363;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  width: 80px;
}
.friend {
  margin-bottom: 80px;
}
.hongren .tpic {
  width: 100%;
  height: 150px;
  display: block;
}
.hongren .content {
  overflow: hidden;
}
.hongren .content li {
  width: 50%;
  height: 250px;
  float: left;
  position: relative;
}
.hongren .content img {
  width: 100%;
  height: 100%;
  display: block;
}
.content .mask {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.hongren .content p {
  font-size: 16px;
  position: absolute;
  bottom: 15px;
  margin-left: 10px;
  width: 80%;
  font-style: normal;
  color: white;
  line-height: 25px;
}
.content .sex {
  margin-left: 20px;
  padding: 3px 5px;
  background: blue;
  border-radius: 5px;
  font-size: 12px;
}
.van-tabs--line .van-tabs__wrap {
  height: 1.17333rem;
  width: 100%;
  position: fixed;
}
.van-tabs {
  margin-top: 50px;
}
</style>
