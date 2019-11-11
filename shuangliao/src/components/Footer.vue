<template>
  <div class="nav">
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
export default {};
</script>


<style scoped>
.nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
}

.nav>div  {
  height: 50px;
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>

