// import expect from chai

const { expect} = require('chai');

// import matchString
const matchStrings = require('../match_strings');

// describe block => unit (function) that you're testing

// it block => tests cases

describe('matchStrings', () => {
  it("['🐟🐠','🐙'] should appear [1,2] times", () => {
    const result = matchStrings(
      ['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'],
      ['🐟🐠', '🐙']
    );

    expect(result).to.deep.equal([1, 2]);
  });
});

// try {
//   assert.deepEqual(
//     matchStrings(['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'], ['🐭 🐹', '🐇🐢']),
//     [2, 3],
//     "['🐭 🐹', '🐇🐢'] should appear [2, 3] times"
//   );
// } catch (err) {
//   console.log(
//     `${err.name} - actual: [${err.actual}] expected: [${err.expected}]`
//   );
//   console.log(`${err.message}`);
// }

// // throwing an error stops the execution => stops here
// try {
//   assert.deepEqual(
//     matchStrings(
//       ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'],
//       ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
//     ),
//     [2, 1, 0],
//     "['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫'] should appear [2,1,0] times"
//   );
// } catch (err) {
//   console.log(
//     `${err.name} - actual: [${err.actual}] expected: [${err.expected}]`
//   );
//   console.log(`${err.message}`);
// }
