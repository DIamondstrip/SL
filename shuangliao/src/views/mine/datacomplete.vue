<template>
<div>
    <Test></Test>
 <ul>
     <li class="title">完善资料</li>
     <li class="head">上传头像<span><button>+</button></span></li>
     <li class="name">昵称<span>lokkk<button>&gt;</button></span></li>
     <li class="born">出生日期<span> <button>&gt;</button></span></li>
     <li class="button_c"><button>完成</button></li>
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
/* 总体样式布局 --王昕晨 */
ul{
   margin-left:30px;
   margin-right:30px;
  
}
ul li{
    border-bottom:0.5px solid #cbc7c4;  
    text-align: left;   
    font-size: 15px;
    padding:30px 0;
    color:#b2b2b2;
}
ul li span{
    float:right;
}
ul li span button{
    background: none;
    border:none;
}
/* 图片添加按钮样式及定位 --王昕晨 */
 ul .head span{
     /* height: 50px;  */
     position: relative;
} 

ul .head span button{
    width: 50px;
    height: 50px;
    background: #cbc7c4;
    color: white;
    border-radius: 25px;
    font-size: 17px;
    font-weight: 900;
    position: absolute;
    top:-17.5px;
    right:0px;
}
ul .title{
    font-size: 25px;
    font-weight: 900;
    border-bottom: none;
    color:black;
}
ul .button_c{
    border-bottom: none;
}
ul .button_c button{
    width: 100%;
    border:none;
    background: #b2b2b2;
    color: white;
    font-size: 15px;
    padding: 15px;
    border-radius: 4px;
}

</style>
