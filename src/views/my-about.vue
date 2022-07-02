<template>
  <div class="text">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联系我们</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div>
      <p>地址：陕西省咸阳市杨凌国家农业高新技术产业示范区西农路51号</p>
      <p>电话：</p>
      <p>QQ：1119526092@qq.com</p>
      <p>开发：陈胤冰、薛雨欣、夏张松、刘晓雪</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-about",
};
</script>

<style scoped>
.text {
  height: 600px;
}
.text div {
  font-size: 16px;
}
.el-breadcrumb {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 13px;
}
</style>