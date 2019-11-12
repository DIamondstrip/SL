<template>
  <div id="tonghua">
    <Test>通话</Test>
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
                            <p style="color:red;font-weight:bold">未接</p>
                            <p>通话30分20秒</p>
                        </div>
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来电</span></p>
                        </div>
                        <div class="right">
                            <p style="color:red;font-weight:bold">未接</p>
                            <p>通话30分20秒</p>
                        </div>
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂18</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来电</span></p>
                        </div>
                        <div class="right">
                            <p style="color:red;font-weight:bold">未接</p>
                            <p>通话30分20秒</p>
                        </div>
                    </li>
                </ul>
            </van-tab>


            <!-- tab2 -->
            <van-tab title="退款" class="tuikuan">
                <ul>
                    <li :key='item.id' v-for='item of items'>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>{{item.name}}</span>&nbsp;<span class="sex">♂26</span><span class="time">12:34</span></p>
                            <p class="neirong">{{item.content}}</p>
                        </div>


                        <!-- 同意不同意 -->
                        <div class="all" ref="all">
                            <van-button round type="info" class="agree" @click='touch(true,$event,item)' ref="agree">同意</van-button>
                            <van-button round type="info" class="disagree" @click='touch(false,$event,item)' ref="disagree">不同意</van-button>
                        </div>
                         <van-button round type="info" size="small"  ref="fix" style="display:none" class="money">{{aaa[item.id]}}</van-button>
                    </li>

                     
                </ul>
            </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Test from '../../components/Test'
import eventbus from '../../eventbus'

export default {
  data() {
    return {
      active: 2,
      show:false,
      items:[
          {id:1,name:'aaa',content:'wewqrwqr'},
          {id:2,name:'bbb',content:'we11111wqr'}
      ],
      aaa:{

      }
    };
  },
 components:{
        Test,
    },
  methods: {
     touch(test,event,item){
        event.target.parentNode.style.display='none';
        event.target.parentNode.parentNode.lastChild.style.display='block'
        if(test){
        Vue.set(this.aaa,item.id,'已选择同意，该笔收益将退款')
        }else{
          Vue.set(this.aaa,item.id,'不同意退款，平台处理中')
        }
     }
  },
  mounted() {
    eventbus.$emit('showFooter',false)
  },
}
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
    float: right;
}
.content ul li .right p{
    font-size: 14px;
    line-height:24px;
    text-align: right;
}


/* 退款 */
.tuikuan ul{
    width:320px;
}
.tuikuan ul li{
    width:320px;
    height:160px;
    border-bottom:1px solid lightgray;
    margin-bottom:5px;
    position: relative;
}
.tuikuan ul li .touxiang{
    width:50px;
    height:50px;
    border-radius: 50%;
    background: pink;
    margin:15px 5px 0px 2px;
    float: left;
}
.tuikuan ul li .center{
    width:120px;
    margin-top:20px;
    float: left;
}
.tuikuan ul li .center span{
    font-size:16px;
}
.tuikuan ul li .center .sex{
    background: blue;
    border-radius: 5px;
    text-align: center;
    line-height: 12px;
    font-size: 12px;
    color:white;
}
.tuikuan ul li .center .time{
    font-size: 14px;
    float: right;
    color:#b8b8b8;
}
.tuikuan ul li .center p{
    width:240px;
    font-size:14px;
    line-height:24px;
    
}
.tuikuan ul li .center .neirong{
    width:240px;
    font-size:14px;
    line-height:20px;
    color:#b8b8b8;
}
.tuikuan ul li .all{
    width:260px;
    height:36px;
    margin:0 auto;
    position:relative;
    margin:110px auto;
}
.tuikuan ul li .all .agree{
    width:100px;
    float: left;
    height:36px;
    line-height: 36px;
    border:none;
    background: #15d0aa;
}
.tuikuan ul li .all .disagree{
    width:100px;
    float: right;
    height:36px;
    line-height: 36px;
    border:none;
    background: #ff234c;
}
.tuikuan ul li .all .nav{
  display: none;
}
.money{
    position:absolute;
    left:50px;
    bottom:10px;
    background: lightgray;
    border:none;
    height:36px;
}
</style>
