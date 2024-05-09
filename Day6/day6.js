const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

for (let i = 1; i < 11; i++) {
  console.log(i);
}

let i = 1;
do {
  console.log(i);
  i++;
} while (i < 11);

n = prompt('Enter a number:');
n = parseInt(n);
for (let i = 0; i < n + 1; i++) {
  console.log(i);
}

textHash = '';
for (let i = 1; i < 8; i++) {
  textHash += '#';
  console.log(textHash);
}

for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i i^2 i^3');
for (let i = 0; i < 11; i++) {
  console.log(`${i} ${i * i} ${i * i * i}`);
}

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < 101; i++) {
  if (!(i % 2 === 0)) {
    console.log(i);
  }
}

function isPrime(number) {
  // determine prime numbers
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < 101; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

let j = 0;
for (let i = 0; i < 101; i++) {
  j += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${j}.`);

let oddNumbers = 0;
let evenNumbers = 0;
let arrayNumber = [];
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    evenNumbers += i;
  } else {
    oddNumbers += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenNumbers}. And the sum of all odds from 0 to 100 is ${oddNumbers}.`
);
arrayNumber.push(evenNumbers);
arrayNumber.push(oddNumbers);
console.log(arrayNumber);

randomNumber = [];
arrayRandomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumber[i] = parseInt(Math.random() * 10);
  if (!arrayRandomNumbers.includes(randomNumber[i])) {
    arrayRandomNumbers.push(randomNumber[i]);
  } else {
    i = i - 1;
  }
}
console.log(arrayRandomNumbers);

let sixCharactersRandomId = Math.random().toString(36).substring(2, 8);
console.log(sixCharactersRandomId);

const generateRandomId = length => {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

console.log(generateRandomId(12));

// random hexadecimal number
const generateHexColor = () => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, '0')}`;
};

// random RGB color number
const generateRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// countries to upper case
for (i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
}
console.log(countries);

// countries length
for (i = 0; i < countries.length; i++) {
  countries[i] = countries[i].length;
}
console.log(countries);

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

// countries array of arrays
const countriesArray = [];

for (let i = 0; i < countries2.length; i++) {
  const country = countries2[i];
  countriesArray.push([
    country,
    country.slice(0, 3).toUpperCase(),
    country.length
  ]);
}

console.log(countriesArray);

landArray = [];
for (let i = 0; i < countries2.length; i++) {
  if (countries2[i].includes('land')) {
    landArray.push(countries2[i]);
  }
  if (i == countries2.length - 1 && landArray.length === 0) {
    console.log('These are no countries with land');
    break;
  }
}
console.log(landArray);

iaArray = [];
for (let i = 0; i < countries2.length; i++) {
  if (countries2[i].substring(countries2[i].length - 2) == 'ia') {
    iaArray.push(countries2[i]);
  } else if (i == countries2.length - 1 && iaArray.length === 0) {
    console.log('These are no countries with ia');
    break;
  }
}
console.log(iaArray);

biggestCountry = '';
for (let i = 0; i < countries2.length; i++) {
  if (countries2[i].length > biggestCountry.length) {
    biggestCountry = countries2[i];
  }
}
console.log(biggestCountry);

fiveCharactersCountry = [];
for (let i = 0; i < countries2.length; i++) {
  if (countries2[i].length == 5) {
    fiveCharactersCountry.push(countries2[i]);
  }
}
console.log(fiveCharactersCountry);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

biggestWebTech = '';
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > biggestWebTech.length) {
    biggestWebTech = webTechs[i];
  }
}
console.log(biggestWebTech);

arrayOfArrays = [];
for (let i = 0; i < webTechs.length; i++) {
  arrayOfArrays.push([webTechs[i], webTechs[i].length]);
}
console.log(arrayOfArrays);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let mernAcronym = '';
for (let i = 0; i < mernStack.length; i++) {
  mernAcronym += mernStack[i][0];
}

console.log(mernAcronym);

for (const tech of webTechs) {
  console.log(tech);
}

reverseFruits = [];
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (i = 1; i <= fruits.length; i++) {
  reverseFruits.push(fruits[fruits.length - i]);
}
console.log(reverseFruits);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (const stack of fullStack) {
  for (const tech of stack) {
    console.log(tech.toUpperCase());
  }
}

const copiedCountries = [...countries2];
console.log(copiedCountries);

const sortedCountries = copiedCountries.sort();

console.log(sortedCountries);

console.log(webTechs.sort());
console.log(mernStack.sort());

const countriesAll = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

landArrayAll = [];
for (let i = 0; i < countriesAll.length; i++) {
  if (countriesAll[i].includes('land')) {
    landArrayAll.push(countriesAll[i]);
  }
  if (i == countriesAll.length - 1 && landArrayAll.length === 0) {
    console.log('These are no countries with land');
    breakAll;
  }
}
console.log(landArrayAll);

biggestCountryAll = '';
for (let i = 0; i < countriesAll.length; i++) {
  if (countriesAll[i].length > biggestCountryAll.length) {
    biggestCountryAll = countriesAll[i];
  }
}
console.log(biggestCountryAll);

fourCharactersCountry = [];
for (let i = 0; i < countriesAll.length; i++) {
  if (countriesAll[i].length == 4) {
    fourCharactersCountry.push(countriesAll[i]);
  }
}
console.log(fourCharactersCountry);

const multiWordCountries = [];

for (let i = 0; i < countriesAll.length; i++) {
  if (countriesAll[i].split(' ').length >= 2) {
    multiWordCountries.push(countriesAll[i]);
  }
}

console.log(multiWordCountries);

const reversedAndCapitalized = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reversedAndCapitalized.push(countries[i].toUpperCase());
}
console.log(reversedAndCapitalized);
