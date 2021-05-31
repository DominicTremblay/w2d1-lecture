// Implement the code in the matchAnimals function to make all the tests pass

// Given two arrays of strings, return the number of times each string
// of the second array appears in the first array.

// Example
// array1 = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔']
// array2 = ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// '🐵🐼🐨' appears twice in the first array (2)
// '🐴🐑🐮' appears only once (1)
// '🐘🐯🐫' does not appear in the first array (0)
// Therefore, matchAnimals(sourceArr, matchArr) = [2, 1, 0]

// import node assert library
const assert = require('assert').strict; // .strict => equal, means  ===

const matchAnimals = (sourceArr, matchArr) => {
  //   IMPLEMENT YOUR CODE HERE


};

// Assertions with Try Catch blocks
try {
  assert.deepEqual(
    matchAnimals(['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'], ['🐟🐠', '🐙']),
    [1, 2],
    "['🐟🐠','🐙'] should appear [1,2] times"
  );
} catch (err) {
  console.log(
    `${err.name} - actual: [${err.actual}] expected: [${err.expected}]`
  );
  console.log(`${err.message}`);
}

try {
  assert.deepEqual(
    matchAnimals(['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'], ['🐭 🐹', '🐇🐢']),
    [2, 3],
    "['🐭 🐹', '🐇🐢'] should appear [2, 3] times"
  );
} catch (err) {
  console.log(
    `${err.name} - actual: [${err.actual}] expected: [${err.expected}]`
  );
  console.log(`${err.message}`);
}

// throwing an error stops the execution => stops here
try {
  assert.deepEqual(
    matchAnimals(
      ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'],
      ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
    ),
    [2, 1, 0],
    "['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫'] should appear [2,1,0] times"
  );
} catch (err) {
  console.log(
    `${err.name} - actual: [${err.actual}] expected: [${err.expected}]`
  );
  console.log(`${err.message}`);
}
