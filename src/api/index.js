const API_BASE = 'https://rickandmortyapi.com/api'

class API{
    async getCharacters(){
        const query = await fetch(`${API_BASE}/character`)
        const data = await query.json()
        return data
    }
    async getEpisodes(){
        const query = await fetch(`${API_BASE}/episode`)
        const data = await query.json()
        return data
    }
}

export default new API()