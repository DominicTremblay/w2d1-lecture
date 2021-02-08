// Given two arrays of strings, return the number of times each string
// of the second array appears in the first array.

// Example
// array1 = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔']
// array2 = ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// '🐵🐼🐨' appears twice in the first array (2)
// '🐴🐑🐮' appears only once (1)
// '🐘🐯🐫' does not appear in the first array (0)
// Therefore, matchStrings(sourceArr, matchArr) = [2, 1, 0]

const matchStrings = (sourceArr, matchArr) => {};

console.assert(
  matchStrings(['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'], ['🐟🐠', '🐙']) === [1, 2],
  "['🐟🐠','🐙'] should appear [1,2] times"
);

// matchStrings(['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'], ['🐭 🐹', '🐇🐢']),
//   [2, 3],
//   "['🐭 🐹', '🐇🐢'] should appear [2, 3] times";

// matchStrings(
//   ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'],
//   ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// ),
//   [2, 1, 0],
//   "['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫'] should appear [2,1,0] times";
