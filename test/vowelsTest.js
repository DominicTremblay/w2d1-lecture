// assert is built into node
// const assert = require('assert');
const { expect } = require('chai');

const getNbVowels = require('../vowels');

describe('getNbVowels', () => {
  it('should be 0 with empty str', () => {
    const result = getNbVowels('');
    expect(result).to.equal(0);
  });

  it('should be 0 with no parameter', () => {
    const result = getNbVowels();
    expect(result).to.equal(0);
  });

  it("should be 0 with 'bc'", () => {
    const result = getNbVowels('bc');
    expect(result).to.equal(0);
  });

  it("should be 3 with the word 'orange'", () => {
    const result = getNbVowels('orange');
    expect(result).to.equal(3);
  });

  it("should be 5 with the word 'lighthouse labs'", () => {
    const result = getNbVowels('lighthouse labs');
    expect(result).to.equal(5);
  });
});
