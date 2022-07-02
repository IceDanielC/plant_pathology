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
  name: "my-about",
  data() {
    return {
      textid: 1,
      data: [],
    };
  },
  methods: {
    getTextDetail() {
     axios("http://cybwmy.top:8082/menu/blogs/"+this.$route.query.Id).then(res=>{
        this.textid=res.data.object.object[0].id
        console.log(this.textid)
        axios(
        "http://cybwmy.top:8082/blog/detail/" + this.textid
      ).then((res) => {
        this.data = res.data.object;
        console.log(res.data.object);
      });
     })

    },
  },
  mounted() {
    this.getTextDetail();
  },
};
</script>

<style scoped>
.ql-editor >>> p {
  line-height: 28px;
}
.ql-editor >>> img {
  max-width: 700px;
}

.text {
  width: 900px;
  margin-left: 120px;
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
