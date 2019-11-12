<template>
  <div>
    <div class="top">消息</div>
    <div class="main">
            <button @click="touch()" class="one"><van-icon name="volume" /><span>通知</span></button>
        
        <router-link to='/tonghua'>
            <button class="two"><van-icon name="phone" /><span>通话</span></button>
        </router-link>
        <br>
        <button class="three"><van-icon name="manager" /><span>来访</span></button>
    </div>
    <p class="name">聊天信息</p><!-- 聊天信息-->
    <p class="content">聊天消息手动查看途径：打开app→首页→最近联系过的人(聊天消息列表),即可查看。</p><!-- 内容-->

    <div class="chakan"><!-- 立即查看-->
      <p>收到新的聊天信息</p>
      <div class="anniu">
        立即查看
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from '../../eventbus'
export default {
  methods: {
      touch(){
         this.$router.push({ path: '/tongzhi' }) 
      }
  },
   mounted() {
    eventbus.$emit('showFooter',true)
  },
}
</script>


<style scoped>
 .top{
     width:100%;
     height:55px;
     text-align: center;
     font-size:18px;
     line-height:55px;
     margin-bottom:10px;
 }
 .main{
   width:350px;
   height:125px;
   margin:0px auto 30px;
 }
 button{
   border:none;
   font-size:20px;
   color:white;
   line-height:50px;
   border-radius: 5px;
 }
 span{
   margin-left:5px;
 }
  .one{
    width:165px;
    height:56px;
    background:linear-gradient(to right, #fe4c68 ,#ff8a5f);
    margin-right:15px;
  }
  .two{
    width:165px;
    height:56px;
    background:linear-gradient(to right, #2b69da ,#32a7fe);
    margin-bottom: 10px;
  }
  .three{
    width:345px;
    height:56px;
    background:linear-gradient(to right, #673db6 ,#ad56fe);
    margin:0 auto;
  }
  .name{
    font-size:24px;
    margin-left:15px;
    font-weight:bold;
    margin-bottom:10px;
  }
  .content{
    font-size:14px;
    color:gray;
    margin-left:15px;
    margin-right:15px;
    line-height:24px;
    margin-bottom:100px;
  }
  .chakan{
    width:350px;
    height:125px;
    margin:30px auto;
  }
  .chakan p{
    margin-left:110px;
    font-size:16px;
    line-height:30px;
    color:blue;
  }
  .chakan .anniu{
    width:240px;
    height:55px;
    background:linear-gradient(to right, #fe4c68 ,#ff8b5f);
    margin:auto;
    border-radius: 55px;
    color:white;
    font-size:18px;
    text-align: center;
    line-height: 55px;
  }
</style>
