import Cookies from 'js-cookie'

export default class CookieStorage {
    constructor(option) {
        this._option = option || undefined
    }

    getItem(key) {
        return Cookies.get(key) || ''
    }

    setItem(key, value) {
        return Cookies.set(key, value, this._option)
    }

    removeItem(key) {
        Cookies.remove(key, this._option);
    }

    clear() {
        throw new Error('cookie not support the method')
    }
}
