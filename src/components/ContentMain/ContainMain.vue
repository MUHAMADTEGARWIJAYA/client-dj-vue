<template>
  <div class="bg-primary rounded-lg max-w-7xl mx-auto mt-8">
    <!-- Nintendo
    <div v-if="isHome" class="max-w-7xl mx-auto px-4 p-6">
      <h1 class="text-white text-2xl font-bold">Top 10 Download</h1>
      <CardMain :shoIndex="true" :items="game || []" ImgKey="image" />
     </div> -->

    <div v-if="isHome" class="max-w-7xl mx-auto px-4 p-6">
      <CardCustom category_name="Nintendo Switch" />
    </div>

    <!-- PS2 -->
    <!-- <div v-if="isPs2" class="max-w-7xl mx-auto px-4 p-6">
      <h1 class="text-white text-2xl font-bold">Top 10 PS2</h1>
      <CardMain :shoIndex="true" :items="game || []" ImgKey="image" />
    </div> -->

    <div v-if="isPs2" class="max-w-7xl mx-auto px-4 p-6">
      <CardCustom category_name="PS2" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import CardMain from "@/shared/CardMain.vue";

import CardCustom from '@/shared/CardCustom.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const isPs2 = computed(() => route.path === '/ps2')
</script>
