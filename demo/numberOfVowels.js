
const numberOfVowels = (str) => {
  let count = 0;
  let vowels = 'aeoiu';

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }
  return count;
};

const evenNb = () => {};

module.exports = numberOfVowels;


// tomato🍅
// watermelon🍉
//sweet potato🍠
