const HashMap = require('./hashMap');

class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(key) {
    this.map.set(key, true);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.remove(key);
  }

  clear() {
    this.map.clear();
  }

  size() {
    return this.map.length();
  }

  values() {
    return this.map.keys();
  }
}

module.exports = HashSet;