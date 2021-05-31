const {expect} = require('chai');
const numberOfVowels = require('../numberOfVowels');

// 1- describe block => what are we testing?

// 2- it block => actual test => test case

describe('numberOfVowels', () => {
  it('should be 3 vowels with tomato', () => {
    const result = numberOfVowels('tomato');

    expect(result).to.equal(3);
  });

  it('it should be 4 vowels with water melon', () => {
    const result = numberOfVowels('water melon');

    expect(result).to.equal(4);
  });

  it('should be 5 vowels with sweet potato', () => {
    const result = numberOfVowels('sweet potato');

    expect(result).to.equal(5);
  });
});
