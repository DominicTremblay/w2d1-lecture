const { numberOfVowels } = require('../numberOfVowels'); // common JS module
const assert = require('assert');

// describe() => the function that you are testing. It includes all the individual tests for that function.

// it() => one individual test

describe('numberOfVowels()', () => {
  it('it should be 3 with tomatoe🍅', () => {
    // AAA pattern

    // Arrange => any values that you need to setup for your test

    // Act => executing your function
    const result = numberOfVowels('tomato🍅');

    // Assert => assert that the actual value is the expected value
    assert.strictEqual(
      numberOfVowels('tomato🍅'),
      3,
      'it should be 3 with tomato🍅'
    );
  });

  it('it should be 5 with sweet potato🍠', () => {
    const result = numberOfVowels('sweet potato🍠');

    assert.strictEqual(
      numberOfVowels('sweet potato🍠'),
      5,
      'it should be 5 with sweet potato🍠'
    );
  });

  it('it should be 4 with watermelon🍉', () => {
    const result = numberOfVowels('watermelon🍉');
  });
  assert.strictEqual(
    numberOfVowels('watermelon🍉'),
    4,
    'it should be 4 with watermelon🍉'
  );
});
