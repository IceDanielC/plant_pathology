<template>
  <div class="right">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ menu.menuName }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ menu.childName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" stripe>
      <el-table-column prop="notice" min-width="100%">
        <template slot-scope="scope">
          <a target="_self" class="buttonText" @click="gettext(scope.row.id)">
            {{ scope.row.title }}
          </a>
          <a target="_self" style="float: right" @click="gettext(scope.row.id)">
            {{ scope.row.date }}
          </a>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :size="3"
        :total="totalcount"
        @current-change="handleCurrentChange"
        :current-page="curpage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "@/bus";

export default {
  name: "my-note",
  data() {
    return {
      menu: {},
      tableData: [],
      totalcount: 1,
      curpage: 1,
      menuId: 0,
      title: "",
    };
  },
  computed: {},
  methods: {
    gettext(id) {
      this.$router.push({
        //只做路径跳转，具体查文章让content自己去做
        path:
          "/center/content?Id=" +
          this.$route.query.Id +
          "&pId=" +
          this.$route.query.pId +
          "&textId=" +
          id,
      });
    },
    handleCurrentChange(val) {
      this.curpage = val;
      axios(
        "http://cybwmy.top:8082/menu/blogs/" +
          this.menuId +
          "?currentPage=" +
          this.curpage
      ).then((res) => {
        this.tableData = res.data.object.object;
      });
    },
    //获取一级菜单、二级菜单名字
    getMenuName() {
      axios.get(`http://cybwmy.top:8082/menu/all`).then((res) => {
        this.menu = res.data.object[this.$route.query.pId - 1];
        for (let i = 0; i < this.menu.children.length; i++) {
          if (this.menu.children[i].id == this.$route.query.Id) {
            this.menu.childName = this.menu.children[i].menuName;
            break;
          }
        }
      });
    },
  },
  mounted() {
    bus.$on("table", (data) => {
      this.tableData = data;
    }),
      bus.$on("total", (data) => {
        this.totalcount = data;
      });
    bus.$on("menuId", (data) => {
      this.menuId = data;
    });
    this.getMenuName();
  },
};
</script>

<style scoped>
.right {
  width: 75%;
}
a:hover {
  cursor: pointer;
  color: #118a31;
}
.el-table {
  margin-left: 50px;
}
.el-pagination {
  margin-left: 50px;
  margin-top: 20px;
}
.el-breadcrumb {
  margin: 20px 0 30px 58px;
}
.el-table :deep() .el-table__header {
  display: none !important;
}
.el-table::before {
  display: none;
}
</style>
