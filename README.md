# Cache-Manage
a fast and sample js cache manage

## Install
``` bash
yarn add cache-manage-js
```

## Usage
union manage your cache class, support four cache class，and you can user-defined cache class by yourself。
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