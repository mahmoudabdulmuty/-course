'user strict';
// Values and Variables
const country = 'Egypt',
	continent = 'Africa';
let population = 100;
console.log(country, continent, population);

/*****************************************************/

// Data Types
const isIsland = false;
let language;
console.log(
	typeof isIsland,
	typeof population,
	typeof country,
	typeof language
);

/*****************************************************/

// let, const and var
// Basic Operators
language = 'Arabic';
const halfPopulation = population / 2;
population++;
const finlandPopulation = 6;
const doesYourCountryHaveMorePopulationThanFinland =
	population > finlandPopulation;
console.log(doesYourCountryHaveMorePopulationThanFinland, population);
let description =
	country +
	' is in ' +
	continent +
	', and its ' +
	population +
	' million people speak ' +
	language;
console.log(description);
//  Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

/*****************************************************/

