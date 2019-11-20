<template>
  <div>
    <div class="search">
      <i
        class="fa fa-arrow-left"
        aria-hidden="true"
        style="vertical-align: middle;"
        @click="goBack"
      ></i>
      <input ref="searchInput" v-model.trim="title" placeholder="输入要搜索的用户称昵" v-ifocus @input="fetchData"/>

    </div>
    <ul class="content">
      <li :key="item.index" v-for="item in text">
        <!-- 左边的头像 -->
        <div class="userpic">
          <img :src="item.avatar" alt />
        </div>
        <div class="usermsg">

          <p>
            测试文字,性别:{{ item.sex }},称昵:{{ item.nick }}
            <span class="sex">
              <i class="fa fa-mars" aria-hidden="true"></i>
              <em class="age">{{ item.age }}</em>
            </span>
          </p>
          <!-- 下面的ID -->
          <span>{{ item.uid }}</span>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 节流函数
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export default {
  name: "search",
  data() {
    return {
      title: "",
      timeout: null, //计时器
      text: [] //search  请求后返回的数据，渲染到搜索框下面的内容中
      // textlist:[]
    };
  },

  watch: {
    //watch title change
    title() {
      delay(() => {
        this.fetchData();
      }, 500);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchData(val) {
      if ((val = "")) {
        //输入框的值为空
        // 搜索框下方,两条线不显示
        
      } else {
        //输入框的值不为空
        // 发送axios请求。接口文档 https://www.showdoc.cc/chen123456789?page_id=3356871744508448
        try {
          console.log(val);
          const res = await this.$axios({
            method: "post",
            url: "/searchUsers",
            params: {
              tel: "15167171531",
              content: this.title
            }
          });
          // success: false
          if (res.data.success) {
            this.text = res.data.data;
          }else{
            // 搜索框下方,两条线不显示,包括渲染的内容清空
            this.text =[]
          }
        } catch (error) {
          // 请求不成功
          console.log(error);
        }
      }
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
