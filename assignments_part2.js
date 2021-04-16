"use strict";
// ************************************************************ //
// Functions
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
describeCountry("Egypt", 100, "Cairo");
describeCountry("Finland", 6, "Helsinki");
describeCountry("Germany", 83, "Berlin");
// ************************************************************ //
// Function Declarations vs. Expressions
function percentageOfWorld1(country, population) {
  const percent = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percent}% of the world population`
  );
}
percentageOfWorld1("China", 1441);

const percentageOfWorld2 = function (country, population) {
  const percent = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percent}% of the world population`
  );
};

percentageOfWorld2("China", 1441);
// ************************************************************ //
// Arrow Functions
const percentageOfWorld3 = (country, population) => {
  const percent = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percent}% of the world population`
  );
};
percentageOfWorld3("China", 1441);
