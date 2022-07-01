<template>
  <div class="mycard">
    <el-card
      v-for="t in showTexts"
      :key="t.id"
      :body-style="{ padding: '0px' }"
      class="card"
    >
      <img :src="t.img" class="image" />
      <div style="padding: 14px">
        <span class="about">{{ t.title }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ t.context.slice(3, 70) }}......</time><br />
          <el-button type="text" class="button"  @click="aboutText(t.menuId, t.categoryId, t.id)">详情</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>通知公告</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="totzgg"
          >更多</el-button
        >
      </div>
      <div
        v-for="o in data"
        :key="o.id"
        class="text item"
        @click="gettext(o.id)"
      >
        {{ o.title }}
      </div>
      <div hidden="hidden" v-html="hometext[1].context" ref="text1"></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "my-card",
  data() {
    return {
      currentDate: new Date(),
      data: [],
      hometext: [
        { title: "", id: 1 },
        { title: "", id: 1 },
      ],
      //首页文章
      showTexts: [],
    };
  },
  methods: {
    //获取通知公告文章
    getNoticeTexts() {
      axios("http://cybwmy.top:8082/menu/blogs/9").then((res) => {
        this.data = res.data.object.object;
      });
    },
    //获取要首页显示的文章
    getBlogsOnshow() {
      axios("http://cybwmy.top:8082/blog/blogShow").then((res) => {
        console.log(res.data);
        this.showTexts = res.data.object;
      });
    },
    //跳转到通知公告
    totzgg() {
      this.$router.push({ path: "/center/note?Id=9&pId=2" });
    },
    //跳转到通知公告的某篇文章
    gettext(id) {
      this.$router.push({ path: "/center/content?Id=9&pId=2&textId=" + id });
    },
    //文章详情
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
  mounted() {
    this.getNoticeTexts();
    this.getBlogsOnshow();
  },
};
</script>

<style>
.mycard {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
.card {
  width: 400px;
  height: 500px;
  margin: 20px;
  padding: 0px;
}
.time {
  font-size: 13px;
  color: #999;
  line-height: 20px;
}
.time:hover {
  cursor: pointer;
  color: rgb(39, 39, 212);
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 350px;
  display: block;
}
.image:hover {
  cursor: pointer;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.item:hover {
  cursor: pointer;
  color: rgb(39, 39, 212);
}
.about:hover {
  cursor: pointer;
  color: rgb(39, 39, 212);
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
