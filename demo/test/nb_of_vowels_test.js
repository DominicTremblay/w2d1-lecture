const assert = require('assert').strict; // core node modules
const numberOfVowels = require('../numberOfVowels');

// const {numberOfVowels} = require('../numberOfVowels');
// const numberOfVowels = require('../numberOfVowels').numberOfVowels;

describe('numberOfVowels', function () {
  // create your test cases inhere

  it('It should have 3 vowels with Tomato', function () {
    // creating the test case

    const result = numberOfVowels('tomato🍅');

    assert.equal(result, 3);
  });

  it('It should have 4 vowels with watermelon', function () {
    const result = numberOfVowels('watermelon🍉');

    assert.equal(result, 4);
  });

  it('It should be 5 vowels with sweet potato', function () {
    const result = numberOfVowels('sweet potato🍠');
    assert.equal(result, 5);
  });
});
