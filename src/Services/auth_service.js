import { api } from "./api"

export const userSignup = async (name, age, email, password, pro_email) => {
    try {
        const { data } = await api.post('/auth/signup', {
            name: name,
            age: age,
            email: email,
            password: password,
            pro_email: pro_email,
        })
        if (data.code === 11000) {
            return data            
        } else {
            localStorage.setItem('token', data.token)
            return true
        }
    } catch (err) {

        return err
    }
}

export const userLogin = async (email, password) => {
    try {
        const { data } = await api.post('/auth/login', { email, password })
        localStorage.setItem('token', data.userDetails.token)
        localStorage.setItem('name', data.userDetails.name)
        localStorage.setItem('email', data.userDetails.email)
        localStorage.setItem('id', data.userDetails.id)
        return true
    } catch (err) {
        return false
    }
}