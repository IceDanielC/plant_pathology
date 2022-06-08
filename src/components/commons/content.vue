<template>
  <div class="right text">
    <div class="title">{{ data.title }}</div>
    <div class="ql-editor" v-html="data.context"></div>
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
      axios("http://cybwmy.top:8082/blog/detail/" + this.$route.query.textId).then((res) => {
        this.data = res.data.object;
        console.log(res.data.object.context);
      });
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
  width: 500px;
  height: 300px;
}

.text {
  width: 900px;
  padding-bottom: 1cm;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 38px;
  height: auto;
  margin: 20px;
}
</style>
