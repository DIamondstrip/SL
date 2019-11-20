<template>
  <div>
    <Test>上传证件</Test>
    <div class="idCard">
      <!-- 身份证号输入 -->
      <div class="idNum">
        <p>身份证号：</p>
        <p v-if="valueShow2"
           class="input">{{ cardId }}</p>
        <input class="input"
               type="text"
               placeholder="请输入本人身份证号码"
               v-model.trim="value"
               v-if="valueShow1" />
      </div>
      <!-- 身份证上传 -->
      <div class="idUpload">
        <div v-if="imgShow1">
          <p>上传身份证：</p>
          <div class="uploader">
            <van-uploader :after-read="afterRead"
                          v-model="fileList"
                          :max-count="1" />
          </div>
        </div>
        <div v-if="imgShow2">
          <p>身份证照：</p>
          <div class="uploader">
            <img :src="cardUrl"
                 class="img">
          </div>
        </div>
        <div>
          <button @click="finish"
                  ref="btnRef">{{ butValue }}</button>
        </div>
      </div>
      <!-- 提示信息 -->
      <div class="idMsg">
        <p>上传要求：</p>
        <p>1. 请上传身份证清晰正面照</p>
        <p>2. 审核通过后证件照无法修改，请上传您本人真实有效的身份证</p>
        <p>
          3.
          若您上传虚假信息或盗用他人资料等，我司有权对您进行封号处理，情节严重将追究法律责任
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from '../../eventbus'
import Test from '../../components/Test'
export default {
  name: 'idCard',
  data() {
    return {
      value: '',
      fileList: [],
      cardId: '',
      cardUrl: '',
      photo: { url: '' },
      valueShow1: true,
      valueShow2: false,
      imgShow1: true,
      imgShow2: false,
      butValue: '完成',
      user: ''
    }
  },
  methods: {
    afterRead(file) {
      this.uploadImg(file.file)
    },
    uploadImg(file) {
      let formdata1 = new FormData() // 创建form对象
      // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('file',file);
      formdata1.append('file', file)
      this.axios //是因为在main.js写在vue实例里
      this.axiosAjax
        .post('/file/imageupload', formdata1)
        .then(res => {
          console.log(res) //res 为接口返回值
          this.photo.url = res.data.data
          console.log(this.photo.url)
        })
        .catch(() => {
          console.log(error)
        })
    },
    // 按钮点击事件
    finish() {
      if (!this.cardId && !this.cardUrl) {
        if (
          /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value) &&
          this.photo.url
        ) {
          this.$axios({
            method: 'post',
            url: '/uploadCard',
            params: {
              tel: '13516783231',
              card_id: this.value,
              card_url: this.photo.url
            }
          })
            .then(response => {
              this.$notify({ background: 'green', message: '上传成功' })
              location.reload()
            })
            .catch(error => {
              console.log(error)
            })

          this.numShow = this.value
        } else {
          if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value)) {
            this.$toast({
              type: 'fail',
              message: '请输入正确的18位身份证号'
            })
            this.value = ''
            this.$refs.btnRef.style = 'background:#b2b2b2'
          } else if (!this.photo.url) {
            this.$toast({
              type: 'fail',
              message: '请上传身份证正面照'
            })
            this.$refs.btnRef.style = 'background:#b2b2b2'
          }
        }
      }
    }
  },
  computed: {},
  components: {
    Test
  },
  mounted() {
    eventbus.$emit('showFooter', false)

    this.user = JSON.parse(window.localStorage.getItem('userInfo'))

    this.$axios({
      method: 'post',
      url: '/getCardInfo',
      params: { tel: this.user.tel }
    })
      .then(response => {
        console.log('回显', response)
        if (response.data.data.cardId && response.data.data.cardUrl) {
          this.cardId = response.data.data.cardId
          this.cardUrl = response.data.data.cardUrl
          this.valueShow1 = false
          this.valueShow2 = true
          this.imgShow1 = false
          this.imgShow2 = true
          this.butValue = '已上传'
          this.$refs.btnRef.style = 'background:green'
        }
      })
      .catch(error => {})
  },
  updated() {
    if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.value)) {
      this.$refs.btnRef.style = 'background:green'
    }
  }
}
</script>
<style scoped>
.idCard {
  padding: 20px;
  margin-top: -20px;
}
.idNum p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.idUpload p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.idNum .input {
  width: 300px;
  height: 10px;
  background: #f2f2f2;
  border: none;
  font-size: 14px;
  padding: 20px;
  border-radius: 5px;
  line-height: 3px;
}
.uploader {
  padding-left: 30px;
  margin: 14px 0;
}
.idUpload button {
  background: #b2b2b2;
  color: white;
  border: none;
  width: 345px;
  height: 50px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border-radius: 3px;
}
.img {
  width: 300px;
  height: 150px;
}
.idMsg {
  margin: 20px;
}
.idMsg p {
  font-size: 14px;
  color: #999999;
}
</style>
