<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学会党建</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider content-position="center">
      <span>学会党建</span>
    </el-divider>
    <div class="mainbody">
      <el-card
        v-for="t in showTexts"
        :key="t.id"
        :body-style="{ padding: '0px' }"
        class="card"
      >
        <img
          :src="t.img"
          class="image"
          @click="aboutText(t.menuId, t.categoryId, t.id)"
        />
        <div class="content" style="padding: 14px">
          <span
            class="about"
            @click="aboutText(t.menuId, t.categoryId, t.id)"
            >{{ t.title }}</span
          >
          <div class="bottom clearfix">
            <time class="time" @click="aboutText(t.menuId, t.categoryId, t.id)"
              >{{ t.context }}......</time
            ><br />
            <el-button
              type="text"
              class="button"
              @click="aboutText(t.menuId, t.categoryId, t.id)"
              >详情</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="getBlogs"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "my-xhdj",
  created() {
    this.getBlogs(this.currentPage);
  },
  data() {
    return {
      showTexts: [],
      currentPage: 1,
      pageSize: 3,
      //总记录数
      total: 0,
    };
  },
  methods: {
    //获取学会党建的文章
    async getBlogs(currentPage) {
      const { data } = await axios.get("http://cybwmy.top:8082/menu/blogs/37", {
        params: {
          currentPage: currentPage,
          pageSize: this.pageSize,
        },
      });
      // console.log(data.object);
      this.showTexts = data.object.object;
      this.total = data.object.totalCount;
      //除去文章中标签
      for (let i = 0; i < this.showTexts.length; i++) {
        let temp = document.createElement("div");
        temp.innerHTML = this.showTexts[i].context;
        this.showTexts[i].context = temp.innerText.slice(0, 72);
      }
    },
    aboutText(menuId, categoryId, id) {
      this.$router.push({
        path:
          "/center/content?Id=" +
          menuId +
          "&pId=" +
          categoryId +
          "&textId=" +
          id,
      });
    },
  },
};
</script>

<style scoped>
.mainbody {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.el-pagination {
  margin-left: 50px;
}
.el-card {
  float: left;
  height: 440px;
  width: 400px;
}
.el-card img {
  height: 280px;
  width: 100%;
}
.el-breadcrumb {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 16px;
}
.el-divider span {
  font-size: 1.5em;
  color: darkgreen;
  font-weight: 600;
}
.el-pagination {
  margin-top: 20px;
}
.time {
  color: #999;
  font-size: 13px;
}
.bottom {
  margin-top: 10px;
}
</style>