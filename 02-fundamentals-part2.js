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

/*****************************************************/

// Functions Calling Other Functions

/*****************************************************/

// Reviewing Functions

/*****************************************************/

// Coding Challenge #1

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

// Coding Challenge #2

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

// Coding Challenge #3

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

// Coding Challenge #4

/*****************************************************/