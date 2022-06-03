import VueRouter from "vue-router";
import myhome from "../views/my-home.vue";
import myxsjl from "../views/my-xsjl.vue";

import note from "@/components/commons/note.vue";
import center from "@/components/my-center.vue";
import content from "@/components/commons/content.vue";

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

    // {
    //   path: "/13",
    //   component: center,
    //   children: [
    //     {
    //       path: "/13/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/14",
    //   component: center,
    //   children: [
    //     {
    //       path: "/14/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/15",
    //   component: center,
    //   children: [
    //     {
    //       path: "/15/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/16",
    //   component: center,
    //   children: [
    //     {
    //       path: "/16/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/17",
    //   component: center,
    //   children: [
    //     {
    //       path: "/17/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/9",
    //   name: "tzgg",
    //   component: center,
    //   children: [
    //     {
    //       path: "/9/note",
    //       component: note,
    //     },
    //     {
    //       path: "/9/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/10",
    //   name: "gxdt",
    //   component: center,
    //   children: [
    //     {
    //       path: "/10/note",
    //       component: note,
    //     },
    //     {
    //       path: "/10/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/11",
    //   name: "szdt",
    //   component: center,
    //   children: [
    //     {
    //       path: "/11/note",
    //       component: note,
    //     },
    //     {
    //       path: "/11/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/12",
    //   name: "dsdt",
    //   component: center,
    //   children: [
    //     {
    //       path: "/12/note",
    //       component: note,
    //     },
    //     {
    //       path: "/12/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/19",
    //   name: "bhjd",
    //   component: center,
    //   children: [
    //     {
    //       path: "/19/note",
    //       component: note,
    //     },
    //     {
    //       path: "/19/content",
    //       component: content,
    //     },
    //   ],
    // },
    // {
    //   path: "/20",
    //   name: "bhjc",
    //   component: center,
    //   children: [
    //     {
    //       path: "/20/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/21",
    //   name: "bdjc",
    //   component: center,
    //   children: [
    //     {
    //       path: "/21/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/22",
    //   name: "kxjd",
    //   component: center,
    //   children: [
    //     {
    //       path: "/22/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/23",
    //   name: "hypx",
    //   component: center,
    //   children: [
    //     {
    //       path: "/23/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/24",
    //   name: "xmbh",
    //   component: center,
    //   children: [
    //     {
    //       path: "/24/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/25",
    //   name: "pgbh",
    //   component: center,
    //   children: [
    //     {
    //       path: "/25/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/26",
    //   name: "mlsbh",
    //   component: center,
    //   children: [
    //     {
    //       path: "/26/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/27",
    //   name: "zbxx",
    //   component: center,
    //   children: [
    //     {
    //       path: "/27/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/28",
    //   name: "bhdc",
    //   component: center,
    //   children: [
    //     {
    //       path: "/28/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/29",
    //   name: "bhjc",
    //   component: center,
    //   children: [
    //     {
    //       path: "/29/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/30",
    //   name: "bhyj",
    //   component: center,
    //   children: [
    //     {
    //       path: "/30/note",
    //       component: note,
    //     },
    //   ],
    // },
    // {
    //   path: "/31",
    //   name: "bhfk",
    //   component: center,
    //   children: [
    //     {
    //       path: "/31/note",
    //       component: note,
    //     },
    //   ],
    // },
    {
      path: "/xsjl",
      component: myxsjl,
    },
  ],
});
