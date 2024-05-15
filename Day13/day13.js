console.table(countries);

console.group('Countries by Population');
countries.forEach(country => {
  console.log(`${country.name}: ${country.population}`);
});
console.groupEnd();

console.assert(10 > 2 * 10, 'the assert is wrong : 10 is not bigger than 20');
console.warn('Warning, you are too pretty');

console.error('Error javascript, you must use php');

let array = Array(1000000).fill(0);

console.time('for loop');
for (let i = 0; i < array.length; i++) {
  let temp = array[i];
}
console.timeEnd('for loop');

console.time('while loop');
let j = 0;
while (j < array.length) {
  let temp = array[j];
  j++;
}
console.timeEnd('while loop');

console.time('for of loop');
for (let item of array) {
  let temp = item;
}
console.timeEnd('for of loop');

console.time('forEach loop');
array.forEach(item => {
  let temp = item;
});
console.timeEnd('forEach loop');
