<template>
<div>
  <Test>关于我们</Test>
  <div id="about">
    <div class="logo_picture"><picture></picture></div>
    <p class="name">XXXX</p>
    <p class="version">版本号 1.0.0</p>
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
#about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:150px;

}
#about .logo_picture{ 
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: black;

}
#about .name{
    font-size: 12px;
}
#about .version{
    font-size: 12px;
    color: #999999;
}
</style>
