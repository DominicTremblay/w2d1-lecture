

// Given two arrays of strings, return the number of times each string
// of the second array appears in the first array.

// Example
// array1 = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔']
// array2 = ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// '🐵🐼🐨' appears twice in the first array (2)
// '🐴🐑🐮' appears only once (1)
// '🐘🐯🐫' does not appear in the first array (0)
// Therefore, matchStrings(sourceArr, matchArr) = [2, 1, 0]

const matchAnimals = (sourceArr, matchArr) => {
  const count = [];

  for (let match of matchArr) {
    count.push(sourceArr.filter((eachEl) => eachEl === match).length);
  }

  return count;
};

module.exports = matchAnimals;
