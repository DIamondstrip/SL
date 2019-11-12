<template>
  <div>
    <van-nav-bar  left-text="返回" left-arrow  @click-left="onClickLeft">
        <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style scoped>
</style>