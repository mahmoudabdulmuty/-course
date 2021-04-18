'use strict';
// ************************************************************ //
// Functions
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
describeCountry('Egypt', 100, 'Cairo');
describeCountry('Finland', 6, 'Helsinki');
describeCountry('Germany', 83, 'Berlin');
// ************************************************************ //
// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
percentageOfWorld1(1141);

const percentageOfWorld2 = function (country, population) {
  const percent = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percent}% of the world population`
  );
};

percentageOfWorld2('China', 1441);
// ************************************************************ //
// Arrow Functions
const percentageOfWorld3 = (country, population) => {
  const percent = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percent}% of the world population`
  );
};
percentageOfWorld3('China', 1441);
// ************************************************************ //
// Functions Calling Other Functions
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};
console.log(describePopulation('Egypt', 100));
// ************************************************************ //
// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
const checkWinner = (A, B) => {
  if (A >= 2 * B) {
    console.log(`Dolphins wins (${A} vs. ${B})`);
  } else if (B >= 2 * A) {
    console.log(`Koalas wins (${B} vs. ${A})`);
  } else {
    console.log(`no team wins`);
  }
};
checkWinner(avgDolphins, avgKoalas);
// ************************************************************ //
// Introduction to Arrays
const populations = [100, 80, 60, 37];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
];
console.log(percentages);
// ************************************************************ //
// Basic Array Operations (Methods)
const neighbours = ['Sudan', 'Libya', 'Palestine'];
neighbours.push('Utopia');
neighbours.pop();
if (neighbours.includes('Germany')) {
  console.log(`Probably not a central European country 😂`);
}
neighbours[neighbours.indexOf('Libya')] = 'Sweeden';
console.log(neighbours);
// ************************************************************ //
// Coding Challenge #2
const calcTip = bill => (bill >= 50 && bill <= 300 ? 0.2 * bill : 0.15 * bill);
console.log(calcTip(400));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
// ************************************************************ //
// Introduction to Objects
// Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 100,
  neighbours: ['Sudan', 'Libya', 'Palestine'],
};
console.log(myCountry);
// ************************************************************ //
