const countries = ['Finland', 'Sweden', 'Norway'];

const newSet = new Set();
console.log(newSet);

const numberSet = new Set();
for (let i = 0; i < 11; i++) {
  numberSet.add(i);
}

numberSet.delete(0);
console.log(numberSet);
numberSet.clear();

const fiveStringArray = ['one', 'two', 'three', 'four', 'five'];
fiveStringSet = new Set(fiveStringArray);
console.log(fiveStringSet);

const countriesMap = new Map();
countriesMap.set('Finland', 'Finland'.length);
countriesMap.set('Sweden', 'Sweden'.length);
countriesMap.set('Norway', 'Norway'.length);

console.log(countriesMap);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let A = new Set(a);
let B = new Set(b);

const unionC = new Set([...a, ...b]);
console.log(unionC);

const intersectionC = new Set(a.filter(num => B.has(num)));
console.log(intersectionC);

const differenceC = new Set(a.filter(num => !B.has(num)));
console.log(differenceC);

let numberOfLanguages = new Set();
for (let i = 0; i < countries2.length; i++) {
  countries2[i].languages.forEach(language => {
    numberOfLanguages.add(language);
  });
}
console.log(numberOfLanguages.size);

function findMostSpokenLanguages(countries, topN) {
  const languageCounts = {};

  for (let i = 0; i < countries.length; i++) {
    countries[i].languages.forEach(language => {
      if (languageCounts[language]) {
        languageCounts[language] += 1;
      } else {
        languageCounts[language] = 1;
      }
    });
  }

  const sortedLanguages = Object.entries(languageCounts)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);

  return sortedLanguages;
}

const topLanguages = findMostSpokenLanguages(countries2, 10);
console.log(topLanguages);
