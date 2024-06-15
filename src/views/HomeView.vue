<template>
<div class="box">
  <div class="header">
    <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item :index="item.index" v-for="(item,index) in MenuItem" :key="index" @click="$router.push(item.path)">{{item.name}}</el-menu-item>

      <div class="flex-grow" />
      <el-menu-item index="100" >
        <el-input
            v-model="input1"
            style="width: 240px"
            size="large"
            placeholder="Please Input"
            suffix-icon="Search"
        />
        <el-button type="primary" size="large" style="margin-left: 10px">搜索</el-button>
      </el-menu-item>

    </el-menu>
  </div>
  <div class="main">
    <router-view />
  </div>
  <div class="footer"></div>
</div>
</template>

<script>
export default {
  name:'HomeView',
  data(){
    return{
      MenuItem:[
          {
              name:'武器',
              path:'/weapon',
              index:'1'
          },
          {
              name:'飞镖',
              path:'/darts',
              index:'2'
          },
          {
              name:'护甲',
              path:'/armor',
              index:'3'
          },
          {
              name:'法杖',
              path:'/staff',
              index:'4'
          },
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">
.flex-grow {
  flex-grow: 0.9;
}
</style>