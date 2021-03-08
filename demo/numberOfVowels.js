const numberOfVowels = function (str) {
  // create a counter
  let count = 0;

  // create list of vowels
  const vowels = 'aeiou';

  // loop through each letter of the str
  for (let letter of str) {
    // regular expression (regex) => str.search('aeiou'), match()
    //  'aeiou'.contains(letter)
    // includes => array method
    // multiple or statements ||

    // is it a vowel?
    if (vowels.includes(letter)) {
      // if yes => increase the counter
      count += 1;
    }
  }

  return count;
  // return the counter
};

// tomato🍅
// watermelon🍉
//sweet potato🍠

// console.assert(condition, 'error message')

console.assert(
  numberOfVowels('tomato🍅') === 3,
  'it should have 3 vowels with the word tomato🍅'
);
console.assert(
  numberOfVowels('watermelon🍉') === 4,
  'it should have 4 vowels with the word watermelon🍉'
);
console.assert(
  numberOfVowels('sweet potato🍠') === 5,
  'it should have 5 vowels with the word sweet potato🍠'
);
