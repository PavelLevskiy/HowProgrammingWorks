'use strict';

const rangeOdd = (start, end) => {
  const resultArray = [];
  for (let i = start; i <= end; i++) {
    i % 2 === 0 ? 0 : resultArray.push(i);
  }
  return resultArray;
};

module.exports = { rangeOdd };
