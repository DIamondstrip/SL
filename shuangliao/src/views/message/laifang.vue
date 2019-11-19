<template>
  <div id="tonghua">
    <Test>来访</Test>
    <!-- tab -->
    <div class="content">
        <van-tabs v-model="activeName" class="main">
            <!-- tab1 -->
            <van-tab title="来访" class="left" name="one">
                <ul >
                    <li :key="item.index" v-for="item in Data1">
                        <router-link :to="'/details/'+item.vUid">
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>{{item.nick}}</span>&nbsp;<span class="sex" ref="sex" v-if="item.sex==1">♂{{item.age}}</span>
                            <span class="sex1" ref="sex" v-else>♀{{item.age}}</span></p>
                            <p><span style="font-size:12px;">{{item.vTime}}</span>&nbsp;<span>来访</span></p>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </van-tab>
            <!-- tab2 -->
            <van-tab title="去访" class="qufang" name="two">
                 <ul>
                    <li :key="aaa.index" v-for="aaa in Data2">
                        <router-link :to="'/details/'+aaa.uid">
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>{{aaa.nick}}</span>&nbsp;<span class="sex" v-if="aaa.sex==1">♂{{aaa.age}}</span>
                            <span class="sex1" v-else>♀{{aaa.age}}</span></p>
                            <p><span style="font-size:12px;">{{aaa.vTime}}</span>&nbsp;<span>去访</span></p>
                        </div>
                        </router-link>
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
      activeName:"one",
      show:false,
      sex:null,
      number:'1',
      Data1:{},
      Data2:{},
    };
  },
 components:{
        Test,
    },
  methods: {
     
     num1(){
         this.number=1;
         console.log(1);
     },
     num2(){
         this.number=2;
          console.log(2);
     },
     touch(test,event,item){
        event.target.parentNode.style.display='none';
        event.target.parentNode.parentNode.lastChild.style.display='block'
        if(test){
            Vue.set(this.aaa,item.id,'已选择同意，该笔收益将退款')
        }else{
            Vue.set(this.aaa,item.id,'不同意退款，平台处理中')
        }
     },
     todetails(){//前往详情页
         this.$router.push({path:'/details/id'})
     },
     comedetails(){
         this.$router.push({path:'/details/id'})
     },
  },
  mounted() {
    eventbus.$emit('showFooter',false)
    this.$axios({//请求
      method: "post",
      url: "/user/visitor",
      params:{tel:"13516783231",visit_state:'1'},
    })
      .then(response => {
        console.log(1);
        console.log(response.data.data)
        this.Data1=response.data.data;
       
        return this.Data1;
      })
      .catch(function(error) {
        console.log(error);
      });

      this.$axios({//请求
      method: "post",
      url: "/user/visitor",
      params:{tel:"13516783231",visit_state:'2'},
    })
      .then(response => {
        console.log(2);
        console.log(response.data.data)
        this.Data2=response.data.data;
        return this.Data2;
      })
      .catch(function(error){
        console.log(error);
      });
  },
}
</script>

<style scoped>
/* 来访 */
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
.content ul li .center .sex1{
    background: pink;
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



/* 去访 */
.qufang{
    width:100%;
}
.qufang .main {
  width: 300px;
  margin:0 auto;
}
.van-tabs__line {
  width: 44.5px;
  transform: translateX(22.5px) translateX(0);
  transition-duration: 0.3s;
}
.qufang ul li{
    width:100%;
    height:82px;
    border-bottom:1px solid lightgray;
    overflow: hidden;
    margin-bottom:5px;
}
.qufang ul li .touxiang{
    width:50px;
    height:50px;
    border-radius: 50%;
    background: pink;
    margin:15px 5px 0px 2px;
    float: left;
}
.qufang ul li .center{
    width:120px;
    margin-top:20px;
    float: left;
}
.qufang ul li .center span{
    font-size:16px;
}
.qufang ul li .center .sex{
    background: blue;
    border-radius: 5px;
    text-align: center;
    line-height: 12px;
    font-size: 12px;
    color:white;
}
.qufang ul li .center p{
    font-size:16px;
    line-height:24px;
}
</style>
