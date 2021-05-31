const assert = require('assert').strict;
const numberOfVowels = require('./numberOfVowels');

try {
  assert.equal(
    numberOfVowels('tomato🍅'),
    3,
    'it should be 3 vowels with tomato🍅'
  );
} catch (err) {
  console.log(`${err.name} - ${err.message}`);
  console.log(`Expected: ${err.expected} - Actual: ${err.actual}`)
}

try {
  assert.equal(
    numberOfVowels('watermelon🍉'),
    4,
    'it should be 4 vowels with watermelon🍉'
  );
} catch (err) {
  console.log(`${err.name} - ${err.message}`);
  console.log(`Expected: ${err.expected} - Actual: ${err.actual}`)
}

try {
  assert.equal(
    numberOfVowels('sweet potato🍠'),
    5,
    'it should be 5 vowels with sweet potato🍠'
  );
} catch (err) {
  console.log(`${err.name} - ${err.message}`);
  console.log(`Expected: ${err.expected} - Actual: ${err.actual}`)
}

console.log('Continue execution here...');
