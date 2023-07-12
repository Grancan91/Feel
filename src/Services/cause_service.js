import { api } from "./api"

export const loadCauses = async () => {
    try {
        const { data } = await api.get('/cause', {
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