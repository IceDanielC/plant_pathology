import VueRouter from "vue-router";
import myhome from "../views/my-home.vue"
import myxsjl from "../views/my-xsjl.vue"

import note from "@/components/commons/note.vue"
import center from '@/components/my-center.vue'
 import content from '@/components/commons/content.vue'

//创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home',
            meta:{title:'首页'}
        },
        {
            path:'/home',
            component:myhome,
            meta:{title:'首页'}
        },
                {
                    path:'/9',
                    name:'tzgg',
                    component:center,
                    children:[
                        {
                            path:'/9/note',
                            component:note,
                        },
                        {
                            path:'/9/content',
                            component:content,
                        }
                    ]
                },
                {
                    path:'/10',
                    name:'gxdt',
                    component:center,
                    children:[
                        {
                            path:'/10/note',
                            component:note,
                        },
                        {
                            path:'/10/content',
                            component:content,
                        }
                    ]
                },
                {
                    path:'/11',
                    name:'szdt',
                    component:center,
                    children:[
                        {
                            path:'/11/note',
                            component:note,
                        },
                        {
                            path:'/11/content',
                            component:content,
                        }
                    ]
                },
                {
                    path:'/12',
                    name:'dsdt',
                    component:center,
                    children:[
                        {
                            path:'/12/note',
                            component:note,
                        },
                        {
                            path:'/12/content',
                            component:content,
                        }
                    ]
                },
                {
                    path:'/19',
                    name:'bhjd',
                    component:center,
                    children:[
                        {
                            path:'/19/note',
                            component:note,
                        },
                        {
                            path:'/19/content',
                            component:content,
                        }
                    ]
                },
                {
                    path:'/20',
                    name:'bhjc',
                    component:center,
                    children:[
                        {
                            path:'/20/note',
                            component:note,
                        }
                    ]
                },
                {
                    path:'/21',
                    name:'bdjc',
                    component:center,
                    children:[
                        {
                            path:'/21/note',
                            component:note,
                        }
                    ]
                },
                {
                    path:'/22',
                    name:'kxjd',
                    component:center,
                    children:[
                        {
                            path:'/22/note',
                            component:note,
                        }
                    ]
                },
                {
                    path:'/23',
                    name:'hypx',
                    component:center,
                    children:[
                        {
                            path:'/23/note',
                            component:note,
                        }
                    ]
                },
        // {
        //     path:'/xhdt',
        //     name:'center',
        //     component:center,
        // },
        // {
        //     path:'/xhgk/1',
        //     name:'xhjl',
        //     meta:{title:'学会简历'},
        //     component:center,
        // },
        // {
        //     path:'/xhgk/2',
        //     name:'lsyg',
        //     meta:{title:'历史沿革'},
        //     component:center,
        // },
        // {
        //     path:'/xhgk/3',
        //     name:'lsh',
        //     meta:{title:'理事会'},
        //     component:center,
        // },
        // {
        //     path:'/xhgk/4',
        //     name:'lsdw',
        //     meta:{title:'理事单位'},
        //     component:center,
        // },
        // {
        //     path:'/xhgk/5',
        //     name:'xhzc',
        //     meta:{title:'学会章程'},
        //     component:center,
        // },
        {
            path:'/xsjl',
            component:myxsjl,
        },
    ]
})