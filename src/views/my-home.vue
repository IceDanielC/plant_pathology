<template>
 <div>
  <my-lunbo />
  <el-divider content-position="center">学会动态</el-divider>
  <div class="szdt">
    <mycard/>
  </div>
  <div class="gxdt">
  </div>
  <div class="tzgg">
  </div>
 </div>
</template>

<script>
import myLunbo from '../components/my-lunbo.vue'
import mycard from '@/components/commons/card.vue'
export default {
  components: { myLunbo , mycard},
    name:'my-home',

}
</script>

<style>

</style>