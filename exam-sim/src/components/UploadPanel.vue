<template>
  <div class="border rounded p-4 dark:border-gray-600">
    <label class="block text-sm font-medium mb-2 dark:text-white">Select PDF</label>
    <input type="file" @change="handleFileUpload" accept=".pdf" class="mb-4" />
    
    <button
      :disabled="isUploading"
      @click="upload"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {{ isUploading ? 'Uploading...' : 'Upload to ChatPDF' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const file = ref<File | null>(null)
const isUploading = ref(false)

const emit = defineEmits<{
  (e: 'uploadSuccess', sourceId: string): void
}>()

const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
  }
}

const upload = async () => {
  if (!file.value) return

  isUploading.value = true

  const formData = new FormData()
  formData.append('file', file.value)

  const res = await fetch('https://api.chatpdf.com/v1/sources/add-file', {
    method: 'POST',
    headers: {
      'x-api-key': 'YOUR_CHATPDF_API_KEY',
    },
    body: formData,
  })

  const data = await res.json()
  isUploading.value = false

  if (data?.sourceId) {
    emit('uploadSuccess', data.sourceId)
  } else {
    alert('Upload failed. Check your API key or file limits.')
  }
}
</script>
