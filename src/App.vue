<template>
  <div id="app">
    <p><router-link to="/first">First page</router-link></p>
    <p><router-link to="/second">Second page</router-link></p>
    <p><router-link to="/third">Third page</router-link></p>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
