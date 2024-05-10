function fullName() {
  console.log('Gauthier Seyzeriat--Meyer');
}

fullName();

function fullNameTwo(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName('Gauthier', 'Seyzeriat-Meyer'));

fullNameTwo();

function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

console.log(addNumbers(1, 2));

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(10, 15));

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(10, 15));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(volumeOfRectPrism(7, 8, 10));

function areaOfCircle(r) {
  return Math.PI * r * r;
}

console.log(areaOfCircle(5));

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}

console.log(circumOfCircle(5));

function substanceDensity(mass, volume) {
  return mass / volume;
}

console.log(substanceDensity(10, 1.5));

const speed = (distance, time) => {
  return distance / time;
};

console.log(speed(10, 1));

const weight = (mass, gravity) => {
  return mass * gravity;
};

console.log(weight(80, 1.2));

function convertCelsiusToFahrenheit(celciusTemp) {
  return celciusTemp * (9 / 5) + 32;
}

console.log(convertCelsiusToFahrenheit(30));

function bodyMassIndex(weight, height) {
  const bmi = weight / (height * height);
  let bodyState = '';

  if (bmi < 18.5) {
    bodyState = 'Underweight';
  } else if (bmi < 24.9) {
    bodyState = 'Normal weight';
  } else if (bmi < 29.9) {
    bodyState = 'Overweight';
  } else if (bmi >= 30) {
    bodyState = 'Obese';
  }

  return `Your BMI is ${bmi.toFixed(2)}, you are ${bodyState}`;
}

console.log(bodyMassIndex(93, 1.83));

function checkSeason(month) {
  month = month.toLowerCase();
  switch (month) {
    case 'september':
    case 'october':
    case 'november':
      return 'Autumn';
    case 'december':
    case 'january':
    case 'february':
      return 'Winter';
    case 'march':
    case 'april':
    case 'may':
      return 'Spring';
    case 'june':
    case 'july':
    case 'august':
      return 'Summer';
    default:
      return 'Invalid month';
  }
}

console.log(checkSeason('September'));

function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findMax(1, 5, 3));

function solveLinEquation(a, b, c, x) {
  if (b === 0) {
    throw new Error('b cannot be zero');
  }
  const y = -(a * x + c) / b;
  return `For x = ${x}, y = ${y}`;
}

console.log(solveLinEquation(1, -2, 3, 2));

function solveQuadEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const root1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
  return `Roots are: ${root1}, ${root2}`;
}

console.log(solveQuadEquation(1, -1, -2));

function printArray(array) {
  array.forEach(value => console.log(value));
}

printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  const now = new Date();

  const padWithZero = number => number.toString().padStart(2, '0');

  const day = padWithZero(now.getDate());
  const month = padWithZero(now.getMonth() + 1);
  const year = now.getFullYear();
  const hours = padWithZero(now.getHours());
  const minutes = padWithZero(now.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

console.log(showDateTime());

function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y];
}

console.log(swapValues(3, 5));

function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(array) {
  const capitalizedArray = [];
  for (let i = 0; i < array.length; i++) {
    capitalizedArray.push(array[i].toUpperCase());
  }
  return capitalizedArray;
}

console.log(capitalizeArray(['apple', 'banana', 'cherry']));

const items = [];
function addItem(item) {
  items.push(item);
  return items;
}

console.log(addItem('apple'));

function removeItem(index) {
  if (index >= 0 && index < items.length) {
    items.splice(index, 1);
  } else {
    console.log('Invalid index');
  }
  return items;
}

console.log(removeItem(1));

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(5));

function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfOdds(5));

function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfEven(5));

function evensAndOdds(n) {
  let evens = 0;
  let odds = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
}

evensAndOdds(100);

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3));

function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

console.log(randomUserIp());

