<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Upload Study PDFs</h1>
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        Upload SC-900 study materials to parse and extract topics using ChatPDF.
      </p>
  
      <UploadPanel @uploadSuccess="handleUploadSuccess" />
    </div>
  </template>
  
  <script setup lang="ts">
  import UploadPanel from '@/components/UploadPanel.vue'
  
  const handleUploadSuccess = (sourceId: string) => {
    console.log('PDF uploaded. Source ID:', sourceId)
    // You could navigate to Study.vue with this ID or save to state.
  }
  </script>
  