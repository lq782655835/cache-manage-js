import CacheManage, { MemoryStorage, CookieStorage }  from '../src'

const valueString = '123'
const valueObject = {name : 123}

test('localStorage cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME')
    manage.set(valueString)
    expect(manage.get()).toBe(valueString);
});

test('sessionStorage cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', sessionStorage)
    manage.set(valueString)
    expect(manage.get()).toBe(valueString);
});

test('memory cache class', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new MemoryStorage())
    manage.set(valueString)
    expect(manage.get()).toBe(valueString);
});

test('cookie cache class for simple type', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new CookieStorage())
    manage.set(valueString)
    expect(manage.get()).toBe(valueString);
});

test('cookie cache class for object', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new CookieStorage())
    manage.set(valueObject)
    expect(manage.get()).toEqual(valueObject);
});