const numberOfVowels = (str) => {
  let count = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

// write the assertion

console.assert(
  numberOfVowels('tomato') === 3,
  'it should have 3 vowels with tomato'
);
console.assert(
  numberOfVowels('watermelon') === 4,
  'it should have 4 vowels with watermelon'
);
console.assert(
  numberOfVowels('sweet potato') === 5,
  'it should have 5 vowels with sweet potato'
);
