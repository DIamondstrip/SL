<template>
<div>
<li class="fa fa-search" aria-hidden="true"></li>
<li class="title">{{title}}</li>
<li class="isex">只看异性</li>
</div>
</template>

<script>
export default {
    data(){
      return {
        title:'交友',
      }
    }
}
</script>


<style scoped>
div{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  text-align: center

}
li {
  font-size: 20px;
}
.title{
  margin-left: 50px;
}

.isex{
  background: #FF7363;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  width: 80px;
}
</style>


