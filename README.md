# Cache-Manage
a fast and sample js cache manage

## Install
``` bash
yarn add cache-manage-js
```

## Usage

``` js
import CacheManage, { MemoryStorage } from 'cache-manage-js'

// default use localStorage
const YOUR_KEY_NAME = 'YOUR_KEY_NAME'
let cacheItem = new CacheManage(YOUR_KEY_NAME)
cacheItem.set({name: 100})
cacheItem.get() // {name: 100}
cacheItem.remove()
cacheItem.clear()

// other cache class
let cacheItem = new CacheManage(YOUR_KEY_NAME, window.localStorage)
let cacheItem = new CacheManage(YOUR_KEY_NAME, window.sessionStorage)
let cacheItem = new CacheManage(YOUR_KEY_NAME, new MemoryStorage())
```