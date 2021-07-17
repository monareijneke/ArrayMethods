const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

//lijst met alle namen met .map
const heroesName = superheroes.map((item) => {
  return item.name;
});
console.log(heroesName);

//lijst met lichte helden met .filter
const lightHeroes = superheroes.filter((item) => {
  return item.weight < 190;
});
console.log(lightHeroes);

// lijst met namen van helden van 200pounds .filter en .map (chaining)
const heroes200 = superheroes
  .filter((item) => {
    const heavyHero = item.weight === "200";
    return heavyHero;
  })
  .map((item) => {
    return item.name;
  });
console.log(heroes200);

//lijst first app met .map
const firsApp = superheroes.map((item) => {
  console.log(item.name + " first appeared in " + item.first_appearance);
});

//lijst met DC comics helden in array
const dcComics = superheroes.filter((item) => {
  const dcComicsHero = item.publisher === "DC Comics";
  return dcComicsHero;
});
console.log(dcComics);

//Totaal gewicht Dc Comics helden
const weightDcHero = dcComics
  .map((item) => {
    const stringWeightD = item.weight;
    const integerWeightD = parseInt(stringWeightD, 10);
    return integerWeightD;
  })
  .reduce((subWeightD, item) => {
    const totalWeightDcHeroes = item + subWeightD;
    return totalWeightDcHeroes;
  }, 0);

console.log(weightDcHero);

//lijst met Marvel comics helden in array
const marvelComics = superheroes.filter((item) => {
  const marvelHero = item.publisher === "Marvel Comics";
  return marvelHero;
});
console.log(marvelComics);

//Totaal gewicht Marvel helden
const weightMarvelHero = marvelComics
  .map((item) => {
    const stringWeight = item.weight;
    const integerWeight = parseInt(stringWeight, 10);
    return integerWeight;
  })
  .filter((weightMarvelHero) => {
    const onlyNumbers = weightMarvelHero >= 0;
    return onlyNumbers;
  })
  .reduce((subWeightM, item) => {
    const totalWeightMarvelHeroes = item + subWeightM;
    return totalWeightMarvelHeroes;
  }, 0);

console.log(weightMarvelHero);

// BONUS, ivm tijd laten gaan. Code voor zwaarste eriut te filteren niet gevonden.
// const heaviestHero = superheroes.map((item) => {
//   const weightInString = item.weight;
//   const weightInNumber = parseInt(weightInString, 10);
// });
// console.log(heaviestHero);
