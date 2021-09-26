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

// Coding Challenge#1
let markHeight = 1.69,
	markMass = 78,
	JohnHeight = 1.95,
	JohnMass = 92; //TEST DATA#1

(markHeight = 1.88), (markMass = 95), (JohnHeight = 1.76), (JohnMass = 85); //TEST DATA#2

const markBMI = markMass / markHeight ** 2;
const JohnBMI = JohnMass / JohnHeight ** 2;
const isMarkHasHeigherBMI = markBMI > JohnBMI;
console.log(markBMI, JohnBMI, isMarkHasHeigherBMI);
if (markBMI > JohnBMI)
	console.log(
		`Mark's BMI (${markBMI.toFixed(
			1
		)}) is higher than John's BMI (${JohnBMI.toFixed(1)})`
	);
else
	console.log(
		`John's BMI (${JohnBMI.toFixed(
			1
		)}) is higher than Mark's BMI (${markBMI.toFixed(1)})`
	);

/*****************************************************/

// Taking Decisions: if / else Statements
const average = 33;
if (population > average)
	console.log(`${country}'s population is above average`);
else
	console.log(
		`${country}'s population is ${average - population} million below average`
	);

/*****************************************************/

// Type Conversion and Coercion
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

/*****************************************************/
