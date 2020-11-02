// const assert = require('assert').strict;
const {expect} = require('chai');
const { numberOfVowels } = require('../nb_vowels');

describe('numberOfVowels', function () {

  it('should be 3 with the word orange', function () {

    const result = numberOfVowels("orange");

    expect(result).to.equal(3);

  });

  it('it should be 5 with the word lighthouse labs', function () {

    const result = numberOfVowels("lighthouse labs");
    expect(result).to.equal(5);

  })

  it('it should be 5 with the word aeiou', function () {
    const result = numberOfVowels("aeiou");
    expect(result).to.equal(5);
  })


});

describe('compareArrays', function () {

  it("The arrays [1,2,3] should be equal to another array [1,2,3]", function () {

    expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
  })
})
