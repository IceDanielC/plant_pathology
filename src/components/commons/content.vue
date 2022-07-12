<template>
  <div class="right text">
    <el-card>
      <div class="title">{{ data.title }}</div>
      <div class="readview">阅读量：{{data.pageview}}</div>
      <div class="ql-editor" v-html="data.context"></div>
      <!-- 附件连接 -->
      <el-link v-show="data.appendix" type="primary" :href="data.appendix">点击下载附件</el-link>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "my-context",
  data() {
    return {
      textid: 1,
      data: [],
    };
  },
  methods: {
    getTextDetail() {
      //从路径中获取到参数并查询文章信息
      axios(
        "http://cybwmy.top:8082/blog/detail/" + this.$route.query.textId
      ).then((res) => {
        this.data = res.data.object;
      });
    },
  },
  mounted() {
    this.getTextDetail();
  },
};
</script>

<style scoped>
.ql-editor :deep() p {
  line-height: 28px;
}
.ql-editor :deep() img {
  max-width: 900px;
  margin:0 auto;
}
.ql-editor :deep() video{
  max-width: 900px;
  margin:0 auto;
}
.text {
  width: 1050px;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 1cm;
}
.title {
  text-align: center;
  font-size: 38px;
  height: auto;
  margin: 20px;
}
.readview {
  text-align: center;
  font-size: 13px;
  color: #666;
}
.el-link {
  margin-left: 15px;
}
</style>
