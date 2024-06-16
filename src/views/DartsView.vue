<template>
  <div class="box">
    <div class="left">
      <SidebarMenu type="2" />
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'DartsView',
  components: {
    SidebarMenu
  }
}
</script>

<style scoped>
.box {
  display: flex;
  border: 1px solid black;
}

.left .el-menu {
  width: auto;
  height: 90vh;
}
</style>
