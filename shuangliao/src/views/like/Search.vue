<template>
  <div>
    <div class="search">
      <i
        class="fa fa-arrow-left"
        aria-hidden="true"
        style="vertical-align: middle;"
        @click="goBack"
      ></i>
      <input placeholder="搜索你想要的内容" v-ifocus />
    </div>
    <ul class="content">
        <!--  -->
      <li :key="item.index" v-for="item in friend">
        <div class="userpic">
          <img :src= item.avatar alt />
        </div>
        <div class="usermsg">

          <p>
            测试文字
            <span class="sex">
              <i class="fa fa-mars" aria-hidden="true"></i>
              <em class="age">23</em>
              <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
            </span>
          </p>
          <span>ID:123456</span>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { log } from 'util';
export default {
    data(){
        return {
            friend:[]
        }
    },
  methods: {
    goBack() {
      this.$router.go(-1);
    }

  },
  directives: {
    ifocus: {
      // 自动获取焦点的指令
      inserted(el) {
        el.focus();
      }
    }
  },
  mounted() {
    this.$axios({
      method: "post",
      url: "/searchUsers",
      params: {
          tel: "15167171531",
        content: "李"
      }
    }).then(res=>{
        console.log(res.data.data[0].avatar);
        return this.friend = res.data.data;
        
    });
  }
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 1px solid gray;
}
.search input {
  border: 2px #cccccc solid;
  width: 70%;
  border-radius: 20px;
  font-size: 16px;
  margin-left: -40px;
  padding: 5px 0 5px 20px;
  background: #ddd;
}
.search i {
  margin-top: 5px;
}
.content {
  border-bottom: 1px gray solid;
  padding: 10px;
}
.content .userpic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
.content .usermsg {
  display: inline-block;
  margin-left: 30px;
  font-size: 16px;
  vertical-align: middle;
}
.content .usermsg .sex {
  margin-left: 10px;
  padding: 3px 5px;
  background: pink;
  border-radius: 5px;
  font-size: 12px;
}
</style>
