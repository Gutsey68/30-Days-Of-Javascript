const countries = [
  'Finland',
  'Sweden',
  'Denmark',
  'Norway',
  'IceLand',
  'England'
];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
];

/* 
In JavaScript, array manipulation methods like forEach, map, filter, and reduce each serve distinct purposes. forEach() is used for executing a function on each array element without returning a result, ideal for applying side effects. map() transforms each element of the array according to a specified function and returns a new array of the same size with the transformed elements, useful for data transformations. filter() creates a new array containing only elements that satisfy a provided condition, perfect for extracting subsets of data based on criteria. Lastly, reduce() accumulates all elements in an array into a single value based on a reducer function, commonly used for operations like summing values or concatenating elements. These methods provide powerful, high-level tools for data handling and functional programming in JavaScript.
*/

function double(number) {
  return number * 2;
}

numbers.forEach(num => console.log(double(num)));

const doubledNumbers = numbers.map(double);

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.map(double).filter(isEven);

const sum = numbers.reduce((acc, num) => acc + double(num), 0);

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(num => console.log(num));

const upperCountries = countries.map(country => country.toUpperCase());
console.log(upperCountries);

const lengthCountries = countries.map(country => country.length);
console.log(lengthCountries);

const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

const upperNames = names.map(names => names.toUpperCase());
console.log(upperNames);

const pricesProducts = products.map(product => product.price);
console.log(pricesProducts);

const landCountries = countries.filter(country => country.includes('land'));
console.log(landCountries);

const sixCharacterCountries = countries.filter(country => country.length === 6);
console.log(sixCharacterCountries);

const sixCharacterCountriesOrMore = countries.filter(
  country => country.length >= 6
);
console.log(sixCharacterCountriesOrMore);

const countriesStartWithE = countries.filter(country =>
  country.startsWith('E')
);
console.log(countriesStartWithE);

const valuesPrices = products.filter(
  product => product.price != ' ' && product.price != ''
);
console.log(valuesPrices);

function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

const reduceSumNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(reduceSumNumbers);

const reduceCountries = countries.reduce(
  (acc, country) => acc + ', ' + country
);
console.log(reduceCountries + ' are north European countries');

/*
The some and every methods in JavaScript check array elements against a condition. Some returns true if any element meets the condition, useful for finding any matching elements. Every checks if all elements meet the condition, returning true only if the entire array complies, ideal for ensuring all elements adhere to a specific requirement. These methods provide flexible checks for presence versus uniformity in arrays.
*/

const someSevenNames = names.some(name => name.length >= 7);
console.log(someSevenNames);

const everyContainLand = countries.every(country => country.includes('land'));
console.log(everyContainLand);

/*
The find and findIndex methods in JavaScript both search for elements in an array based on a test condition provided by a callback function. Find returns the first element that satisfies the condition, while findIndex returns the index of this first matching element. If no element matches the condition, find returns undefined, and findIndex returns -1. These methods are useful for locating elements or their positions when only the first occurrence is needed.
*/

const findFirstCountryWithSixLetters = countries.find(
  country => country.length === 6
);
console.log(findFirstCountryWithSixLetters);

const findIndexFirstCountryWithSixLetters = countries.findIndex(
  country => country.length === 6
);
console.log(findIndexFirstCountryWithSixLetters);

const findIndexNorway = countries.findIndex(country => country === 'Norway');
console.log(findIndexNorway);

const findIndexRussia = countries.findIndex(country => country === 'Russia');
console.log(findIndexRussia);

const totalPrice = products
  .filter(product => product.price !== '' && product.price > 0)
  .map(product => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log(`Total Price: $${totalPrice}`);

const totalSum = products.reduce((acc, product) => {
  if (typeof product.price === 'number' && product.price > 0) {
    return acc + product.price;
  }
  return acc;
}, 0);

console.log(`Total Sum: $${totalSum}`);

function categorizeCountries(countries) {
  return {
    withLand: countries.filter(country => country.includes('land')),
    withIa: countries.filter(country => country.endsWith('ia')),
    withIsland: countries.filter(country => country.includes('island')),
    withStan: countries.filter(country => country.includes('stan'))
  };
}

function countCountryInitials(countries) {
  const initialsCount = new Map();

  countries.forEach(country => {
    const initial = country[0].toUpperCase();

    if (initialsCount.has(initial)) {
      initialsCount.set(initial, initialsCount.get(initial) + 1);
    } else {
      initialsCount.set(initial, 1);
    }
  });

  return Array.from(initialsCount, ([letter, count]) => ({ letter, count }));
}

function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}

function getLastTenCountries(countries) {
  return countries.slice(-10);
}

function mostCommonInitial(countries) {
  const initialCount = countries.reduce((acc, country) => {
    const initial = country[0].toUpperCase();
    acc[initial] = (acc[initial] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(initialCount).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];
}

function mostSpokenLanguages(countries, topN) {
  const languageCounts = countries.reduce((acc, country) => {
    country.languages.forEach(language => {
      acc[language] = (acc[language] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([language, count]) => ({ country: language, count }))
    .slice(0, topN);

  return sortedLanguages;
}

function mostPopulatedCountries(countries, topN) {
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, topN)
    .map(country => ({
      country: country.name,
      population: country.population
    }));
}

const statistics = {
  data: [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26
  ],
  count() {
    return this.data.length;
  },
  sum() {
    return this.data.reduce((acc, num) => acc + num, 0);
  },
  min() {
    return Math.min(...this.data);
  },
  max() {
    return Math.max(...this.data);
  },
  range() {
    return this.max() - this.min();
  },
  mean() {
    return this.sum() / this.count();
  },
  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = sorted.length / 2;
    return sorted.length % 2 !== 0
      ? sorted[Math.floor(mid)]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  },
  mode() {
    const frequency = {};
    this.data.forEach(
      value => (frequency[value] = (frequency[value] || 0) + 1)
    );
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.entries(frequency).filter(
      ([value, freq]) => freq === maxFreq
    );
    return { mode: parseInt(modes[0][0]), count: modes[0][1] };
  },
  var() {
    const mean = this.mean();
    return (
      this.data.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) /
      this.count()
    );
  },
  std() {
    return Math.sqrt(this.var());
  },
  freqDist() {
    const frequency = {};
    this.data.forEach(
      value => (frequency[value] = (frequency[value] || 0) + 1)
    );
    return Object.entries(frequency).map(([value, freq]) => [
      (freq / this.count()) * 100,
      parseInt(value)
    ]);
  },
  describe() {
    return `Count: ${this.count()}
  Sum: ${this.sum()}
  Min: ${this.min()}
  Max: ${this.max()}
  Range: ${this.range()}
  Mean: ${this.mean()}
  Median: ${this.median()}
  Mode: ${JSON.stringify(this.mode())}
  Variance: ${this.var()}
  Standard Deviation: ${this.std()}
  Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
  }
};
