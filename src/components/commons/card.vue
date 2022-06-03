<template>
<div class="mycard">
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img src="https://ppc.nwsuaf.edu.cn/images/2022-05/abcc655420014a9190b40aabcddc8e8f.png" class="image">
      <div style="padding: 14px;">
        <span>{{hometext[0].title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{text0}}......</time><br/>
          <el-button type="text" class="button" @click="abouttext0">详情</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img :src="url1" class="image">
      <div style="padding: 14px;">
        <span>{{hometext[1].title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{text1}}......</time><br/>
          <el-button type="text" class="button" @click="abouttext1">详情</el-button>
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
  <div hidden="hidden" v-html="hometext[1].context" ref="text1"></div>
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
      data:[],
      hometext:[{title:'',id:1,},{title:'',id:1,}],
      text0:'',
      text1:'',
      menuid0:9,
      menuid1:9,
      url0:'',
      url1:''
    };
  },
  methods:{
    totzgg(){
      this.$router.push({path:'/9/note'})
    },
    gettext(id){
      this.$router.push({path:'/9/content'})
      this.$nextTick(()=>{
        bus.$emit('firstid',id)
      })
        bus.$emit('textid',id)
    },
    abouttext0(){
      this.$router.push({path:'/'+this.menuid0+'/content'})
      this.$nextTick(()=>{
        bus.$emit('firstid',this.hometext[0].id)
      })
        bus.$emit('textid',this.hometext[0].id)
    },
    abouttext1(){
      this.$router.push({path:'/'+this.menuid1+'/content'})
      this.$nextTick(()=>{
        bus.$emit('firstid',this.hometext[1].id)
      })
        bus.$emit('textid',this.hometext[1].id)
    }
  },
    mounted() {
      axios('http://cybwmy.top:8082/menu/blogs/9').then(res=>{
        console.log(res)
        this.data=res.data.object.object
      })
      axios('http://cybwmy.top:8082/blog/blogShow').then(res=>{
        console.log(res.data.object)
        this.hometext=res.data.object
        this.url1=res.data.object[1].img
        var temp0 = document.createElement("div");
        var temp1 = document.createElement("div");
        temp0.innerHTML = res.data.object[0].context;
        temp1.innerHTML = res.data.object[1].context;
        this.text0=temp0.innerText.slice(1,72)
        this.text1=temp1.innerText.slice(1,72)
        this.menuid0=res.data.object[0].menuId;
        this.menuid1=res.data.object[1].menuId;
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
    line-height: 20px;
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
