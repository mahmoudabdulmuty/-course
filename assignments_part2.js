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
  percentageOfWorld1(populations[3]),
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
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.IsIsland = !this.neighbours.length;
  },
};
console.log(myCountry);
// ************************************************************ //
// Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million Egyptian-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
myCountry.population = myCountry.population + 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million Egyptian-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
myCountry['population'] = myCountry['population'] - 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million Egyptian-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
// challenge in the video
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: '1991',
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLiscence: false,
  getSummary() {
    console.log(
      `${this.firstName} is a ${2037 - this.birthYear}-year old ${
        jonas.job
      }, and he has ${this.hasDriverLiscence ? 'a' : 'no'} driver liscence`
    );
  },
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
// ************************************************************ //
// Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
// challenge in the video
jonas.getSummary();
// ************************************************************ //
// Coding Challenge #3
const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
const john = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
mark.calcBMI();
john.calcBMI();
if (john.BMI > mark.BMI) {
  console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
} else if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
}
// ************************************************************ //
// Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
// ************************************************************ //
// Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
