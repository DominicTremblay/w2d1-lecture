
const repeatNumbers = function (data) {
  // Put your solution here

  let num = [];

  for (let i = 0; i < data.length; i++) {
    let space = '';

    for (let j = 0; j < data[i][1]; j++) {
      space += data[i][0];
    }

    num.push(space);
  }

  return num.join(', ');
};
