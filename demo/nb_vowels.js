
const numberOfVowels1 = function (str) {
  // Put your solution here

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  // split the str => make an array

  // provide a condition the filter => true means it's in, false it's out!
  // filter to check which letter is a vowel
  const vowelsList = str.split('').filter((letter) => vowels.includes(letter));

  // return lenght of the new array
  return vowelsList.length;

};

const numberOfVowels = function (str) {
  // Put your solution here

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  const vowelsList = [];

  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsList.push(letter);
    }

  }
  // return lenght of the new array
  return vowelsList.length;

};

module.exports = numberOfVowels;
