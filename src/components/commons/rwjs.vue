<template>
  <div class="right text">
    <el-card v-for="p in peoples" :key="p.id">
      <div class="people">
        <img :src="p.photo" />
        <div class="aboutpeople">
          <h2>{{ p.name }}</h2>
          <p class="post">{{p.post}}</p>
          <p>{{ p.introduction }}</p>
        </div>
      </div>
    </el-card>
    <!-- 分页组件 -->
    <el-pagination
      background
      layout="total,prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "my-rwjs",
  data() {
    return {
      peoples: [],
      currentPage: 1,
      total: 0,
      pageSize: 1,
    };
  },
  methods: {
    //分页获取成员
    getMemberList(currentPage) {
      axios(`http://cybwmy.top:8082/members/info`,{
        params: {
          currentPage
        }
      }).then((res) => {
        this.peoples = res.data.object.records;
        this.total = res.data.object.total
        this.pageSize = res.data.object.size
        this.currentPage = res.data.object.current
      });
    },
    //页码变化时
    handleCurrentChange(currentPage) {
      this.getMemberList(currentPage)
    },
  },
  mounted() {
    this.getMemberList()
  },
};
</script>

<style scoped>
.el-card {
  margin-bottom: 10px;
}
.people {
  display: flex;
}
.people img {
  width: 178px;
  height: 215px;
}
h2 {
  text-indent: 2em;
  margin-bottom: 0px;
}
.post {
  font-weight: 600;
  font-size: 14px;
  margin: 6px 0 7px 70px;
}
.ql-editor :deep() p {
  line-height: 28px;
}
.ql-editor :deep() img {
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
.el-pagination {
  margin-top: 20px;
}
</style>