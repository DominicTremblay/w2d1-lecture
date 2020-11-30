const assert = require('assert').strict; // add .strict to ensure assert.equal is ===
const numberOfVowels = require('../nb_vowels');

//assert.equal test for == only => coercion
try {
  assert.equal(numberOfVowels('orange'), 3, 'orange should contain 3 vowels');
} catch (err) {
  console.log(`${err.name} - actual: ${err.actual}, expected: ${err.expected}`);
  console.log(err.message);
}

try {
  assert.equal(numberOfVowels('lighthouse labs'), 5, 'should have 5 vowels');
} catch (err) {
  console.log(`${err.name} - actual: ${err.actual}, expected: ${err.expected}`);
  console.log(err.message);
}

try {
  assert.equal(numberOfVowels('aeiou'), 5, 'aeiou should have 5 vowels');
} catch (err) {
  console.log(`${err.name} - actual: ${err.actual}, expected: ${err.expected}`);
  console.log(err.message);
}

// try {
//   const num = 0;

//   assert.equal(num, false, 'it should be false'); // pass or fail?
// } catch (err) {
//   console.log(`${err.name} - actual: ${err.actual}, expected: ${err.expected}`);
//   console.log(err.message);
// }

// assert.equal([1, 2, 3], [1, 2, 3], 'the 2 arrays should have the same content'); // pass of fail?

// console.assert(numberOfVowels("orange") === 3, 'orange should contain 3 vowels');
// console.assert(numberOfVowels("lighthouse labs")===5, 'should have 5 vowels');
// console.assert(numberOfVowels("aeiou")===5, 'aeiou should have 5 vowels');

// console.assert([1,2,3] === [1,2,3], 'the 2 arrays should have the same content');// pass of fail?
