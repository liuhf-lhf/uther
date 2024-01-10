<script setup lang="ts">

import {MenuItem} from "/@/components/menu";
import type { PropType } from 'vue';

defineProps({
  backgroundColor: {
    type: String,
    required: false
  },
  textColor: {
    type: String,
    required: false
  },
  items: {
    type: Array as PropType<MenuItem[]>,
    default: [],
    required: true
  }
})


</script>

<template>
  <div class="full">
    <el-menu mode="horizontal" class="full" :background-color="backgroundColor" :text-color="textColor">
      <el-menu-item v-for="(item,index) in items" :key="index" :route="item.route">{{ item.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

</style>