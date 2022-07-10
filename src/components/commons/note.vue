<template>
  <div class="right">
    <el-table :data="tableData" stripe>
      <el-table-column prop="notice" :label="menuname" width="900">
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
      menuname: "",
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
      console.log(this.curpage);
      axios(
        "http://cybwmy.top:8082/menu/blogs/" +
          this.menuId +
          "?currentPage=" +
          this.curpage
      ).then((res) => {
        console.log(res);
        this.tableData = res.data.object.object;
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
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
  color: rgb(39, 39, 212);
}
.el-table {
  margin-left: 50px;
}
.el-pagination {
  margin-left: 50px;
  margin-top: 20px;
}
</style>
