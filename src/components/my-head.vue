<template>
  <div>
    <div class="header">
      <h1>陕西省植物病理学会</h1>
      <p>Shaanxi Provincial Society for Plant Pathology</p>
    </div>
    <div class="menu">
      <el-menu
        :default-active="getPath"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#333"
        active-text-color="#006d3b"
        background-color="#fff"
        :router="true"
      >
        <el-menu-item index="/home" style="width: 130px">
          <span class="titleFont">首页</span>
        </el-menu-item>
        <el-submenu index="/xhgk">
          <template slot="title">
            <span class="titleFont">学会概况</span>
          </template>
          <el-menu-item index="/content/rwjs?Id=13&pId=1"
            >人物介绍</el-menu-item
          >
          <el-menu-item
            v-for="(p, i) in data1"
            :key="i"
            :index="'/content/about?Id=' + p.id + '&pId=' + p.parentCid"
            >{{ p.menuName }}</el-menu-item
          >
        </el-submenu>
        <el-submenu index="/xhdt">
          <template slot="title">
            <span class="titleFont">学会动态</span>
          </template>
          <el-menu-item
            v-for="(p, i) in data2"
            :key="i"
            :index="'/center/note?Id=' + p.id + '&pId=' + p.parentCid"
            >{{ p.menuName }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item index="/center/note?Id=35&pId=3">
          <span class="titleFont">学术交流</span>
        </el-menu-item>
        <el-submenu index="/kjfw">
          <template slot="title">
            <span class="titleFont">科技服务</span>
          </template>
          <el-menu-item
            v-for="(p, i) in data3"
            :key="i"
            :index="'/center/note?Id=' + p.id + '&pId=' + p.parentCid"
            >{{ p.menuName }}</el-menu-item
          >
          <!-- @click="getid2(p.id,data3,'科技服务',p.menuName)" -->
        </el-submenu>
        <el-submenu index="/kxpj">
          <template slot="title">
            <span class="titleFont">科学普及</span>
          </template>
          <el-menu-item
            v-for="(p, i) in data4"
            :key="i"
            :index="'/center/note?Id=' + p.id + '&pId=' + p.parentCid"
            >{{ p.menuName }}</el-menu-item
          >
          <!-- @click="getid2(p.id,data4,'科学普及',p.menuName)" -->
        </el-submenu>
        <el-submenu index="/bhfk">
          <template slot="title">
            <span class="titleFont">病害防控</span>
          </template>
          <el-menu-item
            v-for="(p, i) in data5"
            :key="i"
            :index="'/center/note?Id=' + p.id + '&pId=' + p.parentCid"
            >{{ p.menuName }}</el-menu-item
          >
          <!-- @click="getid2(p.id,data5,'病害防控',p.menuName)" -->
        </el-submenu>
        <el-menu-item index="/xhdj">
          <span class="titleFont">学会党建</span>
        </el-menu-item>
        <el-menu-item index="/lxwm">
          <span class="titleFont">联系我们</span>
        </el-menu-item>
        <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import {bus} from '@/bus'

export default {
  name: "my-head",
  data() {
    return {
      activeIndex: "/home",
      activeIndex2: "/home",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
    };
  },
  computed: {
    //默认选择的当前路由
    getPath() {
      if (this.$route.path.includes("home")) {
        return "/home";
      }
      if (this.$route.path.includes("xhdj")) {
        return "/xhdj";
      }
      if (this.$route.path.includes("lxwm")) {
        return "/lxwm";
      }
      if (this.$route.path.includes("note")) {
        return (
          "/center/note" +
          "?Id=" +
          this.$route.query.Id +
          "&pId=" +
          this.$route.query.pId
        );
      }
      if (this.$route.path.includes("center/content")) {
        return (
          "/center/note" +
          "?Id=" +
          this.$route.query.Id +
          "&pId=" +
          this.$route.query.pId
        );
      }
      return (
        this.$route.path +
        "?Id=" +
        this.$route.query.Id +
        "&pId=" +
        this.$route.query.pId
      );
    },
  },
  created() {
    //这里修改了后端逻辑，保证通过一次请求就能获取到所有的菜单
    axios({
      url: "http://cybwmy.top:8082/menu/all",
    }).then((res) => {
      this.data1 = res.data.object[0].children;
      this.data1 = this.data1.slice(1);
      this.data2 = res.data.object[1].children;
      this.data3 = res.data.object[3].children;
      this.data4 = res.data.object[4].children;
      this.data5 = res.data.object[5].children;
      localStorage.setItem("menuList", JSON.stringify(res.data.object));
    });
  },
};
</script>

<style>
.titleFont {
  font-size: 18px;
}
h1 {
  color: #fff;
  margin: 0px 80px;
}
.header {
  padding: 25px 20px;
  background: linear-gradient(to right, #3eb134, #006d3b);
  /* background-color: rgb(86, 117, 86); */
  color: #fff;
  border-bottom: 1px solid white;
}
p {
  margin: 0px 80px;
}
.menu {
  /* margin-left: 120px; */
  width: 1250px;
  margin: 0 auto;
}
.el-menu {
  border-bottom: none !important;
}
.el-submenu__title {
  text-align: center;
  width: 140px;
  font-size: 15px !important;
}
.el-menu-item {
  text-align: center;
  width: 140px;
  font-size: 15px !important;
}
.el-menu-demo {
  justify-items: center;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 140px !important;
}
</style>