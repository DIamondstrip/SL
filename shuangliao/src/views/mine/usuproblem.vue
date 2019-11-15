<template>
<div>
<Test>常见问题</Test>
<ul id="us_add"> 
 <li id='usu_problem'>
<p class="title">常见问题一</p>
<p class="content">有什么意见或者建议，或者疑问要和我们交流的，都可以反馈给我们喲</p>
 </li>
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
ul li {
    /* width: 100%; */
    margin-left:15px;
    border-bottom: 0.5px solid #b2b2b2;
    padding:10px 25px 10px 0;
    
}
li .title{
    font-size: 7.5px;
     line-height: 25px;

}
li .content{
    color:#b2b2b2;
    font-size: 6.5px;
    line-height: 25px;
}
</style>
