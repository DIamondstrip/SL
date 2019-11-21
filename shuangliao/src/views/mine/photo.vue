<template>
  <div class="photo">
    <Test>我的相册</Test>
    <div class="upload">
      <van-uploader :after-read="afterRead"
                    v-model="fileList"
                    :max-count="5">
        <p class="photoP">
          <span class="span1">
            <van-icon name="plus"
                      color="black"
                      size="30px" />
          </span>
          <span class="span2">上传照片</span>
        </p>
      </van-uploader>
    </div>
  </div>
</template>
  
<script>
import eventbus from '../../eventbus'
import Test from '../../components/Test'
export default {
  name: 'photo',
  data() {
    return {
      fileList: [],
      user: '',
      photo: { url: '' }
      //   photoList: []
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
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
          // location.reload()
        })
        .catch(() => {
          console.log(error)
        })
    }
  },
  mounted() {
    eventbus.$emit('showFooter', false)

    this.user = JSON.parse(window.localStorage.getItem('userInfo'))

    this.$axios({
      method: 'post',
      url: '/showMyPhotos',
      params: { tel: this.user.tel }
    })
      .then(response => {
        console.log(response)
        //   this.photoList
      })
      .catch(error => {
        console.log('出错啦！', error)
      })
  },
  computed: {},
  components: {
    Test
  }
}
</script>

<style scoped>
.upload {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.photoP {
  width: 80px;
  height: 80px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2px;
}
.span1 {
  margin-top: 10px;
}
.span2 {
  font-size: 16px;
  margin-top: -10px;
}
</style>
