<script setup lang="ts">

import {Menu, MenuItem} from "/@/components/menu";

const menus: MenuItem[] = [
  {
    title: '电影',
    index: '',
    route: ''
  },
  {
    title: '剧集',
    index: '',
    route: ''
  },
  {
    title: '人物',
    index: '',
    route: ''
  },
  {
    title: '更多',
    index: '',
    route: ''
  }
]

</script>

<template>
  <div class="full">
    <el-header class="w-full">
      <el-row justify="space-between" align="middle" class="h-full">
        <el-col :span="12">
          <el-row justify="space-between" align="middle">
            <el-col :span="12">
              LOGO
            </el-col>
            <el-col :span="12">
              <div>
                <Menu :background-color="'rgb(3, 37, 65)'" :text-color="'rgb(255, 255, 255)'" :items="menus"></Menu>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">SEARCH</el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
      <el-footer>
        footer
      </el-footer>
    </el-main>
  </div>
</template>

<style scoped>
.el-header {
  background-color: rgb(3, 37, 65);
  position: fixed;
  height: 5rem;
}

.el-main {
  position: relative;
  top: 5rem;
}

.el-menu {
  background-color: rgb(3, 37, 65);
}
</style>