<template>
  <div id="app">
  <mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
<div>
  <i class="fa fa-bath" aria-hidden="true"></i>
</div>
    <router-view/>
  </div>
</template>

<style>
div{
  width: 50px;
  height: 100px;
  background: yellow;
}
</style>
