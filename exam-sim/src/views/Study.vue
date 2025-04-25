<template>
    <div class="p-4 space-y-6 text-gray-900 dark:text-white">
      <h1 class="text-2xl font-bold">Study Page</h1>
  
      <div class="flex flex-wrap gap-4">
        <button @click="loadChatPDFTopics" class="btn">📄 From Uploaded PDF</button>
        <button @click="loadPerplexityTopics" class="btn">🌐 From Perplexity</button>
      </div>
  
      <TopicCluster v-if="Object.keys(topicClusters).length" :clusters="topicClusters" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import TopicCluster from '@/components/TopicCluster.vue'
  
  const topicClusters = ref<Record<string, string[]>>({})
  
  const loadChatPDFTopics = async () => {
    // Mocked data from ChatPDF
    topicClusters.value = {
      "Identity & Access Management": ["Azure AD", "Conditional Access", "SSO"],
      "Security": ["MFA", "Microsoft Defender", "Zero Trust"],
      "Compliance": ["Compliance Manager", "Insider Risk Management"]
    }
  }
  
  const loadPerplexityTopics = async () => {
    // Mocked data from Perplexity
    topicClusters.value = {
      "Identity": ["Azure AD basics", "User roles", "Role-based access"],
      "Security": ["Threat protection", "Secure Score", "SIEM"],
      "Governance": ["Policy compliance", "Data loss prevention", "Auditing"]
    }
  }
  </script>
  
  <style scoped>
  .btn {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded;
  }
  </style>
  