const assert = require('assert').strict;
const numberOfVowels = require('../numberOfVowels');

console.log(numberOfVowels);

// tomato🍅
// describe block => describe the function that you're testing
// it block => individual assertions made on that function

describe('numberOfVowels()', () => {
  it('should have 3 vowels with tomato🍅', () => {
    const result = numberOfVowels('tomato🍅');

    assert.equal(result, 3);
  });
  it('should have 4 vowels with watermelon🍉', () => {
    const result = numberOfVowels('watermelon🍉');

    assert.equal(result, 4);
  });
  it('should have 5 vowels with sweet potato🍠', () => {
    const result = numberOfVowels('sweet potato🍠');

    assert.equal(result, 5);
  });
});



