<template>
  <footer class="bg-primary text-white py-12 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Brand & Copyright -->
      <div>
        <h2 class="text-2xl font-bold text-green-600">DAJA</h2>
        <p class="text-sm mt-2">&copy; 2025 DownloadAja. All rights reserved (muhamad tegar wijaya)</p>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-lg font-semibold">Next Features</h3>
        <ul class="mt-3 space-y-2">
          <li><a href="#" class="hover:underline">-</a></li>
          <li><a href="#" class="hover:underline">-</a></li>
          <li><a href="#" class="hover:underline">-</a></li>
          <li><a href="#" class="hover:underline">-</a></li>
          <li><a href="#" class="hover:underline">-</a></li>
        </ul>
      </div>

      <!-- About Us -->
      <div>
        <h3 class="text-lg font-semibold">About us</h3>
        <ul class="mt-3 space-y-2">
          <li>
            <a href="https://github.com/MUHAMADTEGARWIJAYA" class="hover:underline">Contact us</a>
          </li>
        </ul>
      </div>

      <!-- Resources & Contact -->
      <div>
        <h3 class="text-lg font-semibold">Thank To</h3>
        <ul class="mt-3 space-y-2">
          <li><a href="#" class="hover:underline">DownloadAja</a></li>
          <li><a href="#" class="hover:underline">Github</a></li>
          <li><a href="#" class="hover:underline">MongoDB</a></li>
          <li><a href="#" class="hover:underline">Vercel</a></li>
        </ul>
        <h3 class="text-lg font-semibold mt-6">Get in touch</h3>
        <IconSvg />
        <div class="flex space-x-4 mt-4">
          <a href="#" class="hover:text-gray-800"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="hover:text-gray-800"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="hover:text-gray-800"><i class="fab fa-linkedin fa-lg"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconSvg from '@/icons/IconSvg.vue'
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
