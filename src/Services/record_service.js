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

export const loadPatientRecords = async () => {
    try {
        const patientId = localStorage.getItem("patient_id");
        const { data } = await api.get(`/record/average/${patientId}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const loadAverageEmotions = async () => {
    console.log('loadaverageEmotions')
    try {
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

