<template>
  <div id="app">
    
    <div class="box"></div>

    <router-view/>
  </div>
</template>

<style lang="less">
  body{
    background-color: #F7F7F7;

  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #444;
}
.auto-img{
    width: 100%;
    display: block;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
.fl{
  float: left;
}
.fr{
  float: right;
}

.one-text{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
