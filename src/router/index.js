import VueRouter from "vue-router";
import myhome from "../views/my-home.vue";
import myxhdj from "../views/my-xhdj.vue";

import note from "@/components/commons/note.vue";
import center from "@/components/my-center.vue";
import content from "@/components/commons/content.vue";
import myxhgk from "@/components/xhgk-center.vue"
import about from "@/components/commons/about.vue"
import rwjs from "@/components/commons/rwjs.vue"
import myxsjl from '@/views/my-xsjl.vue'
import myabout from '@/views/my-about.vue'

//创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: { title: "首页" },
    },
    {
      path: "/home",
      component: myhome,
      meta: { title: "首页" },
    },
    //xzs 这样路由保证后面新增也一样能路由到,而且不再需要写多个路由
    {
      path: "/center",
      component: center,
      name: "test",
      children: [
        {
          path: "/center/content",
          component: content,
        },
        {
          path: "/center/note",
          component: note,
        },
      ],
    },
    {
      path: "/content",
      component: myxhgk,
      children:[
        {
          path:"/content/about",
          component: about
        },
        {
          path:"/content/rwjs",
          component: rwjs
        },
      ]
    },
    {
      path: "/xsjl",
      component: myxsjl,
    },
    {
      path: "/xhdj",
      component: myxhdj,
    },
    {
      path: '/lxwm',
      component: myabout
    }
  ],
});
