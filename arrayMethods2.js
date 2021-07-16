//A return item met .find
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = superheroes.find((item) => {
  return item.name === "Spiderman";
});
console.log(findSpiderMan);

//B verdubbelen items met .mapping
const arrayValues = [1, 2, 3];

const doubleArrayValues = arrayValues.map((item) => {
  return item * 2;
});

console.log(doubleArrayValues);

//C check >10 met .some
const numbers = [1, 4, 3, 6, 9, 7, 11];
const numbers2 = [1, 2, 1, 2, 1, 2];

const containsNumberBiggerThan10 = numbers.some((item) => {
  return item > 10;
});
console.log(containsNumberBiggerThan10);

const containsNumber2BiggerThan10 = numbers2.some((item) => {
  return item > 10;
});
console.log(containsNumber2BiggerThan10);

//D Check met .includes
const theGreat7 = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

const isItalyInTheGreat7 = theGreat7.includes("Italy");
console.log(isItalyInTheGreat7);

//E items ver10voudige met .forEach
const fold = [1, 4, 3, 6, 9, 7, 11];

tenFold = fold.forEach((item) => {
  console.log(item * 10);
});

//F check alles onder 100 met .every
const bigNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isBelow100 = bigNumbers.every((item) => {
  return item < 100;
});
console.log(isBelow100);

//G Bonus met .reduce
const someNumbers = [
  1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234,
];

const bigSum = someNumbers.reduce((subTotal, item) => {
  return item + subTotal;
}, 0);

console.log(bigSum);
