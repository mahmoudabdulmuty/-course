'use strict';
// Functions
const describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
};
describeCountry('Egypt', 100, 'Cairo');
describeCountry('Finland', 6, 'Helsinki');
describeCountry('Germany', 83, 'Berlin');
describeCountry('Portugal', 10, 'Lisbon');

/*****************************************************/

// Function Declarations vs. Expressions
// Function Declarations
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(1);
}
const ChinaPercentage = percentageOfWorld1(1441);
const EgyptPercentage = percentageOfWorld1(100);
const GermanyPercentage = percentageOfWorld1(83);
const FinlandPercentage = percentageOfWorld1(6);
const PortugalPercentage = percentageOfWorld1(10);
console.log(
  ChinaPercentage,
  EgyptPercentage,
  GermanyPercentage,
  FinlandPercentage,
  PortugalPercentage
);

// Function Expressions
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(1);
};
const ChinaPercent = percentageOfWorld2(1441);
const EgyptPercent = percentageOfWorld2(100);
const GermanyPercent = percentageOfWorld2(83);
const FinlandPercent = percentageOfWorld2(6);
const PortugalPercent = percentageOfWorld2(10);
console.log(
  ChinaPercent,
  EgyptPercent,
  GermanyPercent,
  FinlandPercent,
  PortugalPercent
);

/*****************************************************/

// Arrow Functions
const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(1);
const ChinaPercentageOfWorld = percentageOfWorld3(1441);
const EgyptPercentageOfWorld = percentageOfWorld3(100);
const GermanyPercentageOfWorld = percentageOfWorld3(83);
const FinlandPercentageOfWorld = percentageOfWorld3(6);
const PortugalPercentageOfWorld = percentageOfWorld3(10);
console.log(
  ChinaPercentageOfWorld,
  EgyptPercentageOfWorld,
  GermanyPercentageOfWorld,
  FinlandPercentageOfWorld,
  PortugalPercentageOfWorld
);

/*****************************************************/

// Functions Calling Other Functions
const describePopulation = (country, population) => {
  const precentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${precentage} of the world`;
};
const egyptPercentDescribed = describePopulation('Egypt', 100);
const germanyPercentDescribed = describePopulation('Finland', 6);
const chinaPercentDescribed = describePopulation('Germany', 83);
console.log(egyptPercentDescribed);
console.log(germanyPercentDescribed);
console.log(chinaPercentDescribed);

/*****************************************************/

// Coding Challenge#1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAverage = calcAverage(44, 23, 71),
  koalasAverage = calcAverage(65, 54, 49); //Test Data#1
const checkWinner = (teamOneAverage, teamTwoAverage, teamOne, teamTwo) => {
  if (teamOneAverage > teamTwoAverage * 2) {
    console.log(`${teamOne} wins (${teamOneAverage} vs. ${teamTwoAverage})`);
  } else if (teamTwoAverage > teamOneAverage * 2) {
    console.log(`${teamTwo} wins (${teamTwoAverage} vs. ${teamOneAverage})`);
  } else {
    console.log(`No team wins`);
  }
};
checkWinner(dolphinsAverage, koalasAverage, 'Dolphins', 'Koalas');
(dolphinsAverage = calcAverage(85, 54, 41)),
  (koalasAverage = calcAverage(23, 34, 27)); //Test Data#2
checkWinner(dolphinsAverage, koalasAverage, 'Dolphins ', 'Koalas');

/*****************************************************/

// Introduction to Arrays
const populations = [1441, 100, 6, 83];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(1441),
  percentageOfWorld1(6),
  percentageOfWorld1(100),
  percentageOfWorld1(83),
];
console.log(percentages);
/*****************************************************/

// Basic Array Operations (Methods)
const neighbours = ['Lybia', 'Sudan', 'Palestine', 'Saudi Arabia'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany'))
  console.log(`Probably not a central European country :D`);
neighbours[neighbours.indexOf('Palestine')] = 'Algeria';
console.log(neighbours);

/*****************************************************/

// Coding Challenge#2
const clacTip = bill => (bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill);
const bills = [125, 555, 44]; //Test Data
const tips = [clacTip(bills[0]), clacTip(bills[1]), clacTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);

/*****************************************************/

// Introduction to Objects
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 100,
  neighbours: ['Lybia', 'Sudan', 'Palestine', 'Saudi Arabia'],
  describe() {
    this.summary = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital}`;
    return this.summary;
  },
  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry);

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`);

// Object Methods
myCountry.describe();
myCountry.checkIsland();

/*****************************************************/

// Dot vs. Bracket Notation Challenge
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  job: 'teacher',
  birthYear: 1991,
  hasDriverLiscence: true,
  friends: ['Michael', 'Peter', 'Steven'],
  calcAge() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLiscence ? 'a' : 'no'} driver's liscence`;
  },
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} firends, and his best friend is called ${jonas.friends[0]}`
);
// Object Methods Challenge
console.log(jonas.calcAge());
console.log(jonas.getSummary());

/*****************************************************/

// Coding Challenge#3
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  fullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  },
  calcBMI() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  fullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  },
  calcBMI() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const result =
  john.calcBMI() > mark.calcBMI()
    ? `${john.fullName}'s BMI (${john
        .calcBMI()
        .toFixed(1)}) is higher than ${mark.fullName()}'s BMI (${mark
        .calcBMI()
        .toFixed(1)})`
    : `${mark.fullName()}'s BMI (${mark
        .calcBMI()
        .toFixed(1)}) is higher than ${john.fullName()}'s BMI (${john
        .calcBMI()
        .toFixed(1)})`;
console.log(result);
/*****************************************************/

// Iteration: The for Loop
for (let index = 1; index <= 50; index++) {
  console.log(`Voter number ${index} is currently voting`);
}

/*****************************************************/

// Looping Arrays, Breaking and Continuing
const populations9 = [1441, 100, 6, 83];
const percentages9 = [];
function percentageOfWorld9(population) {
  return ((population / 7900) * 100).toFixed(1);
}
for (let i = 0; i < populations9.length; i++) {
  percentages9.push(percentageOfWorld9(populations9[i]));
}
console.log(percentages9);

/*****************************************************/

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  let Neighbours = listOfNeighbours[i];
  for (let j = 0; j < Neighbours.length; j++) {
    console.log(`Neighbour: ${Neighbours[j]}`);
  }
}

/*****************************************************/

// The while Loop
const populations8 = [1441, 100, 6, 83];
const percentages8 = [];
function percentageOfWorld8(population) {
  return ((population / 7900) * 100).toFixed(1);
}
let i = 0;
while (i < populations8.length) {
  percentages8.push(percentageOfWorld8(populations8[i]));
  i++;
}
console.log(percentages8);

/*****************************************************/

// Coding Challenge#4
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //Test Data
const tips2 = [];
const totals2 = [];
for (let i = 0; i < bills2.length; i++) {
  const bill = bills2[i];
  const tip = clacTip(bill);
  const total = bill + tip;
  tips2.push(tip);
  totals2.push(total);
}
console.log(tips2);
console.log(totals2);
// Bonus
const calcAnyAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAnyAverage(totals2));
console.log(calcAnyAverage(tips2));

/*****************************************************/
