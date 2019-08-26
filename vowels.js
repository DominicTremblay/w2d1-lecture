const getNbVowels = (str = '') => {
  // count the nb of vowels in a str
  let countVowels = 0;

  // if (!str) {
  //   return 0;
  // }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of str) {
    // if character is the string is in the array => vowel
    if (vowels.includes(letter)) {
      // increase the countVowels by 1
      countVowels += 1;
    }
  }

  return countVowels;
};

module.exports = getNbVowels;
