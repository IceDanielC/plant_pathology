<template>
  <div id="app">
    <myhead />
  <div>
    <router-view/>
  </div>
  <myfoot/>
  </div>
</template>

<script>
import myhead from './components/my-head.vue'
// import axios from 'axios'
import myfoot from '@/components/my-foot.vue'

export default {
  name: 'App',
  components: {
    myhead,
    myfoot
  },
  created(){
          // axios({
          // url:'http://cyb.gz2vip.91tunnel.com/dynamic/get'
          // }).then(res => {
          //   console.log(res.data.object);
          // })
        },
}
</script>

<style>
/* #app {
  margin: 0px 80px;
}  */
h4{
    text-align: center;
}
.left{
    display: flex;
    height: 600px;
}
.right{
    width: 90%;
    padding: 10px;
}
</style>
