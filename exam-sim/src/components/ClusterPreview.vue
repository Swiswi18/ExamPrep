<template>
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4 text-center dark:text-white">Topic Clusters</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="(topics, domain) in clusters"
          :key="domain"
          class="bg-white dark:bg-gray-800 rounded-xl shadow p-4"
        >
          <h3 class="text-lg font-bold mb-2 capitalize text-blue-600 dark:text-blue-300">{{ domain }}</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li v-for="(topic, idx) in topics" :key="idx">{{ topic }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue'
  
  const props = defineProps<{
    clusters: Record<string, string[]>
  }>()
  </script>
  