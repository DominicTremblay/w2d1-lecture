

const numberOfVowels = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  str.split('').forEach((char) => {
    if (vowels.includes(char)) {
      count += 1;
    }
  });

  return count;
};

const lengthOfString = function (str) {
  return str.length;
};

module.exports = {numberOfVowels};
