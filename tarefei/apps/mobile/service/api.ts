import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const handleGetRequest = async (endpoint: string) => {
    try {
        const response = await api.get(endpoint)
        return response.data
    } catch (error) {
        throw error
    }
}