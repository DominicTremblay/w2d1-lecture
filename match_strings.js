// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔']
// array2 = ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// '🐵🐼🐨' appears twice in the first array (2)
// '🐴🐑🐮' appears only once (1)
// '🐘🐯🐫' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

const matchStrings = (sourceArr, matchArr) => {

  const nbTimes = [];
  const sourceStr = sourceArr.join('');
  
  for (let str of matchArr) {
    nbTimes.push(sourceArr.filter(item => item === str).length);
  }
  return nbTimes;
}

const result = matchStrings(['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'], ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']);

console.log(result);