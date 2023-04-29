import { expect, it } from 'vitest';

interface CreateCacheType {
  cache: Record<string, string>;
  add(id: string, value: string): void;
  remove(id: string): void;
}

const createCache = (): CreateCacheType => {
  const cache: CreateCacheType['cache'] = {};

  const add = (id: string, value: string): void => {
    cache[id] = value;
  };

  const remove = (id: string): void => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it('Should add values to the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');

  expect(cache.cache['123']).toEqual('Matt');
});

it('Should remove values from the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');
  cache.remove('123');

  expect(cache.cache['123']).toEqual(undefined);
});
