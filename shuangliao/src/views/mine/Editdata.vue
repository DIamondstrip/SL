<template>
<div>
  <van-nav-bar
  title="编辑资料"
  left-text=""
  right-text="完成"
  left-arrow
  @click-left="bar_onClickLeft"
  @click-right="bar_onClickRight"
/>

 <ul id='Edit'>
     <li class="head">上传头像<span><button  >
       <van-uploader v-model="phototi"  :max-count="1"  :after-read='afterRead' preview-size="50" />
      
       </button></span></li>
     <li class="id">ID<span>{{id}} </span></li>
     <li class="name">昵称<span>{{name}} <button @click='name_click()'>&gt;</button></span></li>
     <li class="sex">性别<span>{{sex}}</span></li>
     <li class="born">出生日期<span>{{date}} <button is-link @click="showdate">&gt;</button></span></li>
     <li class="land">所在地<span> {{city}}<button is-link @click="showcity">&gt;</button></span></li>
     <li class="own_input"><textarea  class="own_write"   maxlength='20' v-model="own_write" placeholder="请输入个性签名"></textarea><span>{{own_write.length}}/20</span></li>
<!-- <input type="text" placeholder="请输入个性签名" maxlength='20' v-model="own_write"> -->
 </ul>
 <!-- 修改姓名弹窗 -->
<van-popup v-model="show_name"  position="bottom" :style="{ height: '20%' }">
   <!-- 弹窗内容 -->
     <van-field
     font-size=20
    v-model="name_change"
    label="新昵称"
    placeholder="请输入新昵称"
    maxlength=12
    
  />
  <button id='name_button' @click='name_changes()'>确认</button>
 </van-popup>
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

// 阻塞最下面tab栏
import eventbus from '../../eventbus'

export default {
  
  data() {
    return {
      // 照片
       phototi: [
        { url: '' },
        
      ],
      // ID
      id:"",
      // 昵称
      show_name:false,
      name:"",
      name_change:"",
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
    // 头像上传
    afterRead(file) {
      this.uploadImg(file.file);},
    uploadImg(file) {
      let formdata1 = new FormData();// 创建form对象
      // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('file',file);
      formdata1.append("file", file);
      console.log
      this.axios //是因为在main.js写在vue实例里
      this.axiosAjax
        .post("/file/imageupload", formdata1)
        .then(res => {   
          console.log(res); //res 为接口返回值
          this.phototi[0].url=res.data.data
        })
        .catch(() => {console.log(error)});
    },
   
    //  昵称栏有关事件
    name_click(){
      this.show_name=true
      },
      name_changes(){
        this.name=this.name_change;
        this.show_name=false;
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
    let year =type.getFullYear();
    let month =type.getMonth() + 1;
    let day =type.getDate();
    if (month < 10) {
    month = "0" + month;
    }
    if (day < 10) {
    day = "0" + day;
    }
    this.date = year + "-" + month + "-" + day;
      // this.date=type.toLocaleString().split(' ')[0];
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
    // 导航栏事件
     bar_onClickLeft(){
      
       this.$router.back()
    },
    bar_onClickRight(){
      let sex1='';
      if(this.sex=="男"){
        sex1=1;
      }
      else{sex1=2}
       this.$axios({
      method: "post",
      url: "/editUserInfo",
     data:{tel:this.tel,
            nick:this.name,
            sex:sex1,
            birthday:this.date,
            address:this.city,
            autograph:this.own_write,
           avatar:this.phototi[0].url,
      }
     
    })
      .then(response => {
        console.log(response.data)
       location.reload()
      })  
      .catch(function(error) {

        console.log(error);
      });
    //  this.$router.back()
    },
    // bar_onClickRight(){console.log(this.phototi[0].content)},
  },
  // 阻塞最下面tab栏
  mounted() {
    eventbus.$emit('showFooter',false);
     // 请求后端数据 并且渲染
    var telk=localStorage.getItem("userInfo")
    var telkey=JSON.parse(telk);
    console.log(telkey.tel)
    this.tel=telkey.tel
    this.$axios({
      method: "post",
      url: "/getUserInfo",
      data: `tel=${this.tel}`
    })
      .then(response => {
        console.log(response.data);
        console.log(response.data.data.avatar);
        this.phototi[0].url=response.data.data.avatar
        this.id=response.data.data.uid;
        this.name=response.data.data.nick;
        if(response.data.data.sex==2){
          this.sex="女"
        }else{this.sex="男"};
        this.date=response.data.data.birthday;
        this.city=response.data.data.address;
        this.own_write=response.data.data.autograph;
        // this.phototi.push(`{url:'${response.data.data.avatar}'}`)
           if(this.$route.query.name){this.name = this.$route.query.name};
        return this.Mdata;
      })
      .catch(function(error) {
        console.log(error);
      });
  
  },
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
ul .head{
  border-top: 1px solid #cbc7c4;
}
ul .head span button{
    width: 50px;
    height: 50px;
    background: #cbc7c4;
    /* color: white; */
    /* border-radius: 25px 0 25px 25px; */
    /* font-size: 17px;
    font-weight: 900; */
    /* border:1px solid black; */
    position: absolute;
    top:-17.5px;
    right:0px;
    /* overflow: hidden; */
}


ul .own_input .own_write{
    width: 240px;
    min-height: 30px;
     border:none; 
    resize:none;
    
}
/* 昵称修改弹窗的按钮样式 */
#name_button{
  width: 80%;
  height: 50px;
  margin-top:30px;
  margin-left:10%;
  line-height: 50px;
  background: #007eff;
  color:black;
  border-radius: 10px;
  border:none;
  font-size: 20px;
  
}
</style>
