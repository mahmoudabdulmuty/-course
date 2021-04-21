'user strict';
// Values and Variables
const country = 'Egypt';
const continent = 'Africa';
let population = 100;
console.log(country, continent, population);

/*****************************************************/

// Data Types
const isIsland = false;
let language = 'Arabic';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*****************************************************/

// let, const and var
// Basic Operators
let halfedPopulation = population / 2;
population++;
console.log(population);
const FinlandPopulation = 6;
console.log(population > FinlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);
//  Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*****************************************************/

// Coding Challenge #1
const markMass = 95,
  johnMass = 85;
const markHeight = 1.88,
  johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHeigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHeigherBMI);

// Coding Challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})!`);
}

/*****************************************************/

// Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is 22 million below average`);
}

/*****************************************************/

// Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No border!`);
// }

/*****************************************************/

// Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`you should live in ${country}`);
} else {
  console.log(`${country} doesn't meet your criteria`);
}

/*****************************************************/

// Coding Challenge #3
const dolphinAverageScore = (96 + 108 + 89) / 3;
const koalaAverageScore = (88 + 91 + 110) / 3;

if (dolphinAverageScore > koalaAverageScore) {
  console.log(`dolphin is the winners 🏆`);
} else if (dolphinAverageScore < koalaAverageScore) {
  console.log(`koala is the winners 🏆`);
} else {
  console.log(`DRAW!!`);
}

/*****************************************************/

// writing if-else instead of switch cases challenge
let day = 'tuesday';

if (day === 'monday') {
  console.log('plan course structure');
} else if (day === 'tuesday') {
  console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('write code examples');
} else if (day === 'friday') {
  console.log('record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('not a vaild day');
}

/*****************************************************/

// The switch Statement
switch (language) {
  case 'Chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Not a language 😂');
}

/*****************************************************/

// The Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population >= 33 ? 'above' : 'below'} average`
);

/*****************************************************/

// Coding Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

/*****************************************************/
