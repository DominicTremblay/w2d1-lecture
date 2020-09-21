// const assert = require('assert').strict;
const numberOfVowels = require('../nb_vowels');
const {expect} = require('chai');

describe('NbOfVowels', () => {
  it("should be 3 with the string 'orange'", () => {
    expect(numberOfVowels('orange')).to.be.equal(3);
  });

  it("should be 5 with the string 'lighthouse labs'", () => {
    expect(numberOfVowels('lighthouse labs')).to.be.equal(5);
  });

  it("It should be 5 with the string 'aeiou'", () => {
    expect(numberOfVowels('aeiou')).to.be.equal(5);
  });
});
