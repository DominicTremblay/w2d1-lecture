
const numberOfVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }

  return count;
};

module.exports = numberOfVowels;