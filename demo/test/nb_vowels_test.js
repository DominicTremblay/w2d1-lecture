const numberOfVowels = require('../nb_vowels');
const assert = require('assert').strict;

describe('nbOfVowels', function () {

  it('It should be 3 with the string orange', function () {
    assert.equal(numberOfVowels("orange"), 3);
  });

  it('It should be 3 with the string "lighthouse labs"', function () {
    assert.equal(numberOfVowels("lighthouse labs"), 5);
  });

  it('It should be 5 with the string aeiou', function () {

    assert.equal(numberOfVowels("aeiou"), 5);
  });

  it("Arrays should be equal", function () {
    assert.deepEqual([1, 2, 3], [1, 2, 3])
  });

});







