/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        slabo: ['Slabo 27px', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#050505', // Warna utama (biru)
          light: '#5dade2', // Variasi lebih terang
          dark: '#2e86c1', // Variasi lebih gelap
        },
        secondary: '#e74c3c', // Warna sekunder (merah)
        accent: '#f1c40f', // Warna aksen (kuning)
        hover: '#3e6985',
      },
    },
  },
  plugins: [],
}
