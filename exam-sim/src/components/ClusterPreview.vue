<template>
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-4 text-center dark:text-white">Topic Clusters</h2>
      
      <!-- Topic Clusters Grid -->
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
  
      <!-- Export Button -->
      <div class="mt-6 text-center">
        <button
          @click="exportToList"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Export as List
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // No need to import defineProps as it's available globally
  const props = defineProps<{
    clusters: Record<string, string[]>
  }>()
  
  /**
   * Function to format and export the clusters as a plain list
   */
  const exportToList = () => {
    const formattedList = Object.entries(props.clusters)
      .map(([domain, topics]) => {
        return `${domain}:\n${topics.join('\n')}`
      })
      .join('\n\n')
  
    // Copy to clipboard
    navigator.clipboard.writeText(formattedList)
      .then(() => {
        alert('Topic list copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
  }
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #2563eb;
  }
  </style>
  