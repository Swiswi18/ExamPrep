<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
    <AppNav />
    <RouterView />
    
  </div>
</template>

<script setup>
import AppNav from '../src/components/AppNav.vue'
</script>
