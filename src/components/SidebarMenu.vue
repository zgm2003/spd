<template>
  <el-menu
      :default-active="menuStore.activeSidebarMenu"
      class="el-menu-vertical-demo"
      @select="handleMenuSelect"
  >
    <el-menu-item
        v-for="(item, index) in filteredItems"
        :key="index"
        :index="item.index"
        @click="$router.push(item.path)"
    >
      <el-image style="width: 48px; height: 48px;" :src="item.url" />
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useMenuStore } from '@/store/menuStore';

export default {
  name: 'SidebarMenu',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    menuStore() {
      return useMenuStore();
    },
    filteredItems() {
      return this.menuStore.getMenuItemsByType(this.type);
    }
  },
  methods: {
    handleMenuSelect(index) {
      this.menuStore.setActiveSidebarMenu(index);
    }
  },
  mounted() {
    if (this.filteredItems.length > 0) {
      this.menuStore.setActiveSidebarMenu(this.filteredItems[0].index);
    }
  }
};
</script>

<style scoped>
.el-menu {
  width: auto;
  height: 90vh;
}
</style>
