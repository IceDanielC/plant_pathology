<template>
  <div class="right text">
    <div class="title">{{title}}</div>
    <div class="context">{{context}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'
export default {
    name:"my-context",
    data(){
      return {
        textid:1,
        data:[],
        title:'',
        context:''
      }
    },
    created(){
      var storage = window.localStorage
      this.textid=storage.getItem('textid')
      this.$nextTick(function(){
          bus.$on('textid',(data)=>{
            this.textid=data
            storage.setItem('textid', this.textid);
            console.log(this.textid)
            axios({url:'http://cyb.gz2vip.91tunnel.com/blog/detail/'+data,}).then(res=>{
                        this.data=res.data.object
                        this.title=res.data.object.title
                        this.context=res.data.object.context
                    })
            console.log("获取成功了")
          })
      })
    },
    mounted(){
      axios({
                url:'http://cyb.gz2vip.91tunnel.com/blog/detail/'+this.textid,
                }).then(res=>{
                    this.data=res.data.object
                    this.title=res.data.object.title
                    this.context=res.data.object.context
                })
                console.log("执行了")
    }
}
</script>

<style scoped>
.text{
  width: 750px;
}
.title{
  width: 100%;
    text-align: center;
    font-size: 40px;
    height: 50px;
    margin-bottom: 20px;
}
</style>