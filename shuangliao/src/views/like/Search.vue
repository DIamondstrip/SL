<template>
  <div>
    <div class="search">
      <i
        class="fa fa-arrow-left"
        aria-hidden="true"
        style="vertical-align: middle;"
        @click="goBack"
      ></i>
      <!-- v-on:input ="inputFunc"监听input的输入值变化事件 -->
      <!-- v-model="demo"绑定v-modl，用来监听input数据 -->
      <input
        v-model="inputTxt"
        placeholder="搜索你想要的内容"
        v-ifocus
        v-on:input="searchUser"
      />
    </div>

    <!-- 搜索框下面的 -->
    <ul class="content">
      <li>
        <!-- 左边的头像 -->
        <div class="userpic">
          <!-- <img
            src="http://img0.imgtn.bdimg.com/it/u=154152772,568223528&fm=26&gp=0.jpg"
            alt
          /> -->
          <img src="textlist.xxx" alt />
        </div>
        <!-- 右边的用户信息 -->
        <div class="usermsg">
          <!-- 上面的文字 -->
          <p>
            测试文字
            <span class="sex">
              <i class="fa fa-mars" aria-hidden="true"></i>
              <!-- <em class="age">23</em> -->
              <em class="age">textlist.xxx</em>

              <!-- <i class="fa fa-venus" aria-hidden="true"></i> -->
            </span>
          </p>
          <!-- 下面的ID -->
          <!-- <span>ID:123456</span> -->
          <span>ID:textlist.xxx</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // input的值
      inputTxt: '',
      // this.textlist为搜索框下面的内容
      textlist: [
                '吃饭',
                '吃面包',
                '吃面条',
                '喝水',
                '喝茶',
                '喝茶叶',
            ]
    };
  },
  // 通过watch来直接监测demo，如果demo的值变化，value的值也会跟着一起变化。
  watch: {
    inputTxt(textlist) {
      this.textlist = this.inputTxt;
    }
  },
   //下方提示内容的过滤
  computed: { // 计算属性
        filter_textlist() {
            if (!this.inputTxt) {
                return [];
            }
            return this.textlist.filter((text) => {
                return text.startsWith(this.inputTxt)
            })
        },
        methods: {
            goBack() {
            this.$router.go(-1);
        },
        // 搜索用户的v-model
        searchUser(val) {
            this.lastTimer = val; // lastTimer为全局变量
        clearTimeout(timeoutId);
        let timeoutId = setTimeout(function() {
            if(this.lastTimer === val){//如果this.lastTimer === val（也就是你停止输入0.5s之内都没有其它的值发生变化）则做你想要做的事
                    // 发送axios请求
                    axios({
                    method: "post",
                    // url: "/editUserInfo",
                    //传参
                    data: {
                        tel: 13516783231,
                        nick: "dd"
                    }
                    })
                    .then(response => {
                        console.log(response.data);
                        if (response.data.messge) {
                        // 把数据实时反馈到界面

                        }
                    })
                    .catch(error => {
                        // 请求不成功
                        console.log(error);
                    });
                }
            }, 2000);
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
