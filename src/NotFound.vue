<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-primary text-center p-6">
    <h1 class="text-8xl font-extrabold text-gray-900">404</h1>
    <p class="text-2xl text-gray-600 mt-4">Oops! Halaman yang Anda cari tidak ditemukan.</p>
    <p class="text-lg text-gray-500 mt-2">
      Mungkin halaman telah dipindahkan atau Anda salah mengetik URL.
    </p>
    <router-link
      to="/"
      class="mt-6 px-8 py-3 bg-hover text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
    >
      Kembali ke Beranda
    </router-link>
  </div>
</template>
