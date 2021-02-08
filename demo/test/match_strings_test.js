const assert = require('assert').strict;
const matchStrings = require('../match_strings');

// describe/context => grouping the test cases that related
// it block => test cases

describe('matchStrings', () => {
  it("should appear [1,2] times with ['🐟🐠','🐙']", () => {
    const result = matchStrings(
      ['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'],
      ['🐟🐠', '🐙']
    );

    assert.deepEqual(result, [1, 2]);
  });


  
});

// try {
//   assert.deepEqual(
//     matchStrings(['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'], ['🐭 🐹', '🐇🐢']),
//     [2, 3],
//     "['🐭 🐹', '🐇🐢'] should appear [2, 3] times"
//   );
// } catch (error) {
//   console.log(
//     `${error.name} - expected: [${error.expected}] actual: [${error.actual}]`
//   );
//   console.log(error.message);
// }

// try {
//   assert.deepEqual(
//     matchStrings(
//       ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'],
//       ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
//     ),
//     [2, 1, 0],
//     "['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫'] should appear [2,1,0] times"
//   );
// } catch (error) {
//   console.log(
//     `${error.name} - expected: [${error.expected}] actual: [${error.actual}]`
//   );
//   console.log(error.message);
// }
