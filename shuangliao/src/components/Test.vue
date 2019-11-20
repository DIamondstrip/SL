<template>
  <div class="Test">
    <!-- 头部 -->
    <div class="van-doc-nav-bar van-nav-bar" style="z-index: 1; border-bottom:1px solid #ccc">
      <div class="van-nav-bar__left" @click="returned()">
        <!-- <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"> -->
        <van-icon name="down" class="pb_icon" />
        <!---->
        <!-- </i> -->
      </div>
      <div class="van-nav-bar__title van-ellipsis">
          
          <slot></slot>
    </div>
      <div class="van-nav-bar__right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  methods: {
    returned(){
       this.$router.back();
    }
  },
};
</script>

<style scoped>
.Test{
    width: 100%;
}
.Test .van-nav-bar__left .pb_icon {
  transform: rotate(90deg);
  font-size: 24px;
  color: black;
}

.van-doc-nav-bar {
  margin-bottom: 10px;
}
</style>