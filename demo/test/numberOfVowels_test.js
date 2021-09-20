const {expect} = require('chai');
const numberOfVowels = require('../numberOfVowels');

// tomato🍅

describe('numberOfVowels', () => {
  // test cases here

  it('should be 3 with the word tomato🍅', () => {
    const result = numberOfVowels('tomato🍅');

    expect(result).to.equal(3);
  });

  it('should be 4 with the word watermelon🍉', () => {
    const result = numberOfVowels('watermelon🍉');

    expect(result).to.equal(4);
  });

  it('should be 5 with the word sweet potato🍠', () => {
    const result = numberOfVowels('sweet potato🍠');
    expect(result).to.equal(5);
  });
});