function randomMacAddress() {
  const hexChars = '0123456789ABCDEF';
  let mac = '';
  for (let i = 0; i < 6; i++) {
    mac += `${hexChars.charAt(Math.floor(Math.random() * 16))}${hexChars.charAt(
      Math.floor(Math.random() * 16)
    )}`;
    if (i < 5) mac += ':';
  }
  return mac;
}

console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
}

console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let userId = '';
  for (let i = 0; i < 7; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
}

console.log(userIdGenerator());

function userIdGenerator(length) {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let userId = '';
  for (let i = 0; i < length; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
}

function userIdGeneratedByUser() {
  const numCharacters = parseInt(
    prompt('Enter the number of characters for each user ID: '),
    10
  );
  const numIds = parseInt(
    prompt('Enter the number of user IDs to generate: '),
    10
  );

  const ids = [];
  for (let i = 0; i < numIds; i++) {
    ids.push(userIdGenerator(numCharacters));
  }

  console.log(ids.join('\n'));
}

userIdGeneratedByUser();

function arrayOfHexaColors(num) {
  const randomHexa = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  const hexaArray = [];
  for (let i = 0; i < num; i++) {
    hexaArray.push(randomHexa());
  }
  return hexaArray;
}

console.log(arrayOfHexaColors(3));

function arrayOfRgbColors(num) {
  const randomRgb = () => {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
  };
  const rgbArray = [];
  for (let i = 0; i < num; i++) {
    rgbArray.push(randomRgb());
  }
  return rgbArray;
}

console.log(arrayOfRgbColors(3));

function convertHexaToRgb(hexa) {
  hexa = hexa.replace('#', '');
  if (hexa.length === 3) {
    hexa = hexa
      .split('')
      .map(char => char + char)
      .join('');
  }
  const r = parseInt(hexa.substring(0, 2), 16);
  const g = parseInt(hexa.substring(2, 4), 16);
  const b = parseInt(hexa.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(convertHexaToRgb('#a3e12f'));

function convertRgbToHexa(rgb) {
  const toHex = num => num.toString(16).padStart(2, '0');
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(convertRgbToHexa('rgb(163, 225, 47)'));

function generateColors(type, num) {
  const randomHexa = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  const randomRgb = () => {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
  };

  const colorsArray = [];
  for (let i = 0; i < num; i++) {
    if (type === 'hexa') {
      colorsArray.push(randomHexa());
    } else if (type === 'rgb') {
      colorsArray.push(randomRgb());
    }
  }

  return num === 1 ? colorsArray[0] : colorsArray;
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(n) {
  if (n < 0) return 'Invalid input';
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

function isEmpty(value) {
  return value === undefined || value === null || value === '';
}

console.log(isEmpty(''));

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3));

function sumOfArrayItems(array) {
  if (!array.every(item => typeof item === 'number')) {
    return 'All items in the array must be numbers';
  }
  return array.reduce((acc, val) => acc + val, 0);
}

console.log(sumOfArrayItems([1, 2, 3, 4]));

function average(array) {
  if (!array.every(item => typeof item === 'number')) {
    return 'All items in the array must be numbers';
  }
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}

console.log(average([1, 2, 3, 4]));

function modifyArray(array) {
  if (array.length < 5) {
    return 'Not Found';
  }
  array[4] = array[4].toUpperCase();
  return array;
}

console.log(
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrime(7));

function areAllItemsUnique(array) {
  return new Set(array).size === array.length;
}

console.log(areAllItemsUnique([1, 2, 3, 4]));

function areAllItemsSameType(array) {
  if (array.length === 0) return true;
  const firstType = typeof array[0];
  return array.every(item => typeof item === firstType);
}

console.log(areAllItemsSameType([1, 2, 3]));
function isValidVariable(name) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

console.log(isValidVariable('variable'));

function sevenRandomNumbers() {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < 7) {
    uniqueNumbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(uniqueNumbers);
}

console.log(sevenRandomNumbers());

function reverseCountries(countries) {
  const copiedCountries = [...countries];
  return copiedCountries.reverse();
}

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

console.log(reverseCountries(countries));
