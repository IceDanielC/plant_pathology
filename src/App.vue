<template>
  <div id="app">
    <myhead />
    <div class="w">
      <router-view />
    </div>
    <myfoot />
  </div>
</template>

<script>
import myhead from "./components/my-head.vue";
// import axios from 'axios'
import myfoot from "@/components/my-foot.vue";

export default {
  name: "App",
  components: {
    myhead,
    myfoot,
  },
};
</script>

<style>
/* #app {
  margin: 0px 80px;
}  */
#app {
  /* height: 100%; */
  min-width: 1300px;
}
h4 {
  text-align: center;
}
.left {
  display: flex;
  height: 600px;
}
.right {
  padding: 10px;
  height: 1000px;
  height: auto;
}
</style>
