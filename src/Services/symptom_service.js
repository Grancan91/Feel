import { api } from "./api"

export const loadSymptoms = async () => {
    try {
        const { data } = await api.get('/symptom', {
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