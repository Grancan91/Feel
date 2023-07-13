import { api } from "./api"

export const saveRecord = async (record) => {
    try {
        const { data } = await api.post('/record', record, {
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