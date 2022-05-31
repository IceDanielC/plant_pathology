<template>
<div class="mycard">
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img src="https://ppc.nwsuaf.edu.cn/images/2022-05/abcc655420014a9190b40aabcddc8e8f.png" class="image">
      <div style="padding: 14px;">
        <span>the title</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">详情</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img src="https://ppc.nwsuaf.edu.cn/images/2022-05/2572765f36914a3d93a622519a57d903.jpg" class="image">
      <div style="padding: 14px;">
        <span>the title</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">详情</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="card">
  <div slot="header" class="clearfix">
    <span>通知公告</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="totzgg">更多</el-button>
  </div>
  <div v-for="o in data" :key="o.id" class="text item" @click="gettext(o.id)">
    {{o.title}}
  </div>
</el-card>
</div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'
export default {
    name:'my-card',
    data() {
    return {
      currentDate: new Date(),
      data:[]
    };
  },
  methods:{
    totzgg(){
      this.$router.push({path:'/9/note'})
    },
    gettext(id){
      this.$router.push({path:'/9/content'})
        bus.$emit('textid',id)
    }
  },
    mounted() {
      axios('http://cyb.gz2vip.91tunnel.com/menu/blogs/9').then(res=>{
        this.data=res.data.object.object
      })
    },
}
</script>

<style>
.mycard{
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}
.card{
    width: 400px;
    height: 500px;
    margin: 20px;
    padding: 0px;
}
  .time {
    font-size: 13px;
    color: #999;
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
