class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0;
    }
    return Math.abs(hash) % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value; // overwrite
        return;
      }
    }

    bucket.push([key, value]);
    this.count++;

    if (this.count / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    for (let [k, v] of this.buckets[index]) {
      if (k === key) return v;
    }
    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const pos = bucket.findIndex(([k]) => k === key);
    if (pos !== -1) {
      bucket.splice(pos, 1);
      this.count--;
      return true;
    }
    return false;
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }

  keys() {
    return this.entries().map(([k]) => k);
  }

  values() {
    return this.entries().map(([, v]) => v);
  }

  entries() {
    return this.buckets.flat().slice();
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array(this.capacity).fill(null).map(() => []);
    this.count = 0;

    for (let bucket of oldBuckets) {
      for (let [k, v] of bucket) {
        this.set(k, v);
      }
    }
  }
}

module.exports = HashMap;