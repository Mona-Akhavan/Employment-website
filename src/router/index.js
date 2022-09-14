import Vue from "vue";
import VueRouter from "vue-router";
import Header from "@/components/main/Header";
import Register from "@/components/user/Register";
import login from "@/components/user/login";
import one from "@/components/SiteContent/Article/one";
import two from "@/components/SiteContent/Article/two";
import About from "@/components/AboutUs/About";
import Display from "@/components/Display";
import Contact from "@/components/ContactUs/Contact";
import Detail from "@/components/SiteContent/Detail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Header,
  },
  {
    path: "/Register",
    component: Register,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/Articles/one",
    component: one,
  },
  {
    path: "/Articles/two",
    component: two,
  },
  {
    path: "/About-Us",
    component: About,
  },
  {
    path: "/DisplaySearch",
    component: Display,
  },
  {
    path:"/Contact-Us",
    component: Contact
  },
  {
    path: "/detail/:id",
    name:"detail",
    component: Detail,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
