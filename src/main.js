//引入Vue
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入vuerouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import store from './store'
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import Vuex from 'Vuex'
//关闭生产提示
Vue.config.productionTip = false

Vue.use(QuillEditor)
Vue.use(VueRouter)
// Vue.use(Vuex)
Vue.use(ElementUI)



new Vue({
  render: h => h(App),
  router:router,
  store,
  // beforeCreate(){
  //   Vue.prototype.$bus=this
  // }
  watch: {
    $route: {
      handler:  function (val){
        console.log(val);
      },
      // 深度观察监听
      deep:  true
    }
 },
 beforeCreate(){
  // Vue.prototype.$bus=this
 }
}).$mount('#app')
