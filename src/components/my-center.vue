<template>
  <div :span="12" width="380px" class="left">
    <div id="d1">
     <h4>{{name}}</h4>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      class="el-menu-vertical-demo"
      :router='true'>
          <el-menu-item v-for="(p,i) in data2" 
          :key="i" :index="'/'+p.id+'/note'" @click="getid(p.id,p.menuName)"  >
            <i class="el-icon-location"></i>
            <span slot="title">{{p.menuName}}</span>
            </el-menu-item>
    </el-menu>
    </div>
    <router-view />
   </div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'


export default {
    name:'my-center',
    data(){
          return {data2:[],note:[],fileid:1,curid:1,
              tableData:[],
              name:'',
              menuname:'',
              totalcount:1,
              curpage:1,
              menuId:0}
        },
        components:{},
        methods:{
            getid(val,nam){
              axios.get('http://cybwmy.top:8082/menu/blogs/'+val).then(res=>{
              console.log(res)
              this.tableData=res.data.object.object
              this.totalcount=res.data.object.totalCount
              this.$nextTick(function () {
                bus.$emit('table', this.tableData);
                bus.$emit('total',this.totalcount);
            })
              })
              this.menuname=nam;
              this.menuId=val;
              this.$nextTick(function () {
                bus.$emit('menuname', this.menuname);
                bus.$emit('menuId',this.menuId);
            })
            },
            // gettext(id){
            //     axios({
            //     url:'http://cyb.gz2vip.91tunnel.com/blog/get/'+id,
            //     }).then(res=>{
            //         console.log(res)
            //     })
            // },
            handleCurrentChange(val)
            {
            this.curpage=val
            console.log(this.curpage)
            axios('http://cybwmy.top:8082.com/menu/blogs/'+this.menuId +'?currentPage='+ this.curpage).then(res=>{
                console.log(res)
                this.tableData=res.data.object.object
                })
            }
            },
        mounted() {
            var storage = window.localStorage
            this.data2=JSON.parse(storage.getItem('mydata'))
            this.name=storage.getItem('name')
          bus.$on('data2',(data)=>{
            this.data2=data,
            storage.setItem('mydata', JSON.stringify(this.data2));
          })
          bus.$on('name',(data)=>{
            this.name=data
            storage.setItem('name',this.name)
          })
          bus.$on('ID',(data)=>{
            console.log('收到了',data)
            this.getid(data)
          })
          bus.$on('menu',(data)=>{
            this.menuname=data
            storage.setItem('menu',this.menuname)
          })
        }

}
</script>

<style scoped>
#d1{
    width:200px;
    margin-right: 0px;
    height: 650px;
}
.left{
  height: auto;
}
</style>