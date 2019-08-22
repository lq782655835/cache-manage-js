export * from './adapter'

export default class CacheManage {
    constructor(key, CacheClass) {
        this.key = key
        this.CacheClass = CacheClass || window.localStorage
    }

    get() {
        let value = this.CacheClass.getItem(this.key) || ''
        if (/^(\{|\[).*(\}|\])$/.test(value)) value = JSON.parse(value)
        return value
    }

    set(value) {
        if (value === null || value === undefined) return
        if (typeof value === "object") value = JSON.stringify(value)
        this.CacheClass.setItem && this.CacheClass.setItem(this.key, value)
    }

    remove() {
        this.CacheClass.removeItem && this.CacheClass.removeItem(this.key)
    }

    clear() {
        this.CacheClass.clear && this.CacheClass.clear()
    }
}
