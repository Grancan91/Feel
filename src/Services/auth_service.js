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
        console.log(data)
        localStorage.setItem('token', data.token)
        return true
    } catch (err) {
        console.log(data.error)
        return err.code
    }
}