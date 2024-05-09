let emptyArray = [];
let fiveNumberOfElements = ['one', 'two', 'three', 'four', 'five'];
console.log(fiveNumberOfElements.length); // 5

firstItemFiveNumberOfElements = fiveNumberOfElements[0];
lastItemFiveNumberOfElements =
  fiveNumberOfElements[fiveNumberOfElements.length - 1];
middleItemFiveNumberOfElements =
  fiveNumberOfElements[(fiveNumberOfElements.length - 1) / 2];

let mixedDataTypes = ['one', 2, 3.0, 'four', [5, 'five'], 6, 7.0];
console.log(mixedDataTypes.length);

let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
console.log(itCompanies);
console.log(itCompanies.length);

firstItCompanie = itCompanies[0];
lastItCompanie = itCompanies[itCompanies.length - 1];
middleItCompanie = itCompanies[(itCompanies.length - 1) / 2];
console.log(firstItCompanie, lastItCompanie, middleItCompanie);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join(', ') + ' are big IT companies');

console.log(itCompanies.includes('Amazon'));
console.log(itCompanies.some(itCompanies => itCompanies.includes('oo')));

console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(
  itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
);
console.log(itCompanies.shift());
console.log(itCompanies.pop());
console.log(itCompanies.pop());
console.log(itCompanies);
console.log(itCompanies.splice(1, 2));
console.log(itCompanies.splice());

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
modifiedText = text.replace(/[.,]/g, '');
textArray = modifiedText.split(' ');
console.log(textArray.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.length - 2, 1);
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';

if (countries.indexOf('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

if (webTechs.indexOf('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  countries.push('Sass');
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
minAge = ages[0];
maxAge = ages[ages.length - 1];
console.log(minAge, maxAge);

/* median age */
const medianAge =
  ages.length % 2 === 0
    ? (ages[Math.floor(ages.length / 2) - 1] +
        ages[Math.floor(ages.length / 2)]) /
      2
    : ages[Math.floor(ages.length / 2)];

/* average age */
let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumAges += ages[i];
}
avgAges = sumAges / ages.length;
console.log(avgAges);

/* range */
const ageRange = maxAge - minAge;

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

const middleIndex = Math.floor(countries.length / 2);
const middleCountries =
  countries.length % 2 === 0
    ? countries.slice(middleIndex - 1, middleIndex + 1)
    : countries.slice(middleIndex, middleIndex + 1);
console.log(middleCountries);

const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(firstHalf, secondHalf);
