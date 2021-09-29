'use strict';
// Functions
const describeCountry = function (country, population, capitalCity) {
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}
describeCountry('Egypt', 100, 'Cairo')
describeCountry('Finland', 6, 'Helsinki')
describeCountry('Germany', 83, 'Berlin')
describeCountry('Portugal', 10, 'Lisbon')

/*****************************************************/

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(1)
}
const ChinaPercentage = percentageOfWorld1(1441)
const EgyptPercentage = percentageOfWorld1(100)
const GermanyPercentage = percentageOfWorld1(83)
const FinlandPercentage = percentageOfWorld1(6)
const PortugalPercentage = percentageOfWorld1(10)
console.log(ChinaPercentage, EgyptPercentage, GermanyPercentage, FinlandPercentage, PortugalPercentage);

/*****************************************************/

