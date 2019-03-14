import CacheManage from '../src'
import MemoryStorage from '../src/adapter/memory'

test('cache manage', () => {
    let manage = new CacheManage('YOUR_KEY_NAME', new MemoryStorage())
    manage.set('123')
    expect(manage.get()).toBe('123');
});