import { api } from "./api"

export const updateReminder = async (reminder_freq, reminder_time, reminder_send = Date.now ) => {
    try {
        const { data } = await api.patch('/user', {
            reminder_freq: reminder_freq,
            reminder_time: reminder_time,
            reminder_send: reminder_send
        }, { headers: {
            token: localStorage.getItem('token')
        }})
        if(data){
            console.log(data)
            return true
        } 
        
    } catch (err) {
        return err
    }
}

export const loadUsers = async () => {
    try {
        
        const { data } = await api.get('/user', {
            headers: {
                token: localStorage.getItem('token'),
            }
        })
        if (data) {
            return data
        }

    } catch (err) {
        return err
    }
}