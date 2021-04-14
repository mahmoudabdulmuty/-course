const country = "Egypt";
const continent = "Africa";
let population = 100;
console.log(country, continent, population);

/*****************************************************/

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*****************************************************/

language = "Arabic";

/*****************************************************/

let halfedPopulation = population / 2;
population++;
console.log(population);
const FinlandPopulation = 6;
console.log(population > FinlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*****************************************************/

const markMass = 95,
  johnMass = 85;
const markHeight = 1.88,
  johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHeigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHeigherBMI);

/*****************************************************/
