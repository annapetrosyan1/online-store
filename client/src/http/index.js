import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ // необходимо подставлять автоматически токен к каждому запросу
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    // интерцептор - функция, которая параметром принимает config
    // токен получаем из локального хранилища по key='token'
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
    // при авторизации добавляем токен в хранилище
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
