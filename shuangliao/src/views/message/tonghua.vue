<template>
  <div id="tonghua">
    <div class="top">
      <van-icon name="arrow-left" class="tuichu" @click="returned()" />
      <span>通话</span>
    </div>
    <!-- tab -->
    <div class="content">
        <van-tabs v-model="active" class="main">
            <!-- tab1 -->
            <van-tab title="通话记录" class="left">
                <ul>
                    <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来电</span></p>
                        </div>
                        <div class="right">
                            <p>未接</p>
                            <p>通话30分20秒</p>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </van-tab>
            <!-- tab2 -->
            <van-tab title="退款" class="right">

            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
      returned(){
          this.$router.back();
      }
  },
};
</script>


<style scoped>
.top {
  width: 310px;
  height: 55px;
  padding:0px 10px;
  margin:0 auto;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  line-height: 55px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
}
.top .tuichu {
  margin-left: 10px;
  font-size: 24px;
  position: absolute;
  left: -5px;
  top: 15px;
}
.content{
    width:100%;
}
.content .main {
  width: 300px;
  margin:0 auto;
}
.van-tabs__line {
  width: 44.5px;
  transform: translateX(22.5px) translateX(0);
  transition-duration: 0.3s;
}
.content ul li{
    width:100%;
    height:82px;
    border-bottom:1px solid lightgray;
    background: yellow;
    overflow: hidden;
    margin-bottom:5px;
}
.content ul li .touxiang{
    width:50px;
    height:50px;
    border-radius: 50%;
    background: pink;
    margin:15px 5px 0px 2px;
    float: left;
}
.content ul li .center{
    width:120px;
    margin-top:20px;
    float: left;
}
.content ul li .center span{
    font-size:16px;
}
.content ul li .center .sex{
    background: blue;
    border-radius: 5px;
    text-align: center;
    line-height: 12px;
    font-size: 12px;
    color:white;
}
.content ul li .center p{
    font-size:16px;
    line-height:24px;
}
.content ul li .right{
    margin-top:20px;
    width:100px;
    background: greenyellow;
    float: right;
}
.content ul li .right p{
    font-size: 14px;
    line-height:24px;
}
</style>
