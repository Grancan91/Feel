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

export const loadRecords = async () => {
    try {
        const { data } = await api.get('/record', {
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

export const loadAverageEmotions = async () => {
    try {
        console.log('aqui')
        const { data } = await api.get('/record/average', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        return error
    }
}

