<template>
    <div class="p-6 max-w-md mx-auto">
      <h1 class="text-2xl mb-4">Login or Sign Up</h1>
      <form @submit.prevent="authHandler">
        <input v-model="email" type="email" placeholder="Email" class="input mb-2 w-full" />
        <input v-model="password" type="password" placeholder="Password" class="input mb-2 w-full" />
        <button class="btn bg-blue-500 text-white w-full mb-2">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
      </form>
      <button @click="toggle" class="text-sm underline">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { signIn, signUp } from '@/lib/useAuth'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const isLogin = ref(true)
  
  const toggle = () => isLogin.value = !isLogin.value
  
  const authHandler = async () => {
    const error = isLogin.value
      ? await signIn(email.value, password.value)
      : await signUp(email.value, password.value)
  
    if (error) alert(error.message)
    else router.push('/')
  }
  </script>
  
  
  