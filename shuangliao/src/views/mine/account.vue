<template>
  <div>
    <Test>账号信息</Test>
    <div class="account">
      <div class="account-name">
        <p>真实姓名：</p>
        <p class="input"
           v-if="nameShow2">{{nameValue2}}</p>
        <input type="text"
               placeholder="请输入真实姓名"
               v-model="nameValue1"
               v-if="nameShow1"
               class="input" />
      </div>
      <div class="account-zfb">
        <p>支付宝账号：</p>
        <p class="input"
           v-if="numShow2">{{numValue2}}</p>
        <input type="text"
               placeholder="填写支付宝账号"
               v-model="numValue1"
               class="input"
               v-if="numShow1" />
        <button @click="finish"
                ref="btnRef">{{butValue}}</button>
      </div>
      <div class="account-msg">
        <p>注意事项：</p>
        <p>
          1.
          请认真核对您的个人信息以及绑定的收款账户，请务必确认所填信息真实有效
        </p>
        <p>2. 如因您填写的账户有误而出现问题，后果均由您本人承担</p>
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from '../../eventbus'
import Test from '../../components/Test'
export default {
  name: 'account',
  data() {
    return {
      nameValue1: '',
      nameValue2: '',
      numValue1: '',
      numValue2: '',
      nameShow1: true,
      nameShow2: false,
      numShow1: true,
      numShow2: false,
      butValue: '保存',
      user: '',
      message: ''
    }
  },
  methods: {
    finish() {
      if (this.message != 11000) {
        if (!/^[\u4e00-\u9fa5]{2,6}$/.test(this.nameValue1)) {
          this.$toast({ type: 'fail', message: '请输入真实姓名' })
          this.nameValue = ''
          this.$refs.btnRef.style = 'background:#b2b2b2'
        } else if (!/^[1]([3-9])[0-9]{9}$/.test(this.numValue1)) {
          this.$toast({ type: 'fail', message: '请输入正确的支付宝账号' })
          this.numValue = ''
          this.$refs.btnRef.style = 'background:#b2b2b2'
        } else {
          this.$axios({
            method: 'post',
            url: '/bind_name',
            params: {
              tel: this.user.tel,
              name: this.nameValue1,
              pay: this.numValue1
            }
          })
            .then(response => {
              this.$notify({ background: 'green', message: '绑定成功' })
              location.reload()
            })
            .catch(error => {
              console.log(error)
            })
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
      url: '/get_payInfo',
      params: { tel: this.user.tel }
    })
      .then(response => {
        // console.log('挂载', response.data.code)
        if (response.data.code == 11000) {
          this.message = response.data.code
          this.nameShow1 = false
          this.nameShow2 = true
          this.numShow1 = false
          this.numShow2 = true
          this.nameValue2 = response.data.data.iName
          this.numValue2 = response.data.data.iPay
          this.butValue = '已绑定'
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  updated() {
    if (
      /^[\u4e00-\u9fa5]{2,6}$/.test(this.nameValue1) &&
      /^[1]([3-9])[0-9]{9}$/.test(this.numValue1)
    ) {
      this.$refs.btnRef.style = 'background:green'
    }
  }
}
</script>

<style scoped>
.account {
  padding: 20px;
  margin-top: -20px;
}
.account-name p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.account-zfb p {
  color: #1a1a1a;
  font-size: 16px;
  margin: 20px 0;
}
.account .input {
  width: 300px;
  height: 10px;
  background: #f2f2f2;
  border: none;
  font-size: 16px;
  padding: 20px;
  border-radius: 5px;
  line-height: 3px;
}
.account button {
  background: #b2b2b2;
  color: white;
  border: none;
  width: 345px;
  height: 50px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border-radius: 3px;
  margin: 30px 0 10px 0;
}
.account-msg p {
  font-size: 14px;
  color: #999999;
}
</style>
