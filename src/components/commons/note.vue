<template>
<div class="right">
  <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="notice"
          :label="menuname"
          width="900">
            <template slot-scope="scope">
               <a target="_self" class="buttonText" @click="gettext(scope.row.id)">{{scope.row.title}}</a>
             </template>
        </el-table-column>
      </el-table>
    <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :size="3"
      :total="totalcount"
      @current-change="handleCurrentChange"
      :current-page="curpage" >
    </el-pagination>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'


export default {
    name:'my-note',
    data(){
        return {menuname:'',tableData:[],totalcount:1,curpage:1,menuId:0,title:''}
    },
    computed:{
    },
    methods:{
        gettext(id){
                // axios({
                // url:'http://cyb.gz2vip.91tunnel.com/blog/detail/'+id,
                // }).then(res=>{
                //     this.data=res.data.object
                // })
                this.$router.push({path:'/'+this.menuId+'/content'})
                this.$nextTick(()=>{
                bus.$emit('firstid',id)
                })
                  bus.$emit('textid',id)
            },
            handleCurrentChange(val)
            {
            this.curpage=val
            console.log(this.curpage)
            axios('http://cybwmy.top:8082/menu/blogs/'+this.menuId +'?currentPage='+ this.curpage).then(res=>{
                console.log(res)
                this.tableData=res.data.object.object
                })
            }
    },
    mounted(){
        var storage = window.localStorage
        this.menuname=storage.getItem('menu')
        this.menuId=storage.getItem('menuId')
        this.tableData=JSON.parse(storage.getItem('tabledata'))

        bus.$on('menuname',(data)=>{
            this.menuname=data
            storage.setItem('menu',this.menuname)
          }),
          bus.$on('table',(data)=>{
            this.tableData=data
            storage.setItem('tabledata', JSON.stringify(this.tableData))
          }),
          bus.$on('total',(data)=>{
            this.totalcount=data
          })
          bus.$on('menuId',(data)=>{
            this.menuId=data
            console.log("menuid改变为:",this.menuId)
            storage.setItem('menuId',this.menuId)
          })
    }
}
</script>

<style>

</style>