<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
    <h2 class="text-2xl font-semibold mb-4 text-center dark:text-white">Upload Exam Files</h2>

    <!-- File Upload Form -->
    <div class="flex flex-col items-center">
      <input
        type="file"
        id="file-upload"
        ref="fileInput"
        @change="handleFileUpload"
        class="mb-4 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
        accept=".pdf"
      />
      <button
        @click="triggerFileInput"
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Choose File
      </button>
      <p v-if="uploadError" class="text-red-500 mt-2">{{ uploadError }}</p>
    </div>

    <!-- File Preview Section -->
    <div v-if="uploadedFile" class="mt-6">
      <h3 class="text-xl font-semibold text-center dark:text-white">Uploaded File</h3>
      <div class="flex justify-center items-center gap-4">
        <p class="text-gray-700 dark:text-gray-200">{{ uploadedFile.name }}</p>
        <button
          @click="processFile"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Process File
        </button>
        <button
          @click="removeFile"
          class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Remove File
        </button>
      </div>
    </div>

    <!-- Processing State -->
    <div v-if="isProcessing" class="mt-4 text-center">
      <p class="text-gray-600 dark:text-gray-200">Processing your file...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const uploadedFile = ref<File | null>(null)
const uploadError = ref<string | null>(null)
const isProcessing = ref(false)

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null

  if (file) {
    uploadedFile.value = file
    uploadError.value = null
  } else {
    uploadError.value = 'No file selected'
  }
}

const triggerFileInput = () => {
  const fileInput = document.getElementById('file-upload') as HTMLInputElement
  fileInput.click()
}

const removeFile = () => {
  uploadedFile.value = null
}

const processFile = async () => {
  if (uploadedFile.value) {
    isProcessing.value = true

    // Call the ChatPDF API or process the file here
    try {
      // Placeholder for actual file processing (e.g., using ChatPDF API)
      console.log('Processing file:', uploadedFile.value.name)
      
      // Simulate processing delay
      setTimeout(() => {
        isProcessing.value = false
        alert('File processed successfully!')
      }, 2000)
    } catch (error) {
      isProcessing.value = false
      alert('Error processing the file.')
    }
  } else {
    uploadError.value = 'No file to process.'
  }
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
