<template>
  <div id="app">
    <div class="bannerBox">
      <img src="./assets/banner.jpg" class="banner">
      <nav-bar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  data() {
    return {
      message: "asd"
    }
  },
  created() {
    console.log("nva is ",NavBar);
    console.log("app created");
  },
  components: {
    "nav-bar": NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.banner {
  margin-top: 0px;
}
.bannerBox {
  position: relative;
}
.banner {
  width: 100%;
  height: auto;
}
</style>
