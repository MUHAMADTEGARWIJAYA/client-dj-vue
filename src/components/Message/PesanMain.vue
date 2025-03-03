<template>
  <div class="flex xl:p-0 p-10 justify-center items-center min-h-[400px] bg-primary">
    <div
      class="xl:w-full xl:max-w-7xl bg-primary border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-4 text-sm"
    >
      <h1 class="text-center text-white text-xl font-bold col-span-6">FeedBack</h1>

      <!-- Tombol Template Pesan -->
      <div class="col-span-6 flex justify-center flex-wrap gap-2">
        <button
          v-for="(template, index) in templates"
          :key="index"
          @click="applyTemplate(template)"
          class="border text-white border-slate-200 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:text-primary hover:border-slate-600 transition"
        >
          {{ template }}
        </button>
      </div>

      <textarea
        v-model="message"
        placeholder="#Bug , #Feedback , #LinkError, #RequestGame "
        class="bg-primary text-white h-28 placeholder:text-white placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
      ></textarea>

      <!-- Send Button -->
      <div class="col-span-6 flex justify-center mt-2">
        <button
          @click="sendFeedback"
          :disabled="loading"
          class="flex items-center justify-center gap-2 border text-white border-slate-200 rounded-lg p-2 px-4 duration-300 hover:bg-slate-100 hover:border-slate-600 hover:text-primary focus:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            v-if="!loading"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-send"
          >
            <path
              d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
            />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>

          <!-- Spinner -->
          <svg
            v-else
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
            ></path>
          </svg>

          <span>{{ loading ? 'Sending...' : 'Send' }}</span>
        </button>
      </div>

      <!-- Notifikasi -->
      <div v-if="successMessage" class="col-span-6 text-center text-green-500 mt-2">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="col-span-6 text-center text-red-500 mt-2">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyxddRSWor33PdC-MzB4znnwcxYxoHcd-nuj2qbpA8oLe2TxKfcjZDb7RNFIwZa7xs/exec'

const message = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const loading = ref(false)

// Template pesan yang bisa dipilih user
const templates = ref([
  '💡 Feedback: Bintang 5 Sangat Membantu',
  '🚀 Bug: Fitur tidak berfungsi dengan baik!',
  '🔗 Request Game ',
  '🔗 Link Error: Halaman ini tidak bisa diakses!',
])

// Menambahkan teks template ke dalam textarea
const applyTemplate = (templateText) => {
  if (message.value) {
    message.value += '\n' + templateText
  } else {
    message.value = templateText
  }
}

const sendFeedback = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!message.value.trim()) {
    errorMessage.value = 'Masukkan pesan terlebih dahulu!'
    return
  }

  loading.value = true

  const formData = new FormData()
  formData.append('pesan', message.value)

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      successMessage.value = 'Feedback berhasil dikirim Terimakasih!'
      message.value = ''
    } else {
      errorMessage.value = 'Gagal mengirim feedback. Coba lagi nanti.'
    }
  } catch (error) {
    errorMessage.value = 'Terjadi kesalahan saat mengirim feedback. Error: ' + error.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
