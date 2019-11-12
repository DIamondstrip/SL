<template>
  <div class="nav" ref="nav">
    
      <router-link to="/">
        <div class="one" @click='one()' ref="one">
        </div>
      </router-link>
    
    
        <router-link to="/message">
        <div class="two" @click='two()' ref="two">
         </div>
        </router-link>
      
   
    
        <router-link to="/mine">
        <div class="three" @click='three()' ref="three">
         </div>
         </router-link>
     
    
  </div>
</template>

<script>
import Eventbus from '../eventbus.js'
export default {
mounted() {
  Eventbus.$on('showFooter',(isShow)=>{
      if(isShow){
        this.$refs.nav.style.display="flex";
      }else{
        this.$refs.nav.style.display="none";

      }
  });

},
methods: {
  one(){
    this.$refs.one.style.backgroundPosition='-6px -5px'
    this.$refs.two.style.backgroundPosition='-260px -70px'
    this.$refs.three.style.backgroundPosition='-390px -70px'
  },
  two(){
    this.$refs.one.style.backgroundPosition='-6px -71px'
    this.$refs.two.style.backgroundPosition='-260px -4px'
    this.$refs.three.style.backgroundPosition='-390px -70px'
  },
  three(){
    this.$refs.one.style.backgroundPosition='-6px -71px'
    this.$refs.two.style.backgroundPosition='-260px -70px'
    this.$refs.three.style.backgroundPosition='-390px -4px'
  }
},
}
</script>


<style scoped>
.nav {
  width: 100%;
  position: fixed;
  background: white;
  bottom: 0;
  border-top: 1px solid #ccc;
}

.nav div{
  width:125px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  
  
}
.nav .one{
  /* background:url('../../public/img/icon1.png') no-repeat -6px -5px; */
  background:url('../../public/img/icon1.png') no-repeat -6px -71px;
  background-size: 400%
}
.nav .two{
  /* background:url('../../public/img/icon1.png') no-repeat -260px -4px; */
  background:url('../../public/img/icon1.png') no-repeat -260px -70px;
  background-size:400%
}
.nav .three{
  /* background:url('../../public/img/icon1.png') no-repeat -390px -4px; */
  background:url('../../public/img/icon1.png') no-repeat -390px -70px;
  background-size:400%

}

</style>

