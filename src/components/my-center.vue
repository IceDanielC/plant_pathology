<template>
  <div :span="12" width="380px" class="left">
    <div id="d1">
      <h4>{{ name }}</h4>
      <el-menu
        :default-active="$route.path+'?Id=' + $route.query.Id + '&pId=' + $route.query.pId"
        mode="horizontal"
        class="el-menu-vertical-demo"
        :router="true"
      >
        <el-menu-item
          v-for="(p, i) in data2"
          :key="i"
          :index="'/center/note?Id=' + p.id + '&pId=' + p.parentCid"
        >
      <!-- 这里也因为直接修改了路径，配合刷新页面就没必要触发方法了 -->
          <i class="el-icon-location"></i>
          <span slot="title">{{ p.menuName }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "@/bus";

export default {
  name: "my-center",
  data() {
    return {
      Id: 1,
      pId: 1,
      data2: [],
      note: [],
      fileid: 1,
      curid: 1,
      tableData: [],
      name: "",
      menuname: "",
      totalcount: 1,
      curpage: 1,
      menuId: 0,
    };
  },
  components: {},
  watch: {
    $route: function () {
      //浏览器默认改变路径后面带的参数不改变路径不会刷新整个页面，所以这里可以监听到参数变化，此时可以选择触发一些方法，也可以选择强制刷新整个页面，
      //这里选择强制刷新页面是因为el-menu 的default-active只有在渲染的时候才会变
      this.$router.go(0)
    },
    
  },
  methods: {
    getid(val) {
      axios.get("http://cybwmy.top:8082/menu/blogs/" + val+'?currentPage='+1).then((res) => {
        this.tableData = res.data.object.object;
        this.totalcount = res.data.object.totalCount;
        //这里组件间通信还是挺合适的，但我觉得这里将查询方法放到note中，这里只做通信将子栏目id传给note，让note去查更合理，限于时间原因就暂时不需要修改了
        this.$nextTick(function () {
          bus.$emit("table", this.tableData);
          bus.$emit("total", this.totalcount);
          console.log("ewrwqre"+this.totalcount);
        });
      });
      this.menuId = val;
      this.$nextTick(function () {
        bus.$emit("menuId", this.menuId);
      });
    },

    handleCurrentChange(val) {
      this.curpage = val;
      console.log(this.curpage);
      axios(
        "http://cybwmy.top:8082.com/menu/blogs/" +
          this.menuId +
          "?currentPage=" +
          this.curpage
      ).then((res) => {
        console.log(res);
        this.tableData = res.data.object.object;
      });
    },
    getChileMenu(id) {
      axios("http://localhost:8080/menu/cMenu/" + id).then((res) => {
        this.name = res.data.object.menuName;
        this.data2 = res.data.object.children;
      });
    },
    getMenu() {
      let f = 0;
      if (localStorage.getItem("menuList") != null) {
        let data = JSON.parse(localStorage.getItem("menuList"));
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == this.$route.query.pId) {
            f = 1;
            this.name = data[i].menuName;
            this.data2 = data[i].children;
          }
        }
      }
      if (f == 0) {
        this.getChileMenu(this.$route.query.pId);
      }
    },
  },
  mounted() {
    //页面开始获取左边子菜单栏，localstorge中如果没有就会向后端请求
    this.getMenu();
    //获取某个子栏目的文章标题列表，从路径中获取子栏目id再发送请求
    this.getid(this.$route.query.Id);
  },
};
</script>

<style scoped>
#d1 {
  width: 200px;
  margin-right: 0px;
  height: 650px;
}
.left {
  height: auto;
}
</style>
