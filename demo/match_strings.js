
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
  
  // placeholder array
  const nbTimes = [];

  // loop through the matchArr
  for (let matchStr of matchArr) {
    // set counter to 0
    let counter = 0;
    // loop throught the souceArr
    for (let sourceStr of sourceArr) {
      // if the str of the match is === to str of the source
      // increase the counter
      if (matchStr === sourceStr) {
        counter += 1;
      }
    }
    // push counter value
    nbTimes.push(counter);
  }

  // return Array;
  return nbTimes;
};

module.exports = matchStrings;

