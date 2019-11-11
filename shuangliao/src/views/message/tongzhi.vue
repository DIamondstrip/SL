<template>
  <div id="tongzhi">
    <!-- <div class="top">
        <van-icon name="arrow-left" class="tuichu" @click="returned()"/>
        <span>通知</span>
    </div> -->
    <Test>通知</Test>
    <div class="time">12:34</div>
    <div class="content">张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹</div>
    <div class="time">12:34</div>
    <div class="content">张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹张泽禹</div>
  </div>
</template>

<script>
import Test from '../../components/Test'
export default {
    data(){
        return{}
    },
    components:{
        Test
    },
    methods: {
        returned(){
            // this.$router.push({ path: '/message' })
            this.$router.back();
        }
    },
};
</script>


<style scoped>
.top {
  width: 360px;
  height: 55px;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  line-height: 55px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
}
.top .tuichu{
    margin-left:10px;
    font-size: 24px;
    position: absolute;
    left:5px;
    top:15px;
}
.time {
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  margin:5px 0px;
}
.content {
  width: 300px;
  margin: 0 auto;
  background: lightgray;
  font-size: 12px;
  padding: 10px;
  border-radius: 8px;
}
</style>
