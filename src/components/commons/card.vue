<template>
<div class="mycard">
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img :src="url0" class="image">
      <div style="padding: 14px;">
        <span class="about" @click="abouttext0">{{hometext[0].title}}</span>
        <div class="bottom clearfix">
          <time class="time" @click="abouttext0">{{text0}}......</time><br/>
          <el-button type="text" class="button" @click="abouttext0">详情</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img :src="url1" class="image">
      <div style="padding: 14px;">
        <span class="about" @click="abouttext1">{{hometext[1].title}}</span>
        <div class="bottom clearfix">
          <time class="time" @click="abouttext1">{{text1}}......</time><br/>
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
      url1:'',
      categoryid0:2,
      categoryid1:2,
    };
  },
  methods:{
    totzgg(){
      this.$router.push({path:'/center/note?Id=9&pId=2'})
    },
    gettext(id){
      this.$router.push({path:'/center/content?Id=9&pId=2&textId='+id})
    },
    abouttext0(){
      this.$router.push({path:'/center/content?Id='+this.menuid0+'&pId='+this.categoryid0+'&textId='+this.hometext[0].id})
    },
    abouttext1(){
      this.$router.push({path:'/center/content?Id='+this.menuid1+'&pId='+this.categoryid1+'&textId='+this.hometext[1].id})
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
        this.url0=res.data.object[0].img
        this.url1=res.data.object[1].img
        var temp0 = document.createElement("div");
        var temp1 = document.createElement("div");
        temp0.innerHTML = res.data.object[0].context;
        temp1.innerHTML = res.data.object[1].context;
        this.text0=temp0.innerText.slice(1,72)
        this.text1=temp1.innerText.slice(1,72)
        this.menuid0=res.data.object[0].menuId;
        this.menuid1=res.data.object[1].menuId;
        this.categoryid0=res.data.object[0].categoryId;
        this.categoryid1=res.data.object[1].categoryId;
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
  .time:hover{
  cursor:pointer;
  color:rgb(39, 39, 212)
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
  .item:hover{
  cursor:pointer;
  color:rgb(39, 39, 212)
  }
  .about:hover{
  cursor:pointer;
  color:rgb(39, 39, 212)
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
