# Cache-Manage
a uniform and sample js cache manage

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/cache-manage-js.svg?style=flat-square
[npm-url]: http://npmjs.org/package/cache-manage-js
[david-img]: https://img.shields.io/bundlephobia/minzip/cache-manage-js.svg?style=flat-square
[david-url]: https://npmjs.org/package/cache-manage-js
[download-img]: https://img.shields.io/npm/dm/cache-manage-js.svg?style=flat-square
[download-url]: https://npmjs.org/package/cache-manage-js
## Install
``` bash
yarn add cache-manage-js
```

## Usage

default use `localStorage` strategy to save cache.

``` js
import CacheManage from 'cache-manage-js'

let cacheItem = new CacheManage(CACHE_ITEM_KEY_NAME)
cacheItem.set({ name: 100 })
cacheItem.get() // { name: 100 }
cacheItem.remove()
cacheItem.clear()
```

### More Strategy

uniform manage your cache, support four cache strategy：
* localStorage ([web api](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)) - default
* sessionStorage ([web api](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage))
* MemoryStorage
* CookieStorage (extend [js-cookie](https://github.com/js-cookie/js-cookie))
``` js
import CacheManage, { MemoryStorage, CookieStorage } from 'cache-manage-js'

// union manage cache for different cache strategy in a single file
let cacheItem = new CacheManage(CACHE_ITEM_KEY_NAME, localStorage)
let cacheItem = new CacheManage(CACHE_ITEM_KEY_NAME, sessionStorage)
let cacheItem = new CacheManage(CACHE_ITEM_KEY_NAME, new MemoryStorage())
let cacheItem = new CacheManage(CACHE_ITEM_KEY_NAME, new CookieStorage({ expires: 7 }))
```

## License
[MIT](http://opensource.org/licenses/MIT)