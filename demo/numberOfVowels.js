const assert = require('assert').strict;

const numberOfVowels = (str) => {
  return 3;
};

// tomato🍅
// watermelon🍉
// sweet potato🍠

// write the test first

try {
  assert.equal(
    numberOfVowels('tomato🍅'),
    3,
    'It should be 3 vowels with tomato🍅'
  );
} catch (err) {
  console.log('error');
}
try {
  assert.equal(
    numberOfVowels('watermelon🍉'),
    4,
    'It should be 4 vowels with watermelon🍉'
  );
} catch (err) {
  console.log(err.message);
  console.log(`${err.name} - Actual: ${err.actual}, Expected: ${err.expected}`);
}

try {
  assert.equal(
    numberOfVowels('sweet potato🍠'),
    5,
    'It should be 3 vowels with sweet potato🍠'
  );
} catch (err) {
  console.log(err.message);
  console.log(`${err.name} - Actual: ${err.actual}, Expected: ${err.expected}`);
}
