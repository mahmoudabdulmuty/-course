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
