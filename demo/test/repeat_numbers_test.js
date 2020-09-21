const assert = require('assert').strict;
const repeatNumbers = require('../repeat_numbers');

  assert.equal(
    repeatNumbers([[1, 10]]),
    '1111111111',
    'It should be "1111111111" with the array [[1,10]]'
  );

  assert.equal(
    repeatNumbers([
      [1, 2],
      [2, 3],
    ]),
    '11, 222',
    'It should be "11, 222" with the array [[1, 2], [2, 3]]'
  );

  assert.equal(
    repeatNumbers([
      [10, 4],
      [34, 6],
      [92, 2],
    ]),
    '10101010, 343434343434, 9292',
    'It should be "10101010, 343434343434, 9292" with the array [[10, 4], [34, 6], [92, 2]]'
  );
