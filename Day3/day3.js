let firstName = 'gauthier',
  lastName = 'seyzeriat',
  country = 'france',
  city = 'colmar',
  age = 27,
  isMarried = false,
  year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' == typeof 10); // false
console.log(parseInt('9.8') == 10); // false

const check = 4 > 3 && 10 > 5; // true
const check2 = 4 > 3 || 10 < 5; // true
const check3 = 4 > 3 || 10 > 5; // true

console.log(NaN === NaN); // false
console.log(undefined === null); // false

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log('python'.length == 'jargon'.length + 1); // false

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('python'.includes('on') && 'dragon'.includes('on'))); // false

const now = new Date();
console.log(now.getFullYear()); // current year
console.log(now.getMonth() + 1); // current month
console.log(now.getDate()); // current date
console.log(now.getDay()); // current day of the week as a number
console.log(now.getHours()); // the hours now
console.log(now.getMinutes()); // the minutes now
console.log(now.getTime()); // n° seconds elapsed from 01/01/1970 to now

/* calcul of the area of a triangle */
let base = prompt('Enter base: ');
let height = prompt('Enter height: ');
console.log(`The area of the triangle is ${0.5 * base * height}`);

/* calcul of the perimeter of rectangle */
let a = prompt('Enter side a: ');
a = parseInt(a);
let b = prompt('Enter side b: ');
b = parseInt(b);
let c = prompt('Enter side c: ');
c = parseInt(c);
console.log(`The perimeter of the triangle is ${a + b + c}`);

/* calcul of the area of a rectangle */

let lengthRectangle = prompt('Enter length: ');
lengthRectangle = parseInt(lengthRectangle);
let widthRectangle = prompt('Enter width: ');
widthRectangle = parseInt(widthRectangle);
console.log(`The area of the rectangle is ${lengthRectangle * widthRectangle}`);
console.log(
  `The perimeter of the rectangle is ${2 * (lengthRectangle + widthRectangle)}`
);

/* calcul of the area of a circle */
let radius = prompt('Enter radius:');
radius = parseInt(radius);
const pi = Math.PI;
console.log(`The area of the circle is ${pi * radius * radius}`);

/* calcul of the perimeter of a circle */
console.log(`The area of the circle is ${2 * pi * radius}`);

/* calculate the slope, x-intercept and y-intercept of y = 2x -2 */
const m = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / m;
console.log(
  `Slope: ${m}, X-Intercept: ${xIntercept}, Y-Intercept: ${yIntercept}`
);

/* slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) */
const x1 = 2,
  y1 = 2,
  x2 = 6,
  y2 = 10;
const response = (y2 - y1) / (x2 - x1);
console.log(response); // 2 , the 2 slopes are equal

/* Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */
console.log((-3) ** 2 + 6 * -3 + 9); // 0

// pay
hours = prompt('Enter hours: ');
hours = parseInt(hours);
rate_per_hour = prompt('Enter rate per hours: ');
rate_per_hour = parseInt(rate_per_hour);
console.log(`Yout weekly earning is ${hours * rate_per_hour}`);

let nameLength = prompt('enter your name: ');

nameLength > 7
  ? console.log(`Your name is long`)
  : console.log(`Your name is short`);

let firstName2 = prompt('enter your name: ');
let lastName2 = prompt('enter your firstname: ');
firstName2 > lastName2
  ? console.log(
      `Your first name, ${firstName2} is longer than your family name, ${lastName2}`
    )
  : console.log(
      `Your first name, ${firstName2} is shorter than your family name, ${lastName2}`
    );

let myAge = prompt('enter my age: ');
let yourAge = prompt('enter your age: ');
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you.`)
  : console.log(`You are ${yourAge - myAge} years older than me.`);

let birthYear = prompt('Enter birth year');
birthYear < 2006
  ? console.log(`You are ${2024 - birthYear}. You are old enough to drive`)
  : console.log(
      `You are ${2024 - birthYear}.  You will be allowed to drive after ${
        18 - (2024 - birthYear)
      } years.`
    );

const years = prompt('Enter number of years you live: ');
const secondsInYear = 365.25 * 24 * 60 * 60;
const totalSeconds = Math.round(years * secondsInYear);
console.log(`You lived ${totalSeconds} seconds.`);

const formatDate = date => {
  const pad = num => String(num).padStart(2, '0');
  const YYYY = date.getFullYear();
  const MM = pad(date.getMonth() + 1);
  const DD = pad(date.getDate());
  const HH = pad(date.getHours());
  const mm = pad(date.getMinutes());
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}`;
};

const nowNow = new Date();
console.log(formatDate(now));
