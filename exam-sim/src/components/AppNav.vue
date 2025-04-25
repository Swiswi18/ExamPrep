<template>
    <header class="bg-white dark:bg-gray-900 shadow px-4 py-3 flex justify-between items-center">
      <div class="flex items-center gap-6">
        <span class="text-xl font-bold text-blue-600 dark:text-blue-400">ExamSim</span>
        <nav class="hidden md:flex gap-4 text-gray-700 dark:text-gray-200">
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/study" class="hover:underline">Study</RouterLink>
          <RouterLink to="/practice" class="hover:underline">Practice</RouterLink>
          <RouterLink to="/exam" class="hover:underline">Mock Exam</RouterLink>
          <RouterLink to="/upload" class="hover:underline">Upload</RouterLink>
          <RouterLink to="/search" class="hover:underline">Search</RouterLink>
          <RouterLink to="/auth" class="hover:underline">Auth</RouterLink>
        </nav>
      </div>
  
      <div class="flex items-center gap-4">
        <!-- Dark Mode Toggle Button -->
        <button @click="toggleTheme" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all">
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
  
        <!-- Portfolio Initial Circle -->
        <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          N
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Track dark mode state
  const isDark = ref(false)
  
  // This method toggles the 'dark' class on the body element and logs the process
  const toggleTheme = () => {
    console.log("Toggling theme...")
  
    // Toggle the dark class on the body element
    document.body.classList.toggle('dark')
  
    // Track the dark mode state and log it
    isDark.value = !isDark.value
    console.log(`Dark mode is now: ${isDark.value ? "enabled" : "disabled"}`)
  
    // Log the current body class list
    console.log("Current body classes:", document.body.classList)
  }
  </script>
  
  <style scoped>
  button {
    outline: none;
  }
  </style>
  