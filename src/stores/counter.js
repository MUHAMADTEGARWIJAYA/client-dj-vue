import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getAPIUrl = import.meta.env.VITE_API_URL

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [],
  }),
  actions: {
    async fetchGames() {
      const { data } = await axios.get(`${getAPIUrl}games/getall`)
      this.games = data
    },
  },
})

// Fetch data dengan Vue Query
export function useGamesQuery() {
  return useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await axios.get(`${getAPIUrl}games/getall`)
      return data
    },
  })
}

export function useGameByIdQuery(id) {
  return useQuery({
    queryKey: ['game', id],
    queryFn: async () => {
      const { data } = await axios.get(`${getAPIUrl}games/${id}`)
      return data
    },
    enabled: !!id, // Fetch hanya jika ID tersedia
  })
}

export function useGamesByCategoryQuery(category_name) {
  return useQuery({
    queryKey: ['games', category_name],
    queryFn: async () => {
      const { data } = await axios.get(`${getAPIUrl}games/getall/${category_name}`)
      return data
    },
    enabled: !!category_name, // Fetch hanya jika category_name tersedia
  })
}
