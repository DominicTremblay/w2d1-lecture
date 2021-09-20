const assert = require('assert').strict;

const numberOfVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }

  return count;
};

// tomato🍅

try {
  assert.equal(
    numberOfVowels('tomato🍅'),
    3,
    'it should be 3 with the word tomato🍅'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}

// assert.deepEqual([1,2,3], [1,2,3], "The arrays should be equal");

// watermelon🍉
try {
  assert.equal(
    numberOfVowels('watermelon🍉'),
    4,
    'it should be 4 with the word watermelon🍉'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}
//sweet potato🍠
try {
  assert.equal(
    numberOfVowels('sweet potato🍠'),
    5,
    'it should be 5 with the word sweet potato🍠'
  );
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected: ${error.expected}`);
}
