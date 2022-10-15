import WebStorageCache from 'web-storage-cache';

const wsCache = new WebStorageCache({
  storage: 'localStorage',
  exp: Infinity
});

export { wsCache };
