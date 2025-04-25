<template>
  <div>
    <button @click="toggleTheme" class="btn">Toggle Dark Mode</button>
    <div class="secondary mt-4">
      <h1 class="text-2xl">This is a themed section</h1>
      <p>The theme changes based on the current mode (light or dark).</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toggleTheme = () => {
  document.body.classList.toggle('dark')
}
</script>

<style scoped>
/* Scoped styles can still use the theme variables if needed */
</style>
