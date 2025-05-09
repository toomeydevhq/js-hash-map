const HashMap = require('./hashMap');

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log('Length before:', test.length());

// Overwrite
test.set('apple', 'green');
test.set('hat', 'gray');

console.log('Overwriting done. Length still:', test.length());

// Trigger resize
test.set('moon', 'silver');

console.log('New capacity:', test.capacity);
console.log('Length after expansion:', test.length());

// Test API
console.log('Get kite:', test.get('kite'));
console.log('Has elephant:', test.has('elephant'));
test.remove('carrot');
console.log('Removed carrot. Length:', test.length());

console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());