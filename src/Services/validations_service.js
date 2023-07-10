
export const styleName = (name) => {
    if(name === ''){
        return 'border-grey'
    }
    return isName(name) ? 'border-green' : 'border-red'
    }

export const isName = (name) => {
    return name.length > 3 ? true : false
    }

export const isAge = (age) => {
    return age = age.slice(0,2)
}

export const isEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

export const styleEmail = (email) => {
    if (email === '') {
        return 'border-grey'
    }
    return isEmail(email) ? 'border-green' : 'border-red'
}

export const isPassword = (password) => {
    return password.length >= 6 ? true : false
}

export const stylePassword = (password) => {
    if (password === '') {
        return 'border-grey'
    }
    return isPassword(password) ? 'border-green' : 'border-red'
}