<template>
  <div>
      <Test>编辑资料</Test>
    <van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
  </div>
</template>

<script>
import Test from '../../components/Test'

// Vue.use(Field);
export default {
    components:{Test},
    data(){
        return{
        value:''
        }

    }
}

</script>


<style scoped>

</style>