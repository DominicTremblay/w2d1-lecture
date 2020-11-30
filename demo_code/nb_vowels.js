const numberOfVowels = function (str) {
  // Put your solution here

  // we need an accumulator
  let nbVowels = 0;

  // create an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  // loop through the data
  for (let letter of str) {
    // if it's a vowel, increase the accumulator
    // we can use Array.indexOf() or includes
    if (vowels.includes(letter)) {
      nbVowels += 1;
    }
  }

  // when the loop is over return accumulator
  return nbVowels;
};

module.exports = numberOfVowels;