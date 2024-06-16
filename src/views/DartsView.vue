<template>
  <div class="box">
    <div class="left">
      <el-menu
          :default-active="menuStore.activeSidebarMenu"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleMenuSelect"
      >
        <el-menu-item :index="item.index" v-for="(item,index) in weaponItems" :key="index" @click="$router.push(item.path)">
          <el-image style="width: 48px;height: 48px;" :src="item.url"/>
          {{item.name}}
        </el-menu-item>


      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useMenuStore } from '@/store/menuStore';
export default {
  name: 'WeaponView',
  data() {
    return {

    }
  },
  computed: {
    menuStore() {
      return useMenuStore();
    },
    weaponItems() {
      return this.menuStore.getMenuItemsByType('2');
    }
  },
  methods: {

  },

}
</script>

<style scoped>
.box {
  display: flex;
  border: 1px solid black;

  .left {
    .el-menu{
      width: auto;
      height: 90vh;
    }
  }
}
</style>