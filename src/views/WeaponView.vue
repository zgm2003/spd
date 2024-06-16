<template>
  <div class="box">
    <div class="left">
      <SidebarMenu type="1" />
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'WeaponView',
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
