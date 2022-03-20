import { defineStore } from 'pinia'

export const useEpisode = defineStore('episode', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            episodesList: [],
            episodesLoading: false,
            episodesError: null,

            selectedEpisode: null,
            selectedEpisodeComments: null,
            selectedEpisodeCharacters: null,
            selectedEpisodeLoading: false,
            selectedEpisodeError: null
        }
    },
    actions: {
        async getEpisodes() {
            this.episodesLoading = true;
            try {
                const call = await fetch('http://localhost:8002/api/episodes');

                const res = await call.json()

                this.episodesList = res.data
            } catch (error) {

                this.episodesError = error
            } finally {

                this.episodesLoading = false
            }
        },
        async getEpisode(id) {
            this.selectedEpisodeLoading = true;
            try {
                const call = await fetch('http://localhost:8002/api/episodes/' + id);
    
                const res = await call.json()
                console.log(res.data.episodeComments)
    
                this.selectedEpisode = res.data
                this.selectedEpisodeComments = res.data.episodeComments
                this.selectedEpisodeCharacters = res.data.characters
            } catch (error) {
                this.selectedEpisodeError = error
            } finally {
                this.selectedEpisodeLoading = false
            }
        },
    },
})