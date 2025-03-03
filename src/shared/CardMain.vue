<template>
  <div
    class="relative z-20 py-4 px-4 w-full bg-primary flex justify-center items-center overflow-hidden"
  >
    <div
      class="flex w-full max-w-full overflow-x-auto space-x-6 justify-start no-scrollbar snap-x snap-mandatory"
    >
      <div
        v-for="(item, id) in items"
        :key="id"
        class="flex flex-col snap-center cursor-pointer hover:scale-90 transition-transform duration-300"
      >
        <h1 v-if="shoIndex" class="text-white text-2xl font-bold">{{ id + 1 }}</h1>
        <img :src="item[ImgKey]" class="object-cover h-60 w-44 rounded-md" alt="" />
        <h1 class="text-white w-44 text-center mt-2 font-bold">{{ item[Name] }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
  ImgKey: String,
  shoIndex: Boolean,
  Name: String,
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
