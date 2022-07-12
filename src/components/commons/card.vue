<template>
  <div class="mycard">
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
      <div style="padding: 14px">
        <span class="about" @click="aboutText(t.menuId, t.categoryId, t.id)">{{
          t.title
        }}</span>
        <div class="bottom clearfix">
          <time class="time" @click="aboutText(t.menuId, t.categoryId, t.id)"
            >{{ t.context.slice(0, 70) }}......</time
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
    <el-card class="card">
      <div slot="header" class="clearfix">
        <b style="font-size: 20px">· 通知公告</b>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="totzgg"
          >更多</el-button
        >
      </div>
      <div
        v-for="(o, index) in data"
        :key="o.id"
        class="text item"
        @click="gettext(o.id)"
      >
        <div class="date">
          <b>{{ day[index] }}</b>
          <b>{{ month[index] }}月</b>
        </div>
        <span>{{ o.title }}</span>
      </div>
      <div hidden="hidden" v-html="hometext[0].context" ref="text0"></div>
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
      //每篇文章的月份和日期
      month: [],
      day: [],
      hometext: [
        { title: "", id: 1 },
        { title: "", id: 1 },
      ],
      //首页文章
      showTexts: [],
      text0: "",
      text1: "",
    };
  },
  methods: {
    //获取通知公告文章
    getNoticeTexts() {
      axios("http://cybwmy.top:8082/menu/blogs/9").then((res) => {
        this.data = res.data.object.object;
        for (let i = 0; i < this.data.length; i++) {
          this.month.push(this.data[i].date.slice(5, 7));
          this.day.push(this.data[i].date.slice(8, 10));
        }
      });
    },
    //获取要首页显示的文章
    getBlogsOnshow() {
      axios("http://cybwmy.top:8082/blog/blogShow").then((res) => {
        this.showTexts = res.data.object;
        for (let i = 0; i < this.showTexts.length; i++) {
          var temp0 = document.createElement("div");
          temp0.innerHTML = this.showTexts[i].context;
          this.showTexts[i].context = temp0.innerText.slice(0, 72);
        }
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

<style scoped>
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.date {
  display: inline-block;
  height: 42px;
  width: 46px;
  border-right: 5px solid #118a31;
  color: #118a31;
}
.date b:nth-child(1) {
  display: block;
}
.date b:nth-child(2) {
  font-size: 14px;
}
.mycard {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
@media screen and (min-width: 1580px) {
  .card {
    width: 450px;
    height: 500px;
    margin: 20px 36px;
    padding: 0px;
  }
}
@media screen and (max-width: 1579px) {
  .card {
    width: 450px;
    height: 500px;
    margin: 20px 20px;
    padding: 0px;
  }
}
.time {
  font-size: 14px;
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
  font-size: 17px;
  height: 42px;
}
.item span {
  position: relative;
  left: 20px;
  bottom: 14px;
  font-size: 17px;
  font-weight: normal;
}
.item span:hover {
  font-weight: bold;
  color: #118a31;
}
.item:hover {
  cursor: pointer;
}
.about {
  font-size: 18px;
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
