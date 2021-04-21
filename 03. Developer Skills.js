'use strict';
// Coding Challenge #1
const printForecast = arr => {
  let status = ``;
  for (let i = 0; i < arr.length; i++) {
    status += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return `${status} ...`;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
