<template>
  <div class="right text">
    <div class="title">{{title}}</div>
    <div class="context" v-html="context"></div>
  </div>
</template>

<script>
import axios from 'axios'
import {bus} from '@/bus'
var storage = window.localStorage
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
      this.textid=storage.getItem('textid')
      bus.$on('firstid',(data)=>{
            this.textid=data
            storage.setItem('textid', this.textid);
            console.log(this.textid)
            axios({url:'http://cybwmy.top:8082/blog/detail/'+data}).then(res=>{
                        this.data=res.data.object
                        this.title=res.data.object.title
                        this.context=res.data.object.context
                    })
            console.log("第一次获取成功了")
          })
      this.$nextTick(()=>{
          bus.$on('textid',(data)=>{
            this.textid=data
            storage.setItem('textid', this.textid);
            console.log(this.textid)
            axios({url:'http://cybwmy.top:8082/blog/detail/'+data,}).then(res=>{
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
                url:'http://cybwmy.top:8082/blog/detail/'+this.textid,
                }).then(res=>{
                    this.data=res.data.object
                    this.title=res.data.object.title
                    this.context=res.data.object.context
                    console.log("执行了")
                })
    }
}
</script>

<style scoped>
.context >>> p{
  line-height: 28px;
}
.context >>> img{
    width: 500px;
    height: 300px;
}
.text{
  width: 800px;
  padding-bottom:1cm; 
}
.title{
  width: 100%;
    text-align: center;
    font-size: 40px;
    height: 50px;
    margin-bottom: 20px;
}

</style>