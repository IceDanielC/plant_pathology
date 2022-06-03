<template>
    <div>
        <div class="header">
        <h1>陕西省植物病理学会</h1>
        <p>Shaanxi Provincial Society for Plant Pathology</p>
        </div>
        <div class="menu">
        <el-menu 
        :default-active="$route.path"
         class="el-menu-demo" 
         mode="horizontal"
         @select="handleSelect" 
         text-color="#fff"
         background-color="rgb(86, 117, 86)"
         :router='true'>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="/xhgk">
        <template slot="title">学会概况</template>
          <el-menu-item v-for="(p,i) in data1" :key="i" :index="'/'+p.id+'/content'" @click="getid2(p.id,data2,'学会动态',p.menuName)">{{p.menuName}}</el-menu-item>
        </el-submenu>
        <el-submenu index="/xhdt">
        <template slot="title">学会动态</template>
          <el-menu-item v-for="(p,i) in data2" :key="i" :index="'/'+p.id+'/note'" @click="getid2(p.id,data2,'学会动态',p.menuName)">{{p.menuName}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="/xsjl">学术交流</el-menu-item>
        <el-submenu index="/kjfw">
        <template slot="title">科技服务</template>
          <el-menu-item v-for="(p,i) in data3" :key="i" :index="'/'+p.id+'/note'" @click="getid2(p.id,data3,'科技服务',p.menuName)">{{p.menuName}}</el-menu-item>
        </el-submenu>
        <el-submenu index="/kxpj">
        <template slot="title">科学普及</template>
          <el-menu-item v-for="(p,i) in data4" :key="i" :index="'/'+p.id+'/note'" @click="getid2(p.id,data4,'科学普及',p.menuName)">{{p.menuName}}</el-menu-item>
        </el-submenu>
        <el-submenu index="/bhfk">
        <template slot="title">病害防控</template>
          <el-menu-item v-for="(p,i) in data5" :key="i" :index="'/'+p.id+'/note'" @click="getid2(p.id,data5,'病害防控',p.menuName)">{{p.menuName}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="/xhdj">学会党建</el-menu-item>
        <el-menu-item index="/lxwm">联系我们</el-menu-item>
  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
</el-menu>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'

export default {
    name:'my-head',
    data() {
      return {
        activeIndex: '/home',
        activeIndex2: '/home',
        data1:[],
        data2:[],
        data3:[],
        data4:[],
        data5:[],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getid2(val,data,name,menu){
         this.$nextTick(function () {
        bus.$emit('ID', val);
        bus.$emit('data2',data);
        bus.$emit('name',name);
        bus.$emit('menu',menu);
      })
      }
    },
    created(){
      axios({
        url:'http://cybwmy.top:8082/menu/children/1',
      }).then(res=>{
        this.data1=res.data.object
      })
      axios({
        url:'http://cybwmy.top:8082/menu/children/2',
      }).then(res=>{
        this.data2=res.data.object
      })
      axios({
        url:'http://cybwmy.top:8082/menu/children/4',
      }).then(res=>{
        this.data3=res.data.object
      })
      axios({
        url:'http://cybwmy.top:8082/menu/children/5',
      }).then(res=>{
        this.data4=res.data.object
      })
      axios({
        url:'http://cybwmy.top:8082/menu/children/6',
      }).then(res=>{
        this.data5=res.data.object
      })
    }

}

</script>

<style>
h1 {
	color: darkolivegreen;
	margin: 0px 50px;
}
.header {
	padding:20px;
}
p {
	margin: 0px 50px;
}
.menu{
    padding: 0px,0px,0px,30px;
}
</style>