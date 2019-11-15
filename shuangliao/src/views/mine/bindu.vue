<template>
<div><Test>绑定推荐人</Test>
 <ul>
   
   <li id="bind">
    <input class='bind_input' type="text" placeholder="请输入/粘贴对方发送的邀请码">
  </li>
  <li><button class=bind_button>保存</button></li>
  <li><p>自动绑定失败时，您在注册24小时内可以选择手动输入对方的邀请码进行绑定，防止走丢哦(无邀请人时可忽略)</p></li>
  </ul>
 </div>


</template>

<script>
import Test from '../../components/Test'
export default {
  components:{Test}
}
</script>


<style scoped>
ul li{
  margin:15px 15px;
}
ul li input{
  width: 100%;
  height: 50px;
  line-height: 100px;
  font-size: 17px;
  background: #f2f2f2;
   border: none;
   text-indent: 12.5px;
   border-radius: 2.5px;
}
ul li button{
  width: 100%;
  height: 50px;
  font-size: 19px;
  color: white;
  background: #b2b2b2;
  border: none;
  border-radius: 2.5px;
}
ul li p{
  font-size: 12px;
  line-height: 20px;
  color:#c6c6c6;
}
</style>
