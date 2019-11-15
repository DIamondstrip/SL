<template>
  <div>
    <keep-alive>
      <Phoneinput v-if="appear" @switchcomps="getappear"></Phoneinput>
    </keep-alive>

    <keep-alive>
      <Codeinput v-if="!appear" :userphone="userphone"></Codeinput>
    </keep-alive>
  </div>
</template>

<script>
import Phoneinput from "./Phoneinput";
import Codeinput from "./Codeinput";
export default {
  name: "codelogin",
  data() {
    return {
      // 控制Phoneinput和Codeinput两个组件的切换
      appear: true,
      userphone: ""
    };
  },
  components: {
    Phoneinput,
    Codeinput
  },
  methods: {
    getappear(num) {
      //子组件传来的值
      // console.log(num);
      this.appear = false,
      this.userphone = num.phone;
    }
  }
};
</script>

<style>
</style>