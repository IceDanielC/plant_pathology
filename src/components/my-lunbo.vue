<template>
  <div id="banner">
    <!--动态将图片轮播图的容器高度设置成与图片一致-->
    <el-carousel :height="bannerHeight + 'px'">
      <!--遍历图片地址,动态生成轮播图-->
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.image" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: "my-lunbo",
  data() {
    return {
      // 图片地址数组
    imgList: [],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0
    };
  },
  methods: {
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (800 / 1920) * this.screenWidth;
    }
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
    axios("http://cybwmy.top:8082/banner/all").then(res=>{
            console.log(res)
            this.imgList=res.data.object
        })
  }
};
</script>
 
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
#banner {
  margin-bottom: 45px;
}
</style>