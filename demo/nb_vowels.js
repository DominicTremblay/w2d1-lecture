

const numberOfVowels = function(str) {

  const vowels = ['a','e','i','o','u','y'];

  let total = 0;
  for (let letter of str) {
    // if (vowels.indexOf(letter) !== -1 ) {
    //   total += 1;
    // }

    if (vowels.includes(letter)) {
      total += 1;
    }
  }

  return total;

};

module.exports = {
  numberOfVowels
}



