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
// Function Declarations
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(1)
}
const ChinaPercentage = percentageOfWorld1(1441)
const EgyptPercentage = percentageOfWorld1(100)
const GermanyPercentage = percentageOfWorld1(83)
const FinlandPercentage = percentageOfWorld1(6)
const PortugalPercentage = percentageOfWorld1(10)
console.log(ChinaPercentage, EgyptPercentage, GermanyPercentage, FinlandPercentage, PortugalPercentage);

// Function Expressions
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(1)
}
const ChinaPercent = percentageOfWorld2(1441)
const EgyptPercent = percentageOfWorld2(100)
const GermanyPercent = percentageOfWorld2(83)
const FinlandPercent = percentageOfWorld2(6)
const PortugalPercent = percentageOfWorld2(10)
console.log(ChinaPercent, EgyptPercent, GermanyPercent, FinlandPercent, PortugalPercent);

/*****************************************************/

// Arrow Functions
const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(1)
const ChinaPercentageOfWorld = percentageOfWorld3(1441)
const EgyptPercentageOfWorld = percentageOfWorld3(100)
const GermanyPercentageOfWorld = percentageOfWorld3(83)
const FinlandPercentageOfWorld = percentageOfWorld3(6)
const PortugalPercentageOfWorld = percentageOfWorld3(10)
console.log(ChinaPercentageOfWorld, EgyptPercentageOfWorld, GermanyPercentageOfWorld, FinlandPercentageOfWorld, PortugalPercentageOfWorld)

/*****************************************************/

// Functions Calling Other Functions
const describePopulation = (country, population) => {
  const precentage = percentageOfWorld1(population)
  return `${country} has ${population} million people, which is about ${precentage} of the world`
}
const egyptPercentDescribed = describePopulation('Egypt', 100)
const germanyPercentDescribed = describePopulation('Finland', 6)
const chinaPercentDescribed = describePopulation('Germany', 83)
console.log(egyptPercentDescribed);
console.log(germanyPercentDescribed);
console.log(chinaPercentDescribed);

/*****************************************************/

// Coding Challenge#1

/*****************************************************/

// Test 1

/*****************************************************/

// Test 2

/*****************************************************/

// Introduction to Arrays

/*****************************************************/

// Exercise

/*****************************************************/

// Basic Array Operations (Methods)

/*****************************************************/

// Add elements

/*****************************************************/

// Remove elements

/*****************************************************/

// Coding Challenge#2

/*****************************************************/

// Introduction to Objects

/*****************************************************/

// Dot vs. Bracket Notation

/*****************************************************/

// Challenge

/*****************************************************/

// Object Methods

/*****************************************************/

// Challenge

/*****************************************************/

// Coding Challenge#3

/*****************************************************/

// Iteration: The for Loop

/*****************************************************/

// Looping Arrays, Breaking and Continuing

/*****************************************************/

// Continue and break

/*****************************************************/

// Looping Backwards and Loops in Loops

/*****************************************************/

// The while Loop

/*****************************************************/

// Coding Challenge#4

/*****************************************************/