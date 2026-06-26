<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
</script>

<template>
  <ElConfigProvider>
    <slot></slot>
  </ElConfigProvider>
</template>
