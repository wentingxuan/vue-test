<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  /*background: url(assets/bg.jpg);*/
}
  *{
    margin:0;
    padding:0;
  }
html,body,#app{

  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;


}

</style>
