<template>
  <div class="box">
    <div class="header">
      <el-menu
          :default-active="menuStore.activeTopMenu"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item :index="item.index" v-for="(item, index) in MenuItem" :key="index" @click="navigateTo(item)">{{item.name}}</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="100">
          <template #title>
            <el-input
                v-model="searchQuery"
                style="width: 240px"
                size="large"
                placeholder="请输入搜索内容"
                suffix-icon="el-icon-search"
                @input="filterItems"
            />
            <el-button type="primary" size="large" style="margin-left: 10px" @click="onSearch">搜索</el-button>
          </template>
          <el-menu-item v-for="item in filteredItems" :key="item.index" @click="navigateTo(item)">
            <el-image style="width: 48px;height: 48px;" :src="item.url"/>
            {{ item.name }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { useMenuStore } from '@/store/menuStore';

export default {
  name: 'HomeView',
  data() {
    return {
      searchQuery: '',
      MenuItem: [
        { name: '武器', path: '/weapon', index: '1' },
        { name: '飞镖', path: '/darts', index: '2' },
        { name: '护甲', path: '/armor', index: '3' },
        { name: '法杖', path: '/staff', index: '4' }
      ],
      filteredItems: []
    };
  },
  computed: {
    menuStore() {
      return useMenuStore();
    },
    menuItems() {
      return this.menuStore.menuItems;
    }
  },
  methods: {
    filterItems() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) {
        this.filteredItems = [];
        return;
      }
      this.filteredItems = this.menuItems.filter(item =>
          item.name.toLowerCase().includes(query)
      );
    },
    onSearch() {
      if (this.filteredItems.length > 0) {
        const firstItem = this.filteredItems[0];
        this.navigateTo(firstItem);
      }
    },
    navigateTo(item) {
      this.$router.push(item.path).then(() => {
        this.menuStore.setActiveTopMenu(item.type);
        this.menuStore.setActiveSidebarMenu(item.index);
      });
    },
    handleSelect(index) {
      const selectedItem = this.MenuItem.find(item => item.index === index);
      if (selectedItem) {
        this.menuStore.setActiveTopMenu(selectedItem.index);
        this.menuStore.setActiveSidebarMenu('1');
      }
    }
  }
};
</script>

<style scoped lang="less">
.flex-grow {
  flex-grow: 0.9;
}
</style>
