
const numberOfVowels = function (data) {
  // if (!data) {
  //   return 0;
  // }

  // Put your solution here
  let nbVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  // loop through each char
  for (let letter of data) {
    if (vowels.includes(letter)) {
      nbVowels += 1;
    }
  }

  return nbVowels;
};

module.exports = numberOfVowels;

// try {
//   assert.equal(
//     numberOfVowels(),
//     0,
//     'Does not contain the right number of vowels'
//   );
// } catch (err) {
//   console.log(
//     `${err.message}, actual: ${err.actual} expected: ${err.expected}`
//   );
// }
