const vals = [1, 2, 3, 4, 5];

const total = vals.reduce(
  (accumulator, currentValue) => {
    console.log({accumulator}, {currentValue})
    accumulator += currentValue;
    return accumulator;
  },
  0
);
console.log(total);
