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
        <button @click="toggleDark" class="text-xl">
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
        <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          ND
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  </script>
  