<template>
  <div class="flex items-center justify-center min-h-screen bg-primary">
    <div class="text-center text-white p-6">
      <div
        initial="{ opacity: 0, y: -20 }"
        animate="{ opacity: 1, y: 0 }"
        transition="{ duration: 1 }"
      >
        <h1 class="text-5xl font-bold">🚀 Coming Soon</h1>
        <p class="mt-2 text-lg">We're working hard to bring something amazing. Stay tuned!</p>
      </div>

      <div
        class="mt-6 text-3xl font-bold"
        initial="{ opacity: 0 }"
        animate="{ opacity: 1 }"
        transition="{ delay: 0.5, duration: 1 }"
      ></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
