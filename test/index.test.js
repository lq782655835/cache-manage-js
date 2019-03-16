import CacheManage, { MemoryStorage, CookieStorage }  from '../src'

test('localStorage cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME')
    manage.set('123')
    expect(manage.get()).toBe('123');
});

test('sessionStorage cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', sessionStorage)
    manage.set('123')
    expect(manage.get()).toBe('123');
});

test('memory cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new MemoryStorage())
    manage.set('123')
    expect(manage.get()).toBe('123');
});

test('cookie cache class for simple type', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new CookieStorage())
    manage.set('123')
    expect(manage.get()).toBe('123');
});

test('cookie cache class for object', () => {
    let saveValue = {name: 123}
    let manage = new CacheManage('YOUR_KEY_NAME', new CookieStorage())
    manage.set(saveValue)
    expect(manage.get()).toEqual(saveValue);
});