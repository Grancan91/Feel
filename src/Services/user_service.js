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