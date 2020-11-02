
const numberOfVowels = function (str) {
  // Put your solution here

  const vowels = ['a','e','i','o','u'];

  return [...str].filter(letter => vowels.includes(letter)).length;
};

module.exports = numberOfVowels;




