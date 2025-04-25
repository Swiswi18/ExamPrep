<template>
    <div class="space-y-4">
      <div>
        <label for="query" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Search Perplexity AI
        </label>
        <input
          id="query"
          type="text"
          v-model="query"
          @keyup.enter="search"
          class="mt-1 w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-indigo-400"
          placeholder="Enter exam topic or concept..."
        />
      </div>
  
      <div class="flex flex-wrap gap-2">
        <button
          @click="search"
          class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Search
        </button>
  
        <button
          @click="prefill('Microsoft SC-900 Identity concepts')"
          class="bg-gray-300 dark:bg-gray-700 dark:text-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Prefill SC-900 Identity
        </button>
  
        <button
          @click="prefill('SC-900 Compliance & Governance in Azure')"
          class="bg-gray-300 dark:bg-gray-700 dark:text-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Prefill Compliance Topic
        </button>
      </div>
  
      <div v-if="perplexityUrl" class="mt-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Open Perplexity:</p>
        <a
          :href="perplexityUrl"
          target="_blank"
          class="text-indigo-600 dark:text-indigo-400 underline break-all"
        >
          {{ perplexityUrl }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const query = ref('')
  const perplexityUrl = ref('')
  
  const search = () => {
    if (!query.value.trim()) return
    const encoded = encodeURIComponent(query.value.trim())
    perplexityUrl.value = `https://www.perplexity.ai/search?q=${encoded}`
  }
  
  const prefill = (text: string) => {
    query.value = text
    search()
  }
  </script>
  