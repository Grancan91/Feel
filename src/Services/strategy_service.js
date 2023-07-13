import { api } from "./api"

export const loadStrategy = async () => {
    try {
        const { data } = await api.get('/strategy', {
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