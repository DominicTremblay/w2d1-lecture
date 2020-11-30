const { expect } = require('chai');
const numberOfVowels = require('../nb_vowels');

// describe the unit (function) we want to test
describe('numberOfVowels', () => {
  // test case
  it('Should contain 3 vowels', () => {
    const result = numberOfVowels('orange');
    expect(result).to.eql(3);
  });
  
  it('should have 5 vowels', () => {
    const result = numberOfVowels('lighthouse labs');
    expect(result).to.eql(5);
  });
  
  it('should have 5 vowels', () => {
    const result = numberOfVowels('aeiou');
    expect(result).to.eql(5);
  });
});
