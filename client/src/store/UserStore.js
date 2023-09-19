import { makeAutoObservable } from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)
    }

    // action на авторизацию
    setIsAuth(bool) {
        this._isAuth = bool
    }
    // action на изменение пользователя
    setUser(user) { 
        this._isUser = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}