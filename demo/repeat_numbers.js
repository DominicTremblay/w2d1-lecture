
const repeatNumbers = function (data) {
  
  const outputArr = [];

  for (let repeatArr of data) {
    outputArr.push(String(repeatArr[0]).repeat(repeatArr[1]));
  }

  return outputArr.join(', ');


};

module.exports = repeatNumbers;
