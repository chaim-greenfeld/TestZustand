import { useState } from "react"
import { create } from "zustand"


    export const useMovies = create( (set) => ({
    movie:[],
    isLoading: false,
    searchQuery: "",
    setSearchQuery: (value) => set({ searchQuery: value }),

    setMoviesZu: async () => {
        set({isLoading: true})
        try {
            const res = await fetch('http://localhost:3000/api/movies')
            const data = await res.json()
            set ({ movie: [...data], isLoading: false }) 

        } catch (err) {
            console.log(err)
        }
    },

}))
