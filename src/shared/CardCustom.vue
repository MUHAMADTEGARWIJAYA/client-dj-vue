<template>
  <div class="py-4 px-4 w-full bg-primary flex flex-col justify-center items-center">
    <div v-if="error" class="text-red-500 text-lg font-bold">Gagal mengambil data game.</div>
    <h1 class="text-white text-2xl font-bold mb-4">Games in {{ category_name }}</h1>

    <!-- Grid Game -->
    <div class="grid xl:grid-cols-6 grid-cols-2 gap-4 w-full max-w-7xl justify-center">
      <div
        v-for="item in paginatedGames"
        :key="item._id"
        class="flex flex-col items-center cursor-pointer hover:scale-90 transition-transform duration-300"
      >
        <router-link
          :to="`/detail/${item._id}`"
          class="flex flex-col items-center cursor-pointer hover:scale-90 transition-transform duration-300"
        >
          <img
            v-if="item.cover"
            :src="`${getMediaUrl}${item.cover}`"
            alt="Cover Image"
            class="object-cover h-60 w-44 rounded-md"
          />
          <h1 class="text-white text-center mt-2 font-bold">{{ item.name }}</h1>
        </router-link>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-6 flex items-center space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
      >
        Prev
      </button>

      <span class="text-white font-bold">Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGamesByCategoryQuery } from '@/stores/counter'

// ENV
const getMediaUrl = import.meta.env.VITE_MEDIA_URL // Ambil URL dari env

// Props untuk kategori
const props = defineProps({
  category_name: String,
})

// Fetch games berdasarkan kategori
const { data: games, error } = useGamesByCategoryQuery(props.category_name)

// Pagination Config
const itemsPerPage = 6
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil((games.value?.length || 0) / itemsPerPage))

const paginatedGames = computed(() => {
  if (!games.value) return []
  const start = (currentPage.value - 1) * itemsPerPage
  return games.value.slice(start, start + itemsPerPage)
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>
