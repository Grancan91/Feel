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

export const loadHighlightedEmotions = async () => {

    //Cargar todas las emociones de todos los registros
    //Hacer la media entre la cantidad de registros totales y las veces que aparece cada emocion:

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