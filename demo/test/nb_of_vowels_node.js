const assert = require('assert').strict; // core node modules
const numberOfVowels = require('../numberOfVowels');

// const {numberOfVowels} = require('../numberOfVowels');
// const numberOfVowels = require('../numberOfVowels').numberOfVowels;
try {
  assert.equal(
    numberOfVowels('tomato🍅'),
    3,
    'It should have 3 vowels with Tomato'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}

try {
  assert.equal(
    numberOfVowels('watermelon🍉'),
    4,
    'It should have 4 vowels with watermelon'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}

try {
  assert.equal(
    numberOfVowels('sweet potato🍠'),
    5,
    'It should be 5 vowels with sweet potato'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}

// assert.deepEqual([1,2,3],[1,2,3], 'The arrays should be equal');