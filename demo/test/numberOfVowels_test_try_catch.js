const assert = require('assert').strict;
const numberOfVowels = require('../numberOfVowels')

console.log(numberOfVowels);

// tomato🍅

// assert.equal(numberOfVowels(''), 'please, provide a string', "it should return please provide a strin" )

try {
  console.log('numberOfVowels() with tomato🍅 should have 3 vowels');
  assert.equal(
    numberOfVowels('tomato🍅'),
    3
    // 'it should be 3 vowels with tomato🍅'
  );
  console.log("test pass ✅")
} catch (err) {
  console.log('Failed ❌')
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}

// watermelon🍉

try {
  console.log('numberOfVowels() with watermelon🍉 should have 4 vowels');
  assert.equal(
    numberOfVowels('watermelon🍉'),
    4,
    'it should be 4 vowels with watermelon🍉'
  );
  console.log("test pass ✅")
} catch (err) {
  console.log('Failed ❌')
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}

try {
  console.log('numberOfVowels() with sweet potato🍠 should have 5 vowels');
  assert.equal(
    numberOfVowels('sweet potato🍠'),
    5,
    'it should be 5 vowels with sweet potato🍠'
  );
  console.log("test pass ✅")
} catch (err) {
  console.log('Failed ❌')
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}