import { defineStore } from 'pinia'

export const useLocation = defineStore('location', {
    state: () => {
        return {
            locationsList: [],
            loading: false,
            error: null
        }
    },
    actions: {
        async getLocations() {
            this.loading = true

            try {
                const call = await fetch('http://localhost:8002/api/locations')

                const res = await call.json()

                this.locationsList = res.data
            } catch (error) {
                this.episodesError = error
            } finally {
                this.loading = false
            }
        }
    }
})