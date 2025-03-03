<template>
  <div class="bg-black p-5 xl:h-[500px] h-[700px] mt-20 flex flex-col">
    <h1 class="text-white text-2xl xl:ml-24 font-bold">TechStack</h1>
    <div class="bg-black flex flex-col items-center justify-center">
      <div class="grid grid-cols-2 xl:flex gap-8">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="xl:w-60 xl:h-40 p-2 bg-[#0c0c0c] flex items-center justify-center rounded-lg overflow-hidden"
        >
          <img
            :src="image"
            alt="Sponsor"
            class="xl:w-60 xl:h-40 object-contain transition-all duration-300 grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  '/Vue.js.png', // Ganti dengan path gambar Vue
  '/express-svgrepo-com (2).svg', // Ganti dengan path gambar Express
  '/MongoDB.png', // Ganti dengan path gambar MongoDB
  '/Vite.js.png',
  '/Tailwind CSS.png',
])
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
