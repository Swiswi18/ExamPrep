<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Search SC-900 Topics</h1>
  
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Use Perplexity to find trusted study material from sources like Microsoft Learn.
        Enter a topic below to begin your search.
      </p>
  
      <div class="flex flex-col md:flex-row gap-3">
        <input
          v-model="query"
          type="text"
          placeholder="e.g. Azure AD roles, Zero Trust, Compliance"
          class="w-full px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
        />
        <button
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          @click="openSearch"
        >
          Search Perplexity
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const query = ref('')
  
  const openSearch = () => {
    if (!query.value.trim()) return
  
    const encoded = encodeURIComponent(`SC-900 ${query.value}`)
    window.open(`https://www.perplexity.ai/search?q=${encoded}`, '_blank')
  }
  </script>
  