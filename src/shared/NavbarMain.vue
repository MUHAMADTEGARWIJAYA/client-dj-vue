<template>
  <div class="w-full bg-red-900">
    <div class="justify-between bg-gray-950 text-white font-slabo p-3 flex">
      <!-- Nav kiri -->
      <div class="flex gap-6 cursor-pointer">
        <img src="/logo.png" alt="" class="w-28 h-10 object-cover" />
        <ul class="xl:flex gap-5 items-center hidden">
          <router-link
            to="/"
            :class="{ 'text-hover font-bold': route.path === '/' }"
            class="hover:text-hover"
          >
            NintendoSwitch
          </router-link>
          <router-link
            to="/ps2"
            :class="{ 'text-hover font-bold': route.path === '/ps2' }"
            class="hover:text-hover"
          >
            PS2
          </router-link>
          <a href="https://pcsx2.net/" target="_blank" class="hover:text-hover cursor-pointer">
            EMULATOR
          </a>
        </ul>
      </div>

      <!-- <div class="flex items-center xl:w-[480px] mr-10 xl:mr-0">
        <input type="text" placeholder="Search..." class="input text-black py-2 px-4" />
      </div> -->

      <!-- Nav kanan  -->
      <div class="flex gap-3 items-center">
        <ul class="xl:flex gap-3 cursor-pointer hidden">
          <router-link
            to="/messages"
            :class="{ 'text-hover font-bold': route.path === '/messages' }"
            class="hover:text-hover"
          >
            <Mail />
          </router-link>
        </ul>
      </div>
    </div>
    <div class="md:hidden absolute top-4 right-4 text-white">
      <button @click="show = !show">
        <svg
          v-if="!show"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="show" class="md:hidden">
      <NavbarMobile />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Mail } from 'lucide-vue-next'

import { ref } from 'vue'
import NavbarMobile from './NavbarMobile.vue'

const route = useRoute()
const show = ref(true)
</script>
