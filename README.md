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
uniform manage your cache class, support four cache class，and you can user-defined cache class by yourself。
* localStorage ([web api](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage))
* sessionStorage ([web api](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage))
* MemoryStorage
* CookieStorage (extend [js-cookie](https://github.com/js-cookie/js-cookie))
``` js
import CacheManage, { MemoryStorage, CookieStorage } from 'cache-manage-js'

// default use localStorage
const YOUR_KEY_NAME = 'YOUR_KEY_NAME'
let cacheItem = new CacheManage(YOUR_KEY_NAME)
cacheItem.set({name: 100})
cacheItem.get() // {name: 100}
cacheItem.remove()
cacheItem.clear()

// other cache class
let cacheItem = new CacheManage(YOUR_KEY_NAME, window.sessionStorage)
let cacheItem = new CacheManage(YOUR_KEY_NAME, new MemoryStorage())
let cacheItem = new CacheManage(YOUR_KEY_NAME, new CookieStorage())
```

## License
The code is distributed under the [MIT](http://opensource.org/licenses/MIT) license