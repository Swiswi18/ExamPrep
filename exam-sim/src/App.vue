<template>
  <div>
    <nav class="p-4 bg-gray-100 flex gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/study">Study</RouterLink>
      <RouterLink to="/practice">Practice</RouterLink>
      <RouterLink to="/exam">Mock Exam</RouterLink>
      <RouterLink to="/upload">Upload</RouterLink>
      <RouterLink to="/search">Search</RouterLink>
      <RouterLink to="/auth">Auth</RouterLink>

    </nav>
    <RouterView />
  </div>
</template>
