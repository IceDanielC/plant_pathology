<template>
  <div>
    <my-lunbo />
    <el-divider content-position="center"><h2>学会动态</h2></el-divider>
    <transition name="card-slide">
      <div v-show="show" class="szdt">
        <mycard />
      </div>
    </transition>
    <div class="gxdt"></div>
    <div class="tzgg"></div>
  </div>
</template>

<script>
import myLunbo from "../components/my-lunbo.vue";
import mycard from "@/components/commons/card.vue";

export default {
  components: { myLunbo, mycard },
  name: "my-home",
  data() {
    return {
      scrollY1: 0,
    };
  },
  computed: {
    show() {
      if (this.scrollY1 > 0) return true;
      return false;
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      this.scrollY1 = window.scrollY;
      console.log(this.scrollY1);
    });
  },
};
</script>

<style scoped>
h2 {
  color: darkgreen;
}
.card-slide-enter,.card-slide-leave-to {
  transform: translateY(150px);
  opacity: 0;
}
.card-slide-enter-active {
  transition: all 1.7s ease;
}
</style>