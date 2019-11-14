<template>
<div>
<Test>设置</Test>
 <ul id='set'>
     <li class="bind_people">绑定推荐人<span><button @click='bindu_click()'>&gt;</button></span></li>
     <li class="beauty">美颜效果<span><button>&gt;</button></span></li>
     <li class="about_us">关于我们<span><button  @click='aboutus_click()'>&gt;</button></span></li>
     <li class="clear_cache">清理缓存<span><button>?M立即清理</button></span></li>
     <li class="quit_own">退出账号<span><button>&gt;</button></span></li>
 </ul>
</div>
</template>

<script>
import Test from '../../components/Test'
export default {
  components:{Test},
  methods:{
      bindu_click(){
      this.$router.push({path:'/bindu'})
      },aboutus_click(){
      this.$router.push({path:'/aboutus'})
      },
  }
}
</script>


<style scoped>
/* 总体样式布局 --王昕晨 */
ul{
   margin-left:15px 
}
ul li{
    border-bottom:0.5px solid #cbc7c4;  
    font-size: 15px;
    padding:25px 15px 25px 0;
}
ul .bind_people{
    padding-top: 10px;

}
ul li span{
    float:right;
}
ul li span button{
    background: none;
    border:none;
    color: #b2b2b2;
}
</style>
