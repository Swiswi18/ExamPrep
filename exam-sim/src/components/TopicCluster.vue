<template>
    <div class="space-y-4">
      <div v-for="(topics, domain) in clusters" :key="domain" class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ domain }}</h2>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li v-for="topic in topics" :key="topic">{{ topic }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    clusters: Record<string, string[]>
  }>()
  </script>
  