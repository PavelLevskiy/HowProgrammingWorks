'use strict';

const range = (start, end) => {
  const resultArray = [];
  for (let i = start; i <= end; i++) {
    resultArray.push(i);
  }
  return resultArray;
};

module.exports = { range };
