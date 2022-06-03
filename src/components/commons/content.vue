<template>
  <div class="right text">
    <div class="title">{{ title }}</div>
    <div class="context" v-html="context"></div>
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
      title: "",
      context: "",
    };
  },
  methods: {
    getTextDetail() {
      //从路径中获取到参数并查询文章信息
      axios({
        url: "http://cybwmy.top:8082/blog/detail/" + this.$route.query.textId,
      }).then((res) => {
        this.data = res.data.object;
        this.title = res.data.object.title;
        this.context = res.data.object.context;
        console.log("执行了");
      });
    },
  },
  mounted() {
    this.getTextDetail();
  },
};
</script>

<style scoped>
.context >>> p {
  line-height: 28px;
}
.context >>> img {
  width: 500px;
  height: 300px;
}
.text {
  width: 800px;
  padding-bottom: 1cm;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 40px;
  height: 50px;
  margin-bottom: 20px;
}
</style>
