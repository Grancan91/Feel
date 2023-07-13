import { api } from "./api"

export const loadEmotions = async () => {
    try {
        const { data } = await api.get('/emotion', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}