'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const resultArray = [];
  for (let i = 0; i <= 9; i++) {
    resultArray.push(average(square(i), cube(i)));
  }
  return resultArray;
};

module.exports = { square, cube, average, calculate };
