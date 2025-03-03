<template>
  <div class="relative w-full mx-auto xl:h-[550px] overflow-hidden bg-primary">
    <div
      v-if="!isMobile && games?.length"
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in games" :key="index" class="flex w-full flex-shrink-0">
        <!-- TEXT -->
        <div class="w-[600px] flex flex-col items-end justify-center p-8">
          <div class="space-y-2 w-[500px] p-16">
            <h1 class="text-white text-3xl font-bold">{{ slide.name }}</h1>
            <p class="text-white line-clamp-3">{{ slide.description }}</p>
            <div class="mt-5">
              <router-link :to="`/detail/${slide._id}`">
                <ButtonMain>
                  <span><Download :stroke-width="2.25" /></span> Download
                </ButtonMain>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Gambar Slideshow dari slide.gif -->
        <div class="relative w-full h-[550px] bg-primary">
          <img :src="getGifPath(slide.gif)" :alt="slide.name" class="w-full h-full object-cover" />
          <div
            class="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-primary to-transparent"
          ></div>
        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div
      v-if="isMobile && games?.length"
      class="flex flex-col items-center text-center p-8"
      :style="{
        backgroundImage: mobileBgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <h1 class="text-white text-3xl font-bold">{{ games[currentIndex]?.name }}</h1>
      <p class="text-white line-clamp-3">{{ games[currentIndex]?.description }}</p>
      <router-link :to="`/detail/${games[currentIndex]?._id}`">
        <ButtonMain>
          <span><Download :stroke-width="2.25" /></span> Download
        </ButtonMain>
      </router-link>
    </div>

    <!-- Tombol Prev -->
    <button
      v-if="games?.length > 1"
      @click="prevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-[#222121]"
    >
      ❮
    </button>

    <!-- Tombol Next -->
    <button
      v-if="games?.length > 1"
      @click="nextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
    >
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'
import ButtonMain from '@/shared/ButtonMain.vue'
import { useGamesQuery } from '@/stores/counter'
import { Download } from 'lucide-vue-next'

const { data: games = ref([]) } = useGamesQuery()
const currentIndex = ref(0)
const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const limitedGames = computed(() => games.value?.slice(0, 3) || [])

watchEffect(() => {
  if (limitedGames.value.length && currentIndex.value >= limitedGames.value.length) {
    currentIndex.value = 0
  }
})

const isMobile = computed(() => windowWidth.value <= 768)

const nextSlide = () => {
  if (limitedGames.value.length) {
    currentIndex.value = (currentIndex.value + 1) % limitedGames.value.length
  }
}

const prevSlide = () => {
  if (limitedGames.value.length) {
    currentIndex.value =
      (currentIndex.value - 1 + limitedGames.value.length) % limitedGames.value.length
  }
}

const getMediaUrl = import.meta.env.VITE_MEDIA_URL

const getGifPath = (gif) => {
  return gif ? `${getMediaUrl}${gif}` : ''
}

const mobileBgImage = computed(() =>
  limitedGames.value.length
    ? `url(${getGifPath(limitedGames.value[currentIndex.value]?.gif)})`
    : '',
)
</script>

<style scoped>
.slide-container {
  transition: transform 0.5s ease-in-out;
}
</style>
