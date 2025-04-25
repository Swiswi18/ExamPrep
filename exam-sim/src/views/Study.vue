<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Start Your SC-900 Study Plan</h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Search AI Panel -->
        <div
          class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer"
          @click="goToSearch"
        >
          <h2 class="text-xl font-semibold mb-2">🔍 Search Online (Perplexity / DeepSeek)</h2>
          <p class="text-gray-600 dark:text-gray-300">Use AI search to explore topics from trusted sources like Microsoft Learn.</p>
        </div>
  
        <!-- Upload PDF Panel -->
        <div
          class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer"
          @click="goToUpload"
        >
          <h2 class="text-xl font-semibold mb-2">📄 Upload PDF (ChatPDF)</h2>
          <p class="text-gray-600 dark:text-gray-300">Extract and summarize study topics from PDF documents like exam guides.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goToSearch = () => {
    router.push('/search')
  }
  
  const goToUpload = () => {
    router.push('/upload')
  }
  </script>
  