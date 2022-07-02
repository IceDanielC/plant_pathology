<template>
  <div :span="12" width="380px" class="left">
    <div id="d1">
      <h4>学术交流</h4>
      <el-menu
        :default-active="'/xsjl'"
        mode="horizontal"
        class="el-menu-vertical-demo"
        :router="true"
      >
        <el-menu-item :index="'/xsjl'">
          <i class="el-icon-location"></i>
          <span slot="title">学术交流</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "my-xsjl",
};
</script>

<style scoped>
#d1 {
  margin-right: 0px;
  height: 650px;
  text-align: center;
}
.left {
  height: auto;
  width: 100%;
}
.el-menu,
.el-menu-item {
  width: 200px;
}
</style>