<template>
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Start Studying for SC-900</h1>
      <div class="grid gap-6 sm:grid-cols-2">
        <RouterLink to="/upload" class="bg-blue-600 text-white text-center py-6 rounded-lg shadow hover:bg-blue-700">
          📄 Upload PDF (ChatPDF)
        </RouterLink>
        <RouterLink to="/search" class="bg-green-600 text-white text-center py-6 rounded-lg shadow hover:bg-green-700">
          🔍 Search Online (Perplexity)
        </RouterLink>
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
  