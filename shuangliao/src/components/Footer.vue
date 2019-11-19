<template>
  <div class="nav" ref="nav">
    <div>
      <router-link to="/">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </router-link>
    </div>
    <div>
      <router-link to="/message">
        <i class="fa fa-comment-o" aria-hidden="true"></i>
      </router-link>
    </div>
    <div>
      <router-link to="/mine">
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Eventbus from "../eventbus.js";
export default {
  mounted() {
    Eventbus.$on("showFooter", isShow => {
      if (isShow) {
        this.$refs.nav.style.display = "flex";
      } else {
        this.$refs.nav.style.display = "none";
      }
    });
  }
};
</script>


<style scoped>
.nav {
  width: 100%;
  position: fixed;
  background: white;
  bottom: 0;
  display: flex;
  border-top: 1px solid #ccc;
}
.nav > div {
  height: 50px;
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>