<template>
<div>
<Test>编辑资料</Test>
 <ul id='Edit'>
     <li class="head">上传头像<span><button >+</button></span></li>
     <li class="id">ID<span>598784 </span></li>
     <li class="name">昵称<span>MOMOMO <button @click='name_click()'>&gt;</button></span></li>
     <li class="sex">性别<span>{{sex}}<button is-link @click="showsex">&gt;</button></span></li>
     <li class="born">出生日期<span>{{date}} <button is-link @click="showdate">&gt;</button></span></li>
     <li class="land">所在地<span> {{city}}<button is-link @click="showcity">&gt;</button></span></li>
     <li class="own_input"><textarea  class="own_write"   maxlength='20' v-model="own_write" placeholder="请输入个性签名"></textarea><span>{{own_write.length}}/20</span></li>
<!-- <input type="text" placeholder="请输入个性签名" maxlength='20' v-model="own_write"> -->
 </ul>
<!-- 性别弹窗 -->
<van-popup v-model="show_sex"  position="bottom" :style="{ height: '40%' }">
   <!-- 弹窗内容 -->
    <van-picker
  show-toolbar
  title="性别"
  :columns="sexs"
  @cancel="sex_onCancel"
  @confirm="sex_onConfirm"
/>
    </van-popup>
    <!-- 日期弹窗 -->
    <van-popup v-model="show_date"  position="bottom" :style="{ height: '40%' }">
<!-- 弹窗内容 -->
<van-datetime-picker
  v-model="currentDate"
  title="日期"
  type="date"
  :min-date="minDate"
  :max-date="maxDate"
  @cancel="date_onCancel"
  @confirm="date_onConfirm"
/>
    </van-popup>
    <!-- 城市弹窗 -->
    <van-popup v-model="show_city"  position="bottom" :style="{ height: '40%' }">
<!-- 弹窗内容 -->
   <van-picker
  show-toolbar
  title="城市"
  :columns="citys"
  @cancel="city_onCancel"
  @confirm="city_onConfirm"
/>
</van-popup>
</div>
</template>

<script>
import Test from '../../components/Test'
// 阻塞最下面tab栏
import eventbus from '../../eventbus'

export default {
  components:{Test}, 
  data() {
    return {
    // 性别数据
      show_sex: false,
      sexs: ['男', '女'],
      sex:'',
    //  日期数据
      show_date:false,
      currentDate: new Date(),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      date:'',
    //  城市数据
      show_city:false,
      citys:['杭州', '宁波', '温州', '嘉兴', '湖州'],
      city:'',
    //   个性签名
    own_write:'',
   
    }
  },

  
  methods:{
    //  昵称栏跳转
    name_click(){
      this.$router.push({path:'/editdataname'})
      },
     //   性别有关事件
    showsex() {
      this.show_sex = true},
    sex_onConfirm(value, index) {
      this.sex=value,
      this.show_sex = false
    },
    sex_onCancel() {
    this.show_sex = false
    },
    // 日期有关事件
    showdate() {
      this.show_date = true},
    date_onConfirm(type) {
      this.date=type.toLocaleString().split(' ')[0];
      this.show_date = false
    },
    date_onCancel() {
    this.show_date = false
    },
    // 城市有关事件
    showcity() {
      this.show_city = true},
    city_onConfirm(value, index) {
      this.city=value,
      this.show_city = false
    },
    city_onCancel() {
    this.show_city = false
    },
    

  },
  // 阻塞最下面tab栏
  mounted() {
    eventbus.$emit('showFooter',false)
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
    text-align: left;   
    font-size: 15px;
    padding:25px 15px 25px 0;
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
     height: 50px; 
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


ul .own_input .own_write{
    width: 240px;
    min-height: 30px;
     border:none; 
    resize:none;
    
}
</style>
