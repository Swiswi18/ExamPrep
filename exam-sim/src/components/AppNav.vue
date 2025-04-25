<template>
    <nav class="p-4 bg-gray-100 dark:bg-gray-800 shadow-md flex flex-wrap justify-between items-center gap-4">
      <div class="flex flex-wrap gap-4 text-sm font-medium">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/study">Study</RouterLink>
        <RouterLink class="nav-link" to="/practice">Practice</RouterLink>
        <RouterLink class="nav-link" to="/exam">Mock Exam</RouterLink>
        <RouterLink class="nav-link" to="/upload">Upload</RouterLink>
        <RouterLink class="nav-link" to="/search">Search</RouterLink>
        <RouterLink class="nav-link" to="/auth">Auth</RouterLink>
      </div>
      <div class="flex items-center gap-4">
        <button @click="toggleDarkMode" class="text-gray-700 dark:text-white text-lg">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const isDark = ref(false)
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  })
  </script>
  
  <style scoped>
  .nav-link {
    @apply text-gray-700 dark:text-white hover:underline;
  }
  </style>
  