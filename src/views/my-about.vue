<template>
  <div class="text" :style="contentHeight">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联系我们</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <div>
      <p>地址：陕西省咸阳市杨凌国家农业高新技术产业示范区西农路51号</p>
      <p>挂靠单位：西北农林科技大学植物保护学院</p>
      <p>办公地点：陕西杨凌邰城路3号，西北农林科技大学南校区农科楼植保411</p>
      <p>办公电话：029-87082001</p>
      <p>学会账号：102850386616</p>
      <p>账号名称：陕西省植物病理学会</p>
      <p>开会银行：中国银行杨凌农业高新技术产业示范区支行营业部</p>
      <p>联系人：胡小平  E-mail: xphu@nwsuaf.edu.cn      冯浩  E-mail: xiaosong04005@163.com</p>
      <p>开发：陈胤冰、薛雨欣、夏张松、刘晓雪</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-about",
  data() {
    return {
      contentHeight: {
        height: ''
      }
    }
  },
  methods: {
    getHeight(){
      this.contentHeight.height = window.innerHeight - 285+'px'
    }
  },
  created() {
    this.getHeight()
  },
};
</script>

<style scoped>
.text {
  height: 500px;
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