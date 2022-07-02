<template>
  <div class="right text">
    <el-card>
        <!-- <el-card>
            <div class="people">
            <img src="https://ppc.nwsuaf.edu.cn/images/2022-01/a4c721ad715643c298cfeb2259f9fb60.jpg">
            <div class="aboutpeople">
                <h2>戴武</h2>
                <p>副院长，男，汉族，
                    1972年11月生，研究生学历，农学博士，教授，博士生导师。
                    主要从事昆虫多样性及害虫治理研究工作，入选教育部新世纪优秀人才支持计划和陕西省教学名师。
                    2016年12月任植物保护学院副院长。</p>
            </div>
            </div>
        </el-card>
        <hr/>
        <el-card>
            <div class="people">
            <img src="https://ppc.nwsuaf.edu.cn/images/2022-01/d7dfe10a18a246858428517c1e214b00.jpg">
            <div class="aboutpeople">
                <h2>马志卿</h2>
                <p>副院长，男，汉族，1975年4月生，中共党员，教授，博士生导师。
                    主要从事植物保护及生物农药研发与应用方面的教学与科研工作。兼任农药所副所长、
                    陕西省生物农药工程技术研究中心主任，为第九届全国农药登记评审委员会委员，
                    中国有机产品认证技术工作组专家。2019年9月任植物保护学院副院长。</p>
            </div>
            </div>
        </el-card>
        <hr/>
        <el-card>
            <div class="people">
            <img src="https://ppc.nwsuaf.edu.cn/images/2022-01/bc69a27b7a2f4a8781b9bad330c63dc0.jpg">
            <div class="aboutpeople">
                <h2>张艳玲</h2>
                <p>副书记，女，汉族，1980年7月生，山东博兴人，中共党员。
                    2002年7月毕业于四川大学公共管理学院档案学专业，硕士研究生学历，讲师。
                    曾任西北农林科技大学植物保护学院学工秘书、党政综合办公室主任，2019年9月任植物保护学院党委副书记。</p>
            </div>
            </div>
        </el-card> -->
        <el-card 
        v-for="p in peoples" 
        :key="p.id">
            <div class="people">
                <img :src="p.photo">
                <div class="aboutpeople">
                    <h2>{{p.name}}</h2>
                    <p>{{p.introduction}}</p>
                </div>
            </div>
        </el-card>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'my-rwjs',
    data(){
        return {
            peoples:[],
        }
    },
    mounted() {
        axios("http://cybwmy.top:8082/members/info").then(res=>{
            console.log(res)
            this.peoples=res.data.object.records
        })
    },
}
</script>

<style scoped>
.people{
    display: flex;
}
.people img{
    width: 178px;
    height: 245px;
}
h2{
    text-indent: 2em;
}

.ql-editor >>> p {
  line-height: 28px;
}
.ql-editor >>> img {
  max-width: 700px;
}

.text {
  width: 900px;
  margin-left: 120px;
  padding-bottom: 1cm;
}
.title {
  text-align: center;
  font-size: 38px;
  height: auto;
  margin: 20px;
}
.readview {
  text-align: center;
  font-size: 13px;
  color: #666;
}
.el-link {
  margin-left: 15px;
}
</style>