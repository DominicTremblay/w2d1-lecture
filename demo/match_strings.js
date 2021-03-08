

// Given two arrays of strings, return the number of times each string
// of the second array appears in the first array.

// Example
// array1 = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔']
// array2 = ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
// '🐵🐼🐨' appears twice in the first array (2)
// '🐴🐑🐮' appears only once (1)
// '🐘🐯🐫' does not appear in the first array (0)
// Therefore, matchStrings(sourceArr, matchArr) = [2, 1, 0]

const matchStrings = (sourceArr, matchArr) => {
  // 2 nested loops with a counter
  // includes => true, false
  // recursive?
  // filter ?

  // create a placeholder for our values
  const nbTimes = [];
  // loop through the matchArr
  for (let matchStr of matchArr) {
    // filter with each item of the source arr => length
    const result = sourceArr.filter((eachStr) => eachStr === matchStr);
    nbTimes.push(result.length);
  }

  // return placeholder
  return nbTimes;
};

const someFct = () => console.log('hello');

module.exports = matchStrings;

