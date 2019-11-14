<template>
<div>
    <Test>意见反馈</Test>
<div class="back">
    <textarea name="" id="i_back" placeholder="有什么意见或者建议,或者疑问要和我们交流的，都可以反馈给我们喲" ></textarea>
 </div>
</div>
</template>

<script>
import Test from '../../components/Test'
export default {
  components:{Test}
}
</script>


<style scoped>
 div .back{height:160px;
     margin-left: 15px;
     padding-right:25px;
     padding-top: 10px;
     padding-bottom:2px;
     border-bottom: 1px solid #b2b2b2;
}
#i_back{
    width: 100%;
   height: 100%;
    line-height: 22px;
    font-size: 13px;
    border:none;
    
    resize:none;
    

}
</style>
