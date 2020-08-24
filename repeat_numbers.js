const assert = require('assert').strict;

const repeatNumbers = function (data) {
  // Put your solution here

  let num = [];

  for (let i = 0; i < data.length; i++) {
    let space = '';

    for (let j = 0; j < data[i][1]; j++) {
      space += data[i][0];
    }

    num.push(space);
  }

  return num.join(', ');
};

try {
  assert.equal(
    repeatNumbers([[1, 10]]),
    '1111111111',
    "it should be '1111111111' with the input array [[1, 10]]"
  );
} catch (err) {
  console.log(
    `${err.message}, actual: ${err.actual} expected: ${err.expected}`
  );
}

try {
  assert.equal(
    repeatNumbers([
      [1, 2],
      [2, 3],
    ]),
    '11, 222',
    "it should be '11, 222' with the input array '[[1, 2],[2, 3]]'"
  );
} catch (err) {
  console.log(
    `${err.message}, actual: ${err.actual} expected: ${err.expected}`
  );
}

try {
  assert.equal(
    repeatNumbers([
      [10, 4],
      [34, 6],
      [92, 2],
    ]),
    '10101010, 343434343434, 9292',
    "it should be '10101010, 343434343434, 9292' with the input array '[[10, 4],[34, 6],[92, 2]]'"
  );
} catch (err) {
  console.log(
    `${err.message}, actual: ${err.actual} expected: ${err.expected}`
  );
}
