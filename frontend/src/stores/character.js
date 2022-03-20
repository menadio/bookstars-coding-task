import { defineStore } from 'pinia'

export const useCharacter = defineStore('character', {
    state: () => {
        return {
            charactersList: [],
            locationsList: [],
            loading: false,
            error: null,
            sortBy: '',
            orderBy: '',
            filterBy: ''
        }
    },
    actions: {
        async getCharacters() {
            this.loading = true;

            try {
                const call = await fetch('http://localhost:8002/api/characters?sort=' + this.sortBy + '&order=' + this.orderBy + '&filter=' + this.filterBy)

                const res = await call.json()

                this.charactersList = res.data
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
    }
})