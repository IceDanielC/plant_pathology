<template>
  <div>
    <el-divider>学会党建</el-divider>
    <div class="mainbody">
      <el-card
        v-for="t in showTexts"
        :key="t.id"
        :body-style="{ padding: '0px' }"
        class="card"
      >
        <img :src="t.img" class="image" />
        <div class="content" style="padding: 14px">
          <span class="about">{{ t.title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ t.context }}......</time><br />
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
      @current-change="getMemberList"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "my-xhdj",
  created() {
    this.getBlogs();
  },
  data() {
    return {
      showTexts: [],
    };
  },
  methods: {
    //获取学会党建的文章
    async getBlogs() {
      const { data } = await axios.get("http://cybwmy.top:8082/menu/blogs/37");
      this.showTexts = data.object.object;
      //除去文章中标签
      for (let i = 0; i < this.showTexts.length; i++) {
        let temp = document.createElement("div");
        temp.innerHTML = this.showTexts[i].context;
        this.showTexts[i].context = temp.innerText.slice(0, 72);
        // console.log(this.showTexts.context);
      }
    },
    aboutText(t) {
      console.log(t);
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
div {
  overflow: hidden;
}
.el-card {
  float: left;
  height: 440px;
}
.el-card img {
  height: 280px;
}
</style>