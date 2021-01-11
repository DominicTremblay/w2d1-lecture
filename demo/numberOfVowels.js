
const numberOfVowels = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let letter of str) {

    // ternary
    // condition ? true case : false case
    // vowels.includes(letter) ? count++ : null;
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

// 🍅🍉🍠

module.exports = numberOfVowels;
