<template>
  <div :span="12" width="380px" class="left">
    <div id="d1">
      <h4>{{ name }}</h4>
      <el-menu
        :default-active="getPath"
        mode="horizontal"
        class="el-menu-vertical-demo"
        :router="true"
      >
      <el-menu-item index="/content/rwjs?Id=13&pId=1">
            <i class="el-icon-location"></i>
          <span slot="title">人物介绍</span>
          </el-menu-item>
        <el-menu-item
          v-for="(p, i) in data2"
          :key="i"
          :index="'/content/about?Id=' + p.id + '&pId=' + p.parentCid"
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


export default {
  name: "my-xhgkcenter",
  data() {
    return {
      path: "",
      Id: 1,
      pId: 1,
      data2: [],
      note: [],
      fileid: 1,
      curid: 1,
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
    getChileMenu(id) {
      axios("http://cybwmy.top:8082/menu/cMenu/" + id).then((res) => {
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
            this.data2=this.data2.slice(1)
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
  },
  computed: {
    getPath() {
     if(this.$route.path.includes("rwjs")){
        return  "/content/rwjs"+'?Id=' + this.$route.query.Id + '&pId=' + this.$route.query.pId;
     }
    else if (this.$route.path.includes("content")) {
        return  "/content/about"+'?Id=' + this.$route.query.Id + '&pId=' + this.$route.query.pId;
      }
      return this.$route.path+'?Id=' + this.$route.query.Id + '&pId=' + this.$route.query.pId;
    }
  }
};
</script>

<style scoped>
#d1 {
  margin-right: 0px;
  height: 650px;
  text-align: center;
}
.left {
  height: auto;
  width: 100%;
}
.el-menu,.el-menu-item{
  width:200px
}
</style>
