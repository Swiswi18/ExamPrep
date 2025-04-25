<template>
    <div class="space-y-6">
      <div v-if="currentQuestion">
        <h2 class="text-xl font-semibold mb-2">
          Question {{ currentIndex + 1 }} of {{ questions.length }}
        </h2>
        <p class="mb-4">{{ currentQuestion.question }}</p>
  
        <div v-for="(option, idx) in currentQuestion.options" :key="idx" class="mb-2">
          <label class="flex items-center gap-2">
            <input
              type="radio"
              :value="option"
              v-model="selectedAnswer"
              class="accent-blue-600"
            />
            {{ option }}
          </label>
        </div>
  
        <button
          @click="submitAnswer"
          class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Answer
        </button>
      </div>
  
      <div v-else>
        <h2 class="text-2xl font-bold">Quiz Complete!</h2>
        <p class="mt-2 text-lg">Score: {{ score }} / {{ questions.length }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  type Question = {
    question: string
    options: string[]
    correctAnswer: string
  }
  
  const props = defineProps<{
    questions: Question[]
  }>()
  
  const currentIndex = ref(0)
  const selectedAnswer = ref('')
  const score = ref(0)
  
  const currentQuestion = computed(() => props.questions[currentIndex.value])
  
  const submitAnswer = () => {
    if (selectedAnswer.value === currentQuestion.value?.correctAnswer) {
      score.value++
    }
    selectedAnswer.value = ''
    currentIndex.value++
  }
  </script>
  