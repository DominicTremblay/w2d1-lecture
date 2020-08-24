const {expect} = require('chai');

const numberOfVowels = require('../nbvowels');

describe('nbOfVowels', () => {
  it('should be 0 when the string is "bcd"', () => {
    const result = numberOfVowels('bcd');

    expect(result).to.equal(0);
  });

  it('should be 3 when the string is "orange"', () => {
    const result = numberOfVowels('orange');

    expect(result).to.equal(3);

  });

  it('should be 5 when the string is "lighthouse labs"', () => {
    const result = numberOfVowels('lighthouse labs');

    expect(result).to.equal(5);


  });

  it('should be 0 when it is empty string', () => {
    const result = numberOfVowels('');

    expect(result).to.equal(0);

    
  });
});
