import CacheManage, { MemoryStorage }  from '../src'

test('cache manage', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new MemoryStorage())
    manage.set('123')
    expect(manage.get()).toBe('123');
});