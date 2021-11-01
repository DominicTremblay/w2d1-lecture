

const numberOfVowels = (str) => {
  let number = 0;
  const vowels = ['a','e','i','o','u']

  // if(!str) {
  //   throw new Error('please, provide a string');
  // }

  for (let i=0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      number +=1;
    }
  }
  return number;
};

module.exports = numberOfVowels;



