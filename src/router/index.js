import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home";
import Services from "@/views/Services";
import Products from "@/views/Products";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Contact from "@/views/Contact";
Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
