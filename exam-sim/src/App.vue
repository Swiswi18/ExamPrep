<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <AppNav />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
</script>

