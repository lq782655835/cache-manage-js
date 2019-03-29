declare interface IStorage {
    getItem(key: string): any;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
}

declare class BaseStorage implements IStorage {
    getItem(key: string): any;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
}

declare class CacheManage {
    constructor(key: string, storageInstance?: IStorage);

    get(): any;
    set(value: any): void;
    remove(): void;
    clear(): void;
}

export default CacheManage
export class MemoryStorage extends BaseStorage {}
export class CookieStorage extends BaseStorage {
    constructor(option?: { expires?: number; path?: string; domain?: string; secure?: boolean })
}