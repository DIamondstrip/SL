<template>
  <div id="app">
  <router-view class="main"></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
    }
  },
    components:{
      Footer
    }
}
</script>
<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main {
    width: 100%;
    flex:1;
    height: 100%;
  }
</style>
