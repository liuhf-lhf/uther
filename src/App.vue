<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
// import tn from 'element-plus/lib/locale/lang/en'
import Layout from '/@/components/layout/index.vue'

</script>

<template>
  <el-config-provider :locale="zhCn">
    <Layout></Layout>
  </el-config-provider>
</template>

<style scoped>

</style>
