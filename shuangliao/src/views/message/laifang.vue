<template>
  <div id="tonghua">
    <Test>来访</Test>
    <!-- tab -->
    <div class="content">
        <van-tabs v-model="active" class="main">


            <!-- tab1 -->
            <van-tab title="来访" class="left">
                <ul>
                    <li @click='comedetails'>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来访</span></p>
                        </div>
                       
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来访</span></p>
                        </div>
                      
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂18</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>来访</span></p>
                        </div>
                      
                    </li>
                </ul>
            </van-tab>


            <!-- tab2 -->
            <van-tab title="去访" class="qufang">
                 <ul>
                    <li @click='todetails'>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>去访</span></p>
                        </div>
                       
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂26</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>去访</span></p>
                        </div>
                      
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂18</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>去访</span></p>
                        </div>
                      
                    </li>
                     <li>
                        <div class="touxiang"></div>
                        <div class="center">
                            <p><span>张泽禹</span>&nbsp;<span class="sex">♂18</span></p>
                            <p><span style="font-size:12px;">2019/11/11</span>&nbsp;<span>去访</span></p>
                        </div>
                      
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
     },
     todetails(){
         this.$router.push({path:'/details/id'})
     },
     comedetails(){
         this.$router.push({path:'/details/id'})
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
