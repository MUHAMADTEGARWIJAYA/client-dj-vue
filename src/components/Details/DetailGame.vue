<template>
  <div class="relative xl:p-0 p-10 min-h-screen bg-primary flex justify-center items-center">
    <div v-if="isLoading" class="text-white text-lg font-bold">Loading...</div>
    <div v-else-if="error" class="text-red-500 text-lg font-bold">Gagal mengambil data game.</div>
    <div
      v-else
      class="flex flex-col md:flex-row bg-primary border xl:space-x-10 text-white border-white p-10 xl:p-20 rounded-lg shadow-lg w-full max-w-7xl mx-auto"
    >
      <!-- Image Section -->
      <div class="w-full md:w-2/3">
        <img
          :src="selectedImage"
          alt="Game Image"
          class="w-full xl:h-96 h-44 object-cover rounded-lg"
        />
        <div class="flex gap-2 mt-4">
          <img
            v-for="(image, index) in thumbnails"
            :key="index"
            :src="image"
            @click="selectedImage = image"
            class="w-20 h-16 object-cover rounded-lg cursor-pointer border-2"
            :class="{ 'border-blue-500': selectedImage === image }"
          />
        </div>
      </div>

      <!-- Details Section -->
      <div class="w-full md:w-1/3 flex space-y-5 flex-col xl:p-4 mt-10 xl:mt-0">
        <h2 class="text-xl font-bold">{{ game.name }}</h2>
        <p>Genre: {{ game.genre.name }}</p>
        <p class="font-bold">Password : <span class="text-blue-500">ALV-PS</span></p>
        <div class="mt-4">
          <p :class="{ 'line-clamp-3': !isExpanded }">
            {{ game.description || 'Tidak ada deskripsi tersedia.' }}
          </p>
          <button
            @click="toggleExpand"
            class="text-green-500 hover:text-green-700 focus:outline-none"
          >
            {{ isExpanded ? 'Tutup' : 'Baca Selengkapnya' }}
          </button>
        </div>
        <div class="flex">
          <a :href="game.download_link" target="_blank">
            <ButtonMain>
              <span><Download :stroke-width="2.25" /></span> Download
            </ButtonMain>
          </a>
        </div>
      </div>

      <!-- Tombol Navigasi Gambar -->
      <button
        @click="prevImage"
        class="absolute top-1/4 xl:top-1/2 xl:left-[160px] -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-[#222121]"
      >
        ❮
      </button>
      <button
        @click="nextImage"
        class="xl:top-1/2 absolute top-1/4 right-[80px] xl:right-[598px] -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black"
      >
        ❯
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useGameByIdQuery } from '@/stores/counter'
import ButtonMain from '@/shared/ButtonMain.vue'
import { Download } from 'lucide-vue-next'

const route = useRoute()
const gameId = route.params.id

const { data: game, isLoading, error } = useGameByIdQuery(gameId)
const getMediaUrl = import.meta.env.VITE_MEDIA_URL
// Gambar utama dan thumbnail
const selectedImage = ref('')
const thumbnails = computed(() => {
  if (game.value?.img?.length) {
    return game.value.img.map((img) => `${getMediaUrl}${img}`)
  }
  return []
})

watchEffect(() => {
  if (thumbnails.value.length > 0) {
    selectedImage.value = thumbnails.value[0]
  }
})

const currentImageIndex = ref(0)
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % thumbnails.value.length
  selectedImage.value = thumbnails.value[currentImageIndex.value]
}
const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + thumbnails.value.length) % thumbnails.value.length
  selectedImage.value = thumbnails.value[currentImageIndex.value]
}

const isExpanded = ref(false)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>
