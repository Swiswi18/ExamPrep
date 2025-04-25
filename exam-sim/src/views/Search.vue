<template>
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-2xl font-semibold mb-4">Search Online Study Topics</h1>
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        Use Perplexity to fetch summaries and explanations of SC-900 topics.
      </p>
  
      <input
        v-model="query"
        placeholder="e.g. Azure Active Directory overview"
        class="w-full p-3 border rounded mb-4 dark:bg-gray-800 dark:border-gray-600"
      />
  
      <button @click="search" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Search
      </button>
  
      <div v-if="result" class="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <h2 class="text-xl font-semibold mb-2">Response</h2>
        <p>{{ result }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const query = ref('')
  const result = ref<string | null>(null)
  
  const search = async () => {
    result.value = 'Loading...'
  
    // Replace this mock with actual Perplexity integration or dummy response
    await new Promise(resolve => setTimeout(resolve, 1000))
    result.value = `This is a mock response for "${query.value}". Perplexity API will return structured text.`
  }
  </script>
  