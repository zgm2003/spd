<template>
  <div class="box">
    <div class="left">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item :index="item.index" v-for="(item,index) in MenuItem" :key="index" @click="$router.push(item.path)">

          <span>{{item.name}}</span>
        </el-menu-item>


      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeaponView',
  data() {
    return {
      MenuItem: [
        {index:'1',name:'破损的短剑',path:'/weapon/WornShortsword'},
        {index:'2',name:'镶钉手套',path:'/weapon/StuddedGloves'}
      ]
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  border: 1px solid black;

  .left {
   .el-menu{
     width: 200px;
     height: 90vh;
   }
  }
}
</style>