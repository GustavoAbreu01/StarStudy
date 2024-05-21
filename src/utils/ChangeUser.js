import { genConfig } from 'react-nice-avatar'

export const changeUser = (config) => {
    if (!config) {
        config = genConfig()
    }
    localStorage.setItem('user', JSON.stringify(config))
}

export const getUser = () => {
    let config = JSON.parse(localStorage.getItem('user'))
    return config??changeUser()
}
