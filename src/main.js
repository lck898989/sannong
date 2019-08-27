// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from "vue-router";
import App from './App'
import router from './router'
import store from "./store";
import "./resetcss/reset.css";
Vue.config.productionTip = false
Vue.use(vueRouter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {

  },
  router,
  created: function() {
    console.log("重新加载");
    this.$store.state.update = true;
  },
  store,
  components: { App },
  template: '<App/>'
})
