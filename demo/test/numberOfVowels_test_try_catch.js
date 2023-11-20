const assert = require('assert');

const {numberOfVowels} = require('../numberOfVowels'); // common JS module

try {
  assert.strictEqual(
    numberOfVowels('tomato🍅'),
    3,
    'it should be 3 with tomato🍅'
  );
  console.log('it should be 3 with tomatoe🍅', 'passed ✅');
} catch (err) {
  console.log('it should be 3 with tomatoe🍅', 'Failed ❌');
  console.log('Actual:', err.actual, 'Expected:', err.expected);
}

try {
  assert.strictEqual(
    numberOfVowels('sweet potato🍠'),
    5,
    'it should be 5 with sweet potato🍠'
  );
  console.log('it should be 5 with sweet potatoe🍠', 'passed ✅');
} catch (err) {
  console.log('it should be 5 with sweet potatoe🍠', 'Failed ❌');
  console.log('Actual:', err.actual, 'Expected:', err.expected);
}

try {
  assert.strictEqual(
    numberOfVowels('watermelon🍉'),
    4,
    'it should be 4 with watermelon🍉'
  );
  console.log('it should be 4 with watermelon🍉', 'passed ✅');
} catch (err) {
  console.log('it should be 4 with watermelon🍉', 'Failed ❌');
  console.log('Actual:', err.actual, 'Expected:', err.expected);
}
