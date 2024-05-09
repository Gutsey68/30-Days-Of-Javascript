userAge = prompt('Enter your age:');
userAge = parseInt(userAge);
if (userAge >= 18) {
  console.log('Your are old enough to drive.');
} else {
  console.log(`Tou are left with ${18 - userAge} years to drive.`);
}

myAge = prompt('Enter my age:');
myAge = parseInt(myAge);
if (userAge > myAge) {
  console.log(`You are ${userAge - myAge} years older than me`);
} else if (myAge > userAge) {
  console.log(`I'm ${myAge - userAge} years older than you`);
} else {
  console.log('We are the same age');
}

let a = prompt('Enter a:');
a = parseInt(a);
let b = prompt('Enter b:');
b = parseInt(b);
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${a} is equal to ${b}`);
}

console.log(
  a > b
    ? `${a} is greater than ${b}`
    : a < b
    ? `${b} is greater than ${a}`
    : `${a} is equal to ${b}`
);

a % 2 === 0 ? console.log(`${a} is even.`) : console.log(`${a} is odd.`);

score = prompt('Enter your score:');
score = parseInt(score);

if (score < 0 || score > 100) {
  console.log('Enter a valid score');
} else if (score > 79) {
  console.log(`${score}: your score is A`);
} else if (score > 69) {
  console.log(`${score}: your score is B`);
} else if (score > 59) {
  console.log(`${score}: your score is C`);
} else if (score > 49) {
  console.log(`${score}: your score is D`);
} else {
  console.log(`${score}: your score is F`);
}

month = prompt('Enter the current month:').toLowerCase();
switch (month) {
  case 'september':
    console.log('the season is Autumn.');
    break;
  case 'october':
    console.log('the season is Autumn.');
    break;
  case 'november':
    console.log('the season is Autumn.');
    break;
  case 'december':
    console.log('the season is February.');
    break;
  case 'january':
    console.log('the season is February.');
    break;
  case 'february':
    console.log('the season is February.');
    break;
  case 'march':
    console.log('the season is Spring.');
    break;
  case 'april':
    console.log('the season is Spring.');
    break;
  case 'may':
    console.log('the season is Spring.');
    break;
  case 'june':
    console.log('the season is Summer.');
    break;
  case 'july':
    console.log('the season is Summer.');
  case 'august':
    console.log('the season is Summer.');
    break;
  default:
    console.log('Enter a valid month.');
    break;
}

dayToday = prompt('What is the day today?').toLowerCase();
switch (dayToday) {
  case 'monday':
    console.log(`${dayToday} is a working day`);
    break;
  case 'tuesday':
    console.log(`${dayToday} is a working day`);
    break;
  case 'wednesday':
    console.log(`${dayToday} is a working day`);
    break;
  case 'thursday':
    console.log(`${dayToday} is a working day`);
    break;
  case 'friday':
    console.log(`${dayToday} is a working day`);
    break;
  case 'saturday':
    console.log(`${dayToday} is a weekend.`);
    break;
  case 'sonday':
    console.log(`${dayToday} is a weekend.`);
    break;
  default:
    console.log('Enter a valid day');
    break;
}

switch (month) {
  case 'september':
    console.log('Semptember has 30 days.');
    break;
  case 'october':
    console.log('October has 31 days.');
    break;
  case 'november':
    console.log('November has 30 days.');
    break;
  case 'december':
    console.log('December has 31 days.');
    break;
  case 'january':
    console.log('January has 31 days.');
    break;
  case 'february':
    isCurrentYearLeap()
      ? console.log('February has 29 days.')
      : console.log('February has 28 days.');
    break;
  case 'march':
    console.log('March has 31 days.');
    break;
  case 'april':
    console.log('April has 30 days.');
    break;
  case 'may':
    console.log('May has 31 days.');
    break;
  case 'june':
    console.log('June has 30 days.');
    break;
  case 'july':
    console.log('July has 31 days.');
  case 'august':
    console.log('August has 31 days.');
    break;
  default:
    console.log('Enter a valid month.');
    break;
}

function isCurrentYearLeap() {
  const year = new Date().getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
