const assert = require('assert').strict; // .strict => equal, means  ===
// import matchString
const matchStrings = require('../match_strings');


try {
  assert.deepEqual(
    matchStrings(['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'], ['🐟🐠', '🐙']),
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
    matchStrings(['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'], ['🐭 🐹', '🐇🐢']),
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
    matchStrings(
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