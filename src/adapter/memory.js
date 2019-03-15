export default class MemoryStorage {
    constructor() {
        this._data = {}
    }

    getItem(key) {
        return this._data[key] || ''
    }

    setItem(key, value) {
        return (this._data[key] = value)
    }

    removeItem(key) {
        this._data[key] && delete this._data[key]
    }

    clear() {
        this._data = {}
    }
}
