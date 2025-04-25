<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Search with AI (Perplexity / DeepSeek)</h1>
  
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        Enter a topic to search SC-900 study materials using Perplexity or DeepSeek.
      </p>
  
      <div class="flex gap-2">
        <input
          v-model="query"
          type="text"
          placeholder="e.g. Azure AD roles"
          class="flex-1 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          @click="openSearch"
        >
          Search
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const query = ref('')
  
  const openSearch = () => {
    if (!query.value) return
  
    const encoded = encodeURIComponent(query.value)
    window.open(`https://www.perplexity.ai/search?q=${encoded}`, '_blank')
  }
  </script>
  