export default class MemoryStorage {
    constructor() {
        this.hashMap = {}
    }

    getItem(key) {
        return this.hashMap[key] || ''
    }

    setItem(key, value) {
        return (this.hashMap[key] = value)
    }

    removeItem(key) {
        this.hashMap[key] && delete this.hashMap[key]
    }

    clear() {
        this.hashMap = {}
    }
}
